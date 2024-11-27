import React, { useState } from 'react';
import Button from '../Button/Button';

const GameForm = () => {
const [game, setGame] = useState({
    title: '',
    home_team: '',
    away_team: '',
    date_time: '',
    field: '',
    officials_assigned: false,
    status: ''
});

const handleChange = (e) => {
  const {name, value,type,checked} = e.target;
  setGame((prevGame) => ({
    ...prevGame,
    [name]: type === "checkbox" ? checked : value
  }));
};
//It is not only logging the form data to the console, it should also post the form data to the backend when we start posting to the backend
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', game);
  setGame({
    title: '',
    home_team: '',
    away_team: '',
    date_time: '',
    field: '',
    officials_assigned: false,
    status: ''
  });
};
  return (
    <section>
      <h1>Game Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={game.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="home_team">
          Home Team:
        </label>
        <input
          type="text"
          id="home_team"
          name="home_team"
          value={game.home_team}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="away_team">
          Away Team:
        </label>
        <input
          type="text"
          id="away_team"
          name="away_team"
          value={game.away_team}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="date_time">
          Date and Time:
        </label>
        <input
          type="datetime-local"
          id="date_time"
          name="date_time"
          value={game.date_time}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="field">
          Field:
        </label>
        <input
          type="text"
          id="field"
          name="field"
          value={game.field}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="officials_assigned">
          Officials Assigned:
        </label>
        <input
          type="checkbox"
          id="officials_assigned"
          name="officials_assigned"
          checked={game.officials_assigned}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="status">
          Status:
        </label>
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
        <Button 
          type="submit"
          name="Create Game"
          className="primary"
        />
      </form>
    </section>
  );

};

export default GameForm;