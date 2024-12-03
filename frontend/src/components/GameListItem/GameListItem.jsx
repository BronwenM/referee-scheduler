import React from "react";
import "./gameListItem.scss";
import useUtils from "../../hooks/useUtils";
import { useModal } from "../../hooks/useModal";

const GameListItem = (props) => {
  const { game } = props;
  const { convertDateString, toTitleCase } = useUtils();
  const { toggleModal, loadModalData } = useModal();

  const parsedDate = convertDateString(game.date_time);

  return (
    <div className="game-preview" onClick={() => {loadModalData({...props}, 'game'); toggleModal()}}>
      <div className="game-preview__datetime">
        <div className="game-preview__date">
          <span>{parsedDate.month}</span>
          <span>{parsedDate.day}</span>
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
            <span>{game.officials_assigned ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListItem;
