import React, { useState } from "react";
import axios from "axios";
/* 
structure
[
  {
    "assignment_details": {
      "id",
      "game_id",
      "official_id",
      "assigner_id",
      "position",
      "game_payment_id"
    },
    "partners": [
      {
        "id",
        "name",
        "email",
        "phone",
        "position"
      }
    ],
    "game": {
      "id",
      "user_association_id",
      "title",
      "home_team",
      "away_team",
      "date_time",
      "location",
      "field",
      "officials_assigned",
      "status",
      "game_type"
    },
    "pay_rate": {
      "id",
      "pay_rate"
    },
    "assigner": {
      "id",
      "name",
      "email",
      "phone"
    }
  }
]
*/
const useUserData = (userID) => {
  const [userAssignments, setUserAssignments] = useState([]);

  const getAssignmentsByUser = async () => {
    const userAssignments = await axios.get(`/api/users/${userID}/assignments`, { withCredentials: false });
    const assignmentResponses = await Promise.resolve(userAssignments);

    assignmentResponses.data.sort((gameA, gameB) => {
      return new Date(gameA.game.date_time) - new Date(gameB.game.date_time)
    })

    setUserAssignments(assignmentResponses.data);
    
  };

  const sortAssignmentsByGameDate = (ascending = true) => {
    const sorted = userAssignments.toSorted((gameA, gameB) => {
      return new Date(gameA.game.date_time) - new Date(gameB.game.date_time)
    })

    ascending ? setUserAssignments(sorted) : setUserAssignments(sorted.reverse())
  };

  const sortAssignmentsByStatus = () => {
    const sorted = userAssignments.toSorted((gameA, gameB) => {
      return new Date(gameA.game.date_time) - new Date(gameB.game.date_time)
    })

    const pending = sorted.filter(assignment => assignment.assignment.accepted === null);
    const accepted = sorted.filter(assignment => assignment.assignment.accepted === true);
    const rejected = sorted.filter(assignment => assignment.assignment.accepted === false);

    setUserAssignments([ ...pending, ...accepted, ...rejected ]);
  };

  //TODO: Aggregate function to contain all filter functions
  const filterAssignments = (filterBy) => {

  }

  const userAcceptAssignment = async (id, setAccept = null) => {
    try {
      const response = await axios.patch(`/api/assignments/${id}`, {accepted: setAccept});
      console.log("response data:", response.data.assignment)
      
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { getAssignmentsByUser, userAssignments, sortAssignmentsByGameDate, sortAssignmentsByStatus, userAcceptAssignment};
};

export default useUserData;
