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
    console.log("user assignments", userAssignments.data);
    setUserAssignments(assignmentResponses.data);
  };

  return { getAssignmentsByUser, userAssignments };
};

export default useUserData;
