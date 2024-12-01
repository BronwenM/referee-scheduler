import React from "react";
import "./assignmentListItem.scss";
import { useModal } from "../../hooks/useModal";

const AssignmentListItem = (props) => {
  // const {gameDate, gameTime, level, gameName, field, position, confirmation} = props;
  const {assigner, assignment, game, partners, pay} = props;
  const {toggleModal, loadModalData} = useModal()


  const convertDateString = (dateString) => {
    const date = new Date(dateString);
    const isAM = date.getHours() <= 12;
    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      year: date.getFullYear(),
      day: date.getDate(),
      month: monthsArr[date.getMonth()],
      time: isAM
        ? `${date.getHours()}:${date.getMinutes()} AM`
        : `${date.getHours() - 12}:${date.getMinutes()} PM`,
    };
  };

  const parsedDate = convertDateString(game.date_time);

  const toTitleCase = (str) => {
    let strArr = str.trim().split(' ').map(word => 
       word.toLowerCase().replace(word.charAt(0), word.charAt(0).toUpperCase())
    );

    return strArr.join(' ');
  }

  return (
    <div className="assignment-preview">
      <div className="assignment-preview__content" onClick={() => {loadModalData({...props}); toggleModal()}}>
      <div className="assignment-preview__datetime">
        <div className="assignment-preview__date">
          <span>{parsedDate.month}</span>
          <span>{parsedDate.day}</span>
        </div>
        <span className="assignment-preview__time">@ {parsedDate.time}</span>
      </div>
      <div className="assignment-preview__details">
        <div className="assignment-preview__level">
          {/* <span>Game</span> */}
          {/* <span>{toTitleCase(game.title)}</span> */}
          <span className="assignment-preview__teams">{game.home_team} vs <br/>{game.away_team}</span>
        </div>
        <div className="assignment-preview__field">
          <span>Field</span>
          <span>{game.location}</span>
        </div>
        <div className="assignment-preview__position">
          <span>Position</span>
          <span>{toTitleCase(assignment.position)}</span>
        </div>
      </div>
      </div>
      <select className="assignment-preview__confirmation">
        <option default>Pending</option>
        <option>Accept</option>
        <option>Reject</option>
      </select>
      {/* <div className="assignment-preview__confirmation">
        <button type='button'>?</button>
      </div> */}
    </div>
  );
};

export default AssignmentListItem;
