import React from "react";
import "./gameListItem.scss";
import useUtils from "../../hooks/useUtils";
import { useModal } from "../../hooks/useModal";

const GameListItem = (props) => {
  const { game } = props;
  const { convertDateString, toTitleCase } = useUtils();
  const { toggleModal, loadModalData } = useModal();

  const parsedDate = convertDateString(game.date_time);
  
  const gameDate = new Date(game.date_time);
  const dateWithinAWeek = ((Date.now() - gameDate) / 36e5) <= 168;

  return (
    <div className={`game-preview ${!game.officials_assigned ? dateWithinAWeek ? 'game-preview__no-officials-alert' : '' : ''}`} onClick={() => {loadModalData({...props}, 'game'); toggleModal()}}>
      <div className="game-preview__datetime">
        <div className="game-preview__date">
          <span>{parsedDate.month}</span>
          <span>{parsedDate.day}</span>
          <span>{parsedDate.year}</span>
        </div>
        <span className="game-preview__time">@ {parsedDate.time}</span>
      </div>
      <div className="game-preview__details-wrapper">
        <div className="game-preview__teams">
          {game.home_team} vs {game.away_team}
        </div>
        <div className="game-preview__details">
          <div className="game-preview__level">
            <span>{game.location}</span>
          </div>
          <div className="game-preview__field">
            <span>{game.field}</span>
          </div>
          <div className="game-preview__position">
            <span>{game.officials_assigned ? '' : <><strong>No Officials Assigned</strong></>}</span>
          </div>
        </div>
      </div>
      { game.officials_assigned ? '' : dateWithinAWeek ? <span className="game-preview__alert-icon"><i class="fa-solid fa-exclamation"></i></span> : ''}
    </div>
  );
};

export default GameListItem;
