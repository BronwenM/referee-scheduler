import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import Cookies from 'js-cookie';
import AssignmentListItem from "../AssignmentListItem/AssignmentListItem";

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments } = useUserData(10); //change to 10 to hardcode a view of assignments

  const assignments = userAssignments.map((game) => 
    <AssignmentListItem key={game.assignment.id} assigner={game.assigner} assignment={game.assignment} game={game.game} partners={game.partners} pay={game.pay_rate} />
  );

  return (
    <div>
      AssignmentView
      <button type="button" onClick={() => getAssignmentsByUser()}>
        Get User {Cookies.get('new_user_id')} Assignments 
      </button>
      <div>
        {userAssignments.length === 0 ? <p>No assignments here!</p> : assignments}
      </div>
    </div>
  );
};

export default AssignmentView;
