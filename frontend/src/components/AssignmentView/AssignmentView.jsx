import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import Cookies from 'js-cookie';
import AssignmentListItem from "../AssignmentListItem/AssignmentListItem";

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments, sortAssignmentsByGameDate, sortAssignmentsByStatus } = useUserData(Cookies.get('new_user_id')); //change to 10 to hardcode a view of assignments

  useEffect(() => {
    getAssignmentsByUser();
  }, [])

  return (
    <div>
      <button type="button" onClick={sortAssignmentsByGameDate}>Sort By Closest Upcoming Game</button>
      <button type="button" onClick={() => sortAssignmentsByGameDate(false)}>Sort By Furthest Upcoming Game</button>
      <button type="button" onClick={sortAssignmentsByStatus}>Pending Assignments</button>
      <div>
        {userAssignments.length === 0 && <h2>No assignments here!</h2> }
        {userAssignments.map((game) => 
            <AssignmentListItem key={game.assignment.id} assigner={game.assigner} assignment={game.assignment} game={game.game} partners={game.partners} pay={game.pay_rate} />
          )}
      </div>
    </div>
  );
};

export default AssignmentView;
