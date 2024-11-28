import React from "react";
import "./assignmentListItem.scss";

const AssignmentListItem = (props) => {
  const {gameDate, gameTime, level, gameName, field, position, confirmation} = props;

  return (
    <div className="assignment-preview">
      <div className="assignment-preview__datetime">
        <div className="assignment-preview__date">
          <span>{gameDate.month}</span>
          <span>{gameDate.day}</span>
        </div>
        <span className="assignment-preview__time">@ {gameTime}</span>
      </div>
      <div className="assignment-preview__details">
        <div className="assignment-preview__level">
          <span>{level}</span>
          <span>{gameName}</span>
        </div>
        <div className="assignment-preview__field">
          <span>Field</span>
          <span>{field}</span>
        </div>
        <div className="assignment-preview__position">
          <span>Position</span>
          <span>{position}</span>
        </div>
      </div>
      <select className="assignment-preview__confirmation">
        <option default>Pending</option>
        <option>Accept</option>
        <option>Reject</option>
      </select>
    </div>
  );
};

export default AssignmentListItem;
