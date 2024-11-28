import React from "react";
import "./assignmentListItem.scss";
import { useModal } from "../../hooks/useModal";

const AssignmentListItem = (props) => {
  const {gameDate, gameTime, level, gameName, field, position, confirmation} = props;
  const {toggleModal, loadModalData} = useModal()

  return (
    <div className="assignment-preview">
      <div className="assignment-preview__content" onClick={() => {toggleModal(); loadModalData(props)}}>
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
