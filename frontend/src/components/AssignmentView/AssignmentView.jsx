import React, { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import Cookies from 'js-cookie';

const AssignmentView = () => {
  const { getAssignmentsByUser, userAssignments } = useUserData(Cookies.get('new_user_id')); //change to 10 to hardcode a view of assignments

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
        {userAssignments.length === 0 && <p>Nothing here!</p>}
        {userAssignments.map((game) => {
          const parsedDate = convertDateString(game.game.date_time);
          return (
            <ul key={game.id}>
              <li>Title: {game.game.title}</li>
              <li>Home: {game.game.home_team}</li>
              <li>Away: {game.game.away_team}</li>
              <li>Date and Time:</li>
              <ul>
                <li>
                  {parsedDate.day} {parsedDate.month}
                </li>
                <li>{parsedDate.time}</li>
              </ul>
              <li>Location: {game.game.location}</li>
              <li>Field: {game.game.field}</li>
              <li>Status: {game.game.status}</li>
              <li>Position: {game.position}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentView;
