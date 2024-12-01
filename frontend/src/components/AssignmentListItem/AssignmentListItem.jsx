import React from "react";
import "./assignmentListItem.scss";
import { useModal } from "../../hooks/useModal";
import useUtils from "../../hooks/useUtils";

const AssignmentListItem = (props) => {
  const {assigner, assignment, game, partners, pay} = props;
  const {toggleModal, loadModalData} = useModal()
  const {convertDateString, toTitleCase} = useUtils();

  const parsedDate = convertDateString(game.date_time);

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
          <span>{game.field}</span>
        </div>
        <div className="assignment-preview__position">
          <span>Position</span>
          <span>{toTitleCase(assignment.position)}</span>
        </div>
      </div>
      </div>
      <select name="user-accepts-assignment" className="assignment-preview__confirmation">
        <option value={null} default>Pending</option>
        <option value={true}>Accept</option>
        <option value={false}>Reject</option>
      </select>
      {/* <div className="assignment-preview__confirmation">
        <button type='button'>?</button>
      </div> */}
    </div>
  );
};

export default AssignmentListItem;
