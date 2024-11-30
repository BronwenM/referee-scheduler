import React, { useState } from "react";
import axios from 'axios';

const useUserData = (userID) => {
  const [userAssignments, setUserAssignments] = useState([]);

  const getAssignmentsByUser = async () => {
    const userAssignments = await axios.get(`/api/users/${userID}/assignments`, { withCredentials: false });
    const assignmentResponses = await Promise.resolve(userAssignments);
    setUserAssignments(assignmentResponses.data)
  }

  return { getAssignmentsByUser, userAssignments }
}

export default useUserData;