import React, { useState, useEffect } from 'react';
import useAssignmentData from '../../hooks/useAssignmentData';
import Button from '../Button/Button';
import useUtils from '../../hooks/useUtils';

const AssignmentForm = () => {
  const { games, assignments, setAssignments, fetchAvailableOfficialsForGame, createAssignment, error } = useAssignmentData();
  const {convertDateString} = useUtils();
  const [selectedOfficial, setSelectedOfficial] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [availableOfficials, setAvailableOfficials] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchOfficials = async () => {
      if (selectedGame) {
        try {
          const officials = await fetchAvailableOfficialsForGame(selectedGame);
          setAvailableOfficials(officials);
        } catch (error) {
          console.error('Failed to fetch available officials:', error);
        }
      } else {
        setAvailableOfficials([]);
      }
    };

    fetchOfficials();
  }, [selectedGame, fetchAvailableOfficialsForGame]);

  const handleAssign = async (e) => {
    e.preventDefault();
    if (!selectedOfficial || !selectedGame || !selectedPosition) {
      setFormError('Please select a game, an official, and a position.');
      return;
    }

    const isAlreadyAssigned = assignments.some(
      (assignment) => assignment.game_id === selectedGame && assignment.official_id === selectedOfficial
    );

    if (isAlreadyAssigned) {
      setFormError('This official is already assigned to the selected game.');
      return;
    }

    try {
      const assignmentData = {
        game_id: selectedGame,
        official_id: selectedOfficial,
        assigner_id: 5,
        position: selectedPosition,
        game_payment_id: 1,
      };

      await createAssignment(assignmentData);

      setAssignments(prevAssignments => [...prevAssignments, assignmentData]);

      const officials = await fetchAvailableOfficialsForGame(selectedGame);
      setAvailableOfficials(officials);

      setSelectedGame('');
      setSelectedOfficial('');
      setSelectedPosition('');
      setFormError(null);
    } catch (error) {
      console.error(error);
      setFormError(error.message);
    }
  };

  const unassignedGames = games.filter(game => !game.officials_assigned);

  return (
    <div className="assignment-form">
      <h1>Create A New Assignment</h1>
      {formError && <p>Error: {formError}</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleAssign}>
        <div className="form-group">
          <label htmlFor="gameSelect">Select Game</label>
          <select
            id="gameSelect"
            className="form-control"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="">Select a game</option>
            {unassignedGames.map((game) => (
              <option key={`game-${game.id}`} value={game.id}>
                {game.home_team} vs {game.away_team} - {convertDateString(game.date_time).full}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="officialSelect">Select Official</label>
          <select
            id="officialSelect"
            className="form-control"
            value={selectedOfficial}
            onChange={(e) => setSelectedOfficial(e.target.value)}
            disabled={!selectedGame}
          >
            <option value="">Select Official</option>
            {selectedGame && availableOfficials.map((official) => (
              <option key={`official-${official.id}`} value={official.id}>
                {official.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="positionSelect">Select Position</label>
          <select
            id="positionSelect"
            className="form-control"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
          >
            <option value="">Select a position</option>
            <option value="Referee">Referee</option>
            <option value="Assistant Referee">Assistant Referee</option>
            <option value="Fourth Official">Fourth Official</option>
          </select>
        </div>
        <Button name="Assign" className="button--primary" handle={handleAssign} />
      </form>
    </div>
  );
};

export default AssignmentForm;