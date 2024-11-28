import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import useAssignmentData from '../../hooks/useAssignmentData';

const AssignmentForm = () => {
  const { games, users, createAssignment } = useAssignmentData();
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [error, setError] = useState(null);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleAssign = async (e) => {
    e.preventDefault();
    if (!selectedUser || !selectedGame || !selectedPosition) {
      setError('Please select a game, an official, and a position.');
      return;
    }

    console.log(selectedUser, selectedGame, selectedPosition);

    try {
      const assinmentData = await axios.post('/api/assignments', {
        game_id: selectedGame, 
        official_id: selectedUser,
        assigner_id: 5,
        position: selectedPosition,
        game_payment_id: 1,
      });

      await createAssignment(assignmentData);


      // Reset the form
      setSelectedGame('');
      setSelectedUser('');
      setSelectedPosition('');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="assignment-form">
      <h1>Assignment Form</h1>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleAssign}>
        <div className="form-group">
          <label htmlFor="gameSelect">Select Game</label>
          <select
            id="gameSelect"
            className="form-control"
            value={selectedGame}
            onChange={handleGameChange}
          >
            <option value="">Select a game</option>
            {games.map((game) => (
              <option key={`game-${game.id}`} value={game.id}>
                {game.title} - {game.date_time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="userSelect">Select Official</label>
          <select
            id="userSelect"
            className="form-control"
            value={selectedUser}
            onChange={handleUserChange}
          >
            <option value="">Select Official</option>
            {users.map((user) => (
              <option key={`user-${user.id}`} value={user.id}>
                {user.name}
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
            onChange={handlePositionChange}
          >
            <option value="">Select a position</option>
            <option value="Referee">Referee</option>
            <option value="Assistant Referee">Assistant Referee</option>
            <option value="Fourth Official">Fourth Official</option>
          </select>
        </div>
        <Button 
          name="Assign" 
          className="button--primary" 
          handle={handleAssign}
        />
      </form>
      <div className="games-list">
        <h2>Games List</h2>
        {games.map((game) => (
          <div key={`game-detail-${game.id}`} className="game-details">
            <h3>{game.title}</h3>
            <p>Home Team: {game.home_team}</p>
            <p>Away Team: {game.away_team}</p>
            <p>Date and Time: {game.date_time}</p>
            <p>Location: {game.location}</p>
            <p>Field: {game.field}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentForm;