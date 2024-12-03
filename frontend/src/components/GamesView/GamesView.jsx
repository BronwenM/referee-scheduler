import React from 'react';
import useGameData from '../../hooks/useGameData';
import GameListItem from '../GameListItem/GameListItem';

const GamesPage = () => {
  const { games, error } = useGameData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Games List</h1>
      {/* {games.length > 0 && <GameListItem game={games[0]} />} */}
      {games.length === 0 ? (
        <p>No games available</p>
      ) : 
          games.map((game) => (
            <GameListItem game={game} key={game.id} />
          ))
      }
    </div>
  );
};

export default GamesPage;