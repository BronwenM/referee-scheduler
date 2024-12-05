import React, {useState} from 'react';
import useGameData from '../../hooks/useGameData';
import GameListItem from '../GameListItem/GameListItem';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const GamesPage = () => {
  const [filterDate, setFilterDate] = useState(new Date());
  const { games, error } = useGameData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>All Games</h1>
      <div>
        <h5>Filter Games</h5>
        <input aria-label="Date from" min={new Date()} type="date" />
        <input aria-label="Date to" min='2024-12-04' type="date" />
      </div>
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