import React, { useState } from "react";
import axios from 'axios';

const useUserData = (userID) => {
  const [userAssignments, setUserAssignments] = useState([]);


  const getAssignmentsByUser = async () => {
    const userAssignments = await axios.get(`/api/users/${userID}/assignments`, { withCredentials: true });
    const assignmentResponses = await Promise.resolve(userAssignments);
    setUserAssignments(assignmentResponses.data)
    console.log("Assignments for userID", userID, assignmentResponses.data);
    // return userGames;
  }

  return { getAssignmentsByUser, userAssignments }
}

export default useUserData;