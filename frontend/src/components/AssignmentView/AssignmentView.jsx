import React, { useEffect, useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import Cookies from 'js-cookie';
import AssignmentListItem from "../AssignmentListItem/AssignmentListItem";
import './assignmentView.scss';
import Button from '../Button/Button';

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments, sortAssignmentsByGameDate, sortAssignmentsByStatus, userAcceptAssignment } = useUserData();

  useEffect(() => {
    getAssignmentsByUser();
  }, [])

  return (
    <div className="assignment-view">
      <h1 className="assignment-view__header">Assignments</h1>
      <div className="assignment-view__filters">
        <span>Filter</span>
        <Button name="Game Date ↑" handle={sortAssignmentsByGameDate} />
        <Button name="Game Date ↓" handle={() => sortAssignmentsByGameDate(false)} />
        <Button name="Pending Assignments" handle={sortAssignmentsByStatus} />
      </div>
      <div className="assignment-view__assignments">
        {userAssignments.length === 0 && <h2>No assignments here!</h2> }
        {userAssignments.map((game) => 
            <AssignmentListItem key={game.assignment.id} assigner={game.assigner} assignment={game.assignment} game={game.game} partners={game.partners} pay={game.pay_rate} userAcceptAssignment={userAcceptAssignment}/>
          )}
      </div>
    </div>
  );
};

export default AssignmentView;
