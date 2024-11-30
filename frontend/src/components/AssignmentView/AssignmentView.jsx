import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import Cookies from 'js-cookie';
import AssignmentListItem from "../AssignmentListItem/AssignmentListItem";

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments } = useUserData(10); //change to 10 to hardcode a view of assignments

  const convertDateString = (dateString) => {
    const date = new Date(dateString);
    const isAM = date.getHours() <= 12;
    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      year: date.getFullYear(),
      day: date.getDate(),
      month: monthsArr[date.getMonth()],
      time: isAM
        ? `${date.getHours()}:${date.getMinutes()} AM`
        : `${date.getHours() - 12}:${date.getMinutes()} PM`,
    };
  };

  return (
    <div>
      AssignmentView
      <button type="button" onClick={() => getAssignmentsByUser()}>
        Get User {Cookies.get('new_user_id')} Assignments 
      </button>
      <div>
        {userAssignments.length === 0 && <p>No assignments here!</p>}
        {userAssignments.map((game) => {
          const parsedDate = convertDateString(game.game.date_time);

          const assginmentData = {
            date: {day: parsedDate.day, month: parsedDate.month, year: parsedDate.year},
            time: parsedDate.time,
            level: '',
            gameName: game.game.title,
            field: game.game.field,
            position: game.position
          }
          
          return (
            <AssignmentListItem key={game.id} gameDate={{day: parsedDate.day, month: parsedDate.month, year: parsedDate.year}} gameTime={parsedDate.time} level="U17A" gameName={game.game.title} field={game.game.field} position={game.position}/>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentView;
