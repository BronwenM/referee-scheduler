import React, { useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';

const GameForm = () => {
const [error, setError] = useState(null);
const [game, setGame] = useState({
    user_association_id: 1, //This is hardcoded to 1 for now. once we do permissions we will change this
    title: '',
    home_team: '',
    away_team: '',
    date_time: '',
    location: '',
    field: '',
    officials_assigned: false,
    status: '',
    game_type: ''
});

const handleChange = (e) => {
  const {name, value,type,checked} = e.target;
  setGame((prevGame) => ({
    ...prevGame,
    [name]: type === "checkbox" ? checked : value
  }));
};

const handleGameSubmit = async (e) => {
  e.preventDefault();
  console.log('Form submitted:', game);

  try {
    const response = await axios.post('/api/games', game);
    console.log('Game created:', response.data);
    setError(null);

    // Reset the form
    setGame({
      title: '',
      home_team: '',
      away_team: '',
      date_time: '',
      location: '',
      field: '',
      officials_assigned: false,
      status: '',
      game_type: ''
    });
  } catch (error) {
    console.error('Failed to create game:', error);
    setError('Failed to create game');
  }
};
  return (
    <section>
    <h1>New Game</h1>
    <form onSubmit={handleGameSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={game.title}
        onChange={handleChange}
        placeholder='ex. Regular Season Game 1'
      />
      <br />
      <label htmlFor="home_team">Home Team</label>
      <input
        type="text"
        id="home_team"
        name="home_team"
        value={game.home_team}
        onChange={handleChange}
        placeholder='ex. Battling Bandits'
      />
      <br />
      <label htmlFor="away_team">Away Team</label>
      <input
        type="text"
        id="away_team"
        name="away_team"
        value={game.away_team}
        onChange={handleChange}
        placeholder='ex. Crawford Castles'
      />
      <br />
      <label htmlFor="date_time">Date and Time</label>
      <input
        type="datetime-local"
        id="date_time"
        name="date_time"
        value={game.date_time}
        step={300}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={game.location}
        onChange={handleChange}
        placeholder='ex. Steveston-London Secondary School'
      />
      <br />
      <label htmlFor="field">Field</label>
      <input
        type="text"
        id="field"
        name="field"
        value={game.field}
        onChange={handleChange}
        placeholder='ex. Rink 3'
      />
      <br />
      <label htmlFor="status">Status</label>
      <select
        id="status"
        name="status"
        value={game.status}
        onChange={handleChange}
      >
        <option value="">Select Status</option>
        <option value="upcoming">Upcoming</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <br />
      <label htmlFor="game_type">Game Type</label>
      <select
        id="game_type"
        name="game_type"
        value={game.game_type}
        onChange={handleChange}
      >
        <option value="">Select Game Type</option>
        <option value="league">League</option>
        <option value="tournament">Tournament</option>
        <option value="friendly">Friendly</option>
      </select>
      <br />
      {/* <label htmlFor="officials_assigned">Officials Assigned</label>
      <input
        type="checkbox"
        id="officials_assigned"
        name="officials_assigned"
        checked={game.officials_assigned}
        onChange={handleChange}
      />
      <br /> */}
      <Button 
        handle={handleGameSubmit}
        name="Create Game"
        className="primary"
      />      
    </form>
  </section>
  );

};

export default GameForm;