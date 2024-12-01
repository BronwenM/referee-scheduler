import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAssignmentData = () => {
  const [games, setGames] = useState([]);
  const [officials, setOfficials] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch games, officials, and assignments all in one go to avoid multiple requests
    const fetchData = async () => {
      try {
        const [gamesResponse, officialsResponse, assignmentsResponse] = await Promise.all([
          axios.get('/api/games', { withCredentials: true }),
          axios.get('/api/users', { withCredentials: true }), // Assuming the endpoint is still /api/users
          axios.get('/api/assignments', { withCredentials: true })
        ]);

        // Filter out games that already have officials assigned before setting games state
        setGames(gamesResponse.data.filter(game => !game.officials_assigned));
        setOfficials(officialsResponse.data);
        setAssignments(assignmentsResponse.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  // A function to fetch available officials for a game using gameID, excluding those who are already assigned to that game or have all-day unavailabilities set to true
  const fetchAvailableOfficialsForGame = useCallback(async (gameId) => {
    try {
      // Fetch unavailabilities to filter out officials who are unavailable for the game
      const unavailabilitiesResponse = await axios.get('/api/unavailabilities', { withCredentials: true });

      // Filter out officials who have all-day unavailabilities set to false
      const allDayUnavailabilities = unavailabilitiesResponse.data.filter(unavailability => !unavailability.all_day);

      // Create a set of official IDs who have all-day unavailabilities set to false
      const unavailableOfficialIds = new Set(allDayUnavailabilities.map(unavailability => unavailability.official_id));

      // Filter out officials who are unavailable for the game
      const availableOfficials = officials.filter(official => !unavailableOfficialIds.has(official.id));

      const assignedOfficialsForGame = assignments.filter(assignment => assignment.game_id === Number(gameId));

      const assignedOfficialIdsForGame = assignedOfficialsForGame.map(assignment => assignment.official_id);

      return availableOfficials.filter(official => !assignedOfficialIdsForGame.includes(official.id));

    } catch (error) {
      console.error(error);
      setError('Failed to fetch available officials');
      throw error;
    }
  }, [officials, assignments]);

  // A function to create an assignment
  const createAssignment = async (assignmentData) => {
    try {
      const response = await axios.post('/api/assignments', assignmentData, { withCredentials: true });
      // Update the assignments state with the new assignment
      setAssignments(prevAssignments => [...prevAssignments, response.data]);
      return response.data;
    } catch (error) {
      console.error(error);
      setError('Failed to create assignment');
      throw error;
    }
  };

  return { games, assignments, setAssignments, error, fetchAvailableOfficialsForGame, createAssignment };
};

export default useAssignmentData;