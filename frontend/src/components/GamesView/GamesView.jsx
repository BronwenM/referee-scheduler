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
      <Calendar className="react-calendar" />
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