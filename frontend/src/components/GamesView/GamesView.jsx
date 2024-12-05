import React, {useState} from 'react';
import useGameData from '../../hooks/useGameData';
import GameListItem from '../GameListItem/GameListItem';
import './gamesView.scss';

const GamesPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hasOfficials, setHasOfficials] = useState(null);

  const { games, error } = useGameData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDateFilter = (rangeType) => {
    const date = event.target.value;
    rangeType === 'start' && setStartDate(date);
    rangeType === 'end' && setEndDate(date);
  }

  const filterGames = (gamesArr, start, end, hasAssignments) => {
    return gamesArr.filter(
      game => (
        (startDate? game.date_time >= startDate : true) && 
        (endDate ? game.date_time <= endDate : true) &&
        (hasAssignments ? game.officials_assigned : true)
      )
    )
  }

  return (
    <div className='games-view'>
      <h1>All Games</h1>
      <div className='games-view__filters'>
        <span>Filter Games</span>
        
        <label>Start Date</label>
        <input aria-label="Date from" type="date" onChange={() => handleDateFilter('start')} />
        
        <label>End Date</label>
        <input aria-label="Date to" type="date" onChange={() => handleDateFilter('end')} />

        <span>
          <input aria-label="Game has officials" type="checkbox" onChange={() => setHasOfficials(prev => !prev ? true : !prev)} />
          <span>Game Has Officials?</span>
        </span>

      </div>
      <div className="games-view__games">
        {games.length === 0 ? (
          <p>No games available</p>
        ) : 
            filterGames(games, startDate, endDate, hasOfficials).sort((gameA, gameB) => new Date(gameA.date_time) - new Date(gameB.date_time)).reverse().map((game) => (
              <GameListItem game={game} key={game.id} />
            ))
        }
      </div>
    </div>
  );
};

export default GamesPage;