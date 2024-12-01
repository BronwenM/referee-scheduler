import { useState, useEffect } from 'react';
import axios from 'axios';
//TODO set up caching and local storage 
const useAssignmentData = () => {
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch games from the API
        const gamesResponse = await axios.get('/api/games', { withCredentials: true });
        const unassignedGames = gamesResponse.data.filter(game => !game.officials_assigned);
        setGames(unassignedGames);

        // Fetch unavailabilities for officials with all_day set to true
        const unavailabilitiesResponse = await axios.get('/api/unavailabilities', { withCredentials: true });
        const allDayUnavailabilities = unavailabilitiesResponse.data.filter(unavailability => unavailability.all_day);

        console.log(allDayUnavailabilities);

        // Extract unique official IDs from unavailabilities
        const officialIds = [...new Set(allDayUnavailabilities.map(unavailability => unavailability.official_id))];

        // Fetch assignments for each official to check if they are assigned to a game
        const assignmentRequests = officialIds.map(id => axios.get(`/api/assignments?official_id=${id}`, { withCredentials: true }));
        const assignmentResponses = await Promise.all(assignmentRequests);

        console.log(assignmentResponses);

        // Filter officials who are not assigned to any game
        const availableOfficials = assignmentResponses
          .filter(response => response.data.length === 0)
          .map((response, index) => officialIds[index]);

        // Fetch user details for available officials
        const userRequests = availableOfficials.map(id => axios.get(`/api/users/${id}`, { withCredentials: true }));
        const userResponses = await Promise.all(userRequests);
        const usersData = userResponses.map(response => response.data);

        setUsers(usersData);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  // Function to create an assignment
  const createAssignment = async (assignmentData) => {
    try {
      const response = await axios.post('/api/assignments', assignmentData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(error);
      setError('Failed to create assignment');
      throw error;
    }
  }

  //ADMIN/ASSIGNER: Get all assignments

  return { games, users, error, createAssignment };
};

export default useAssignmentData;

// HI THIS IS ALEXIS
//HEllo how is life?
// I'm real fuckin tired today bro. you?
// Im doing great and ready to kick ass
