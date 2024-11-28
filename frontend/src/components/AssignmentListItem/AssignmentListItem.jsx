import React from "react";
import './assignmentListItem.scss';

const AssignmentListItem = () => {
  return (
    <div className="assignment-preview">
      <div className="assignment-preview__datetime">
        <div className="assignment-preview__date">
          <span>Month</span>
          <span>00</span>
        </div>
        <span className="assignment-preview__time">@ 6:30 PM</span>
      </div>
      <div className="assignment-preview__details">
        <div className="assignment-preview__field">
          <span>Field</span>
          <span>Field #2</span>
        </div>
        <div className="assignment-preview__position">
          <span>Position</span>
          <span>Plate</span>
        </div>
        <div className="assignment-preview__position">
          <span>Position</span>
          <span>Plate</span>
        </div>
        <div className="assignment-preview__level">
          <span>Level</span>
          <span>U17A</span>
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
