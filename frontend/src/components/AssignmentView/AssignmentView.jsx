import React, { useEffect, useState } from "react";
import useAssignmentData from "../../hooks/useAssignmentData";
import useUserData from "../../hooks/useUserData";

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments } = useUserData(10);

  return (
    <div>
      AssignmentView
      <button type="button" onClick={() => getAssignmentsByUser()}>
        Get User 10 Assignments
      </button>
      <div>
          {userAssignments.map((game) => {
            <div>
              {console.log("game", game.game.title)}
              <p>Title: {game.game.title}</p>
            </div>
          })}
      </div>
    </div>
  );
};

export default AssignmentView;
