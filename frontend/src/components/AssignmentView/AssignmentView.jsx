import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import Cookies from 'js-cookie';
import AssignmentListItem from "../AssignmentListItem/AssignmentListItem";

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments } = useUserData(Cookies.get('new_user_id')); //change to 10 to hardcode a view of assignments

  let assignments = userAssignments.map((game) => 
    <AssignmentListItem key={game.assignment.id} assigner={game.assigner} assignment={game.assignment} game={game.game} partners={game.partners} pay={game.pay_rate} />
  );

  useEffect(() => {
    getAssignmentsByUser();
  }, [])
  

  return (
    <div>
      <div>
        {userAssignments.length === 0 ? <h2>No assignments here!</h2> : assignments}
      </div>
    </div>
  );
};

export default AssignmentView;
