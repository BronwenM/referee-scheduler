import React, { useEffect } from "react";
import "./assignmentListItem.scss";
import { useModal } from "../../hooks/useModal";
import useUtils from "../../hooks/useUtils";
import useUserData from "../../hooks/useUserData";

const AssignmentListItem = (props) => {
  const { assigner, assignment, game, partners, pay } = props;
  const { toggleModal, loadModalData } = useModal();
  const { convertDateString, toTitleCase } = useUtils();
  const {userAcceptAssignment} = useUserData(assignment.official_id);
  const parsedDate = convertDateString(game.date_time);

  return (
    <div className={`assignment-preview accepted-${assignment.accepted}`}>
      <div
        className="assignment-preview__content"
        onClick={() => {
          loadModalData({ ...props }, 'assignment');
          toggleModal();
        }}
      >
        <div className="assignment-preview__datetime">
          <div className="assignment-preview__date">
            <span>{parsedDate.month}</span>
            <span>{parsedDate.day}</span>
          </div>
          <span className="assignment-preview__time">@ {parsedDate.time}</span>
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", width: "100%" }}>
            {game.home_team} vs <br />
            {game.away_team}
          </div>
          <div className="assignment-preview__details">
            <div className="assignment-preview__level">
              {/* <span>Game</span> */}
              {/* <span>{toTitleCase(game.title)}</span> */}
              {/* <span className="assignment-preview__teams">{game.home_team} vs <br/>{game.away_team}</span> */}
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
      </div>
        <div className="assignment-preview__confirmation">
          <button type='button' onClick={() => userAcceptAssignment(assignment.id, null)}>Mark Pending</button>
          <button type='button' onClick={() => userAcceptAssignment(assignment.id, true)}>Accept Assignment</button>
          <button type='button' onClick={() => userAcceptAssignment(assignment.id, false)}>Reject Assignment</button>
        </div>
    </div>
  );
};

export default AssignmentListItem;
