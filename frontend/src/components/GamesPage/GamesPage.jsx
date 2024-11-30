import React from 'react';
import useGameData from '../../hooks/useGameData';

const GamesPage = () => {
  const { games, error } = useGameData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Games List</h1>
      {games.length === 0 ? (
        <p>No games available</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h2>{game.title}</h2>
              <p>Home Team: {game.home_team}</p>
              <p>Away Team: {game.away_team}</p>
              <p>Date and Time: {new Date(game.date_time).toLocaleString()}</p>
              <p>Location: {game.location}</p>
              <p>Field: {game.field}</p>
              <p>Officials Assigned: {game.officials_assigned ? 'Yes' : 'No'}</p>
              <p>Status: {game.status}</p>
              <p>Game Type: {game.game_type}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GamesPage;