import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./useAuth";

const UserDataContext = createContext();

const UserDataProvider = (props) => {
  const {children} = props;
  const [userAssignments, setUserAssignments] = useState([]);
  const {user} = useAuth();
  const userID = user.id;

  const getAssignmentsByUser = async () => {
    const userAssignments = await axios.get(`/api/users/${userID}/assignments`, { withCredentials: false });
    const assignmentResponses = await Promise.resolve(userAssignments);

    assignmentResponses.data.sort((gameA, gameB) => {
      return new Date(gameA.game.date_time) - new Date(gameB.game.date_time)
    }).reverse()

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
  const updateAssignments = () => {
    axios.get(`/api/users/${userID}/assignments`, { withCredentials: false })
      .then(response => setUserAssignments(response.data));
  }

  const userAcceptAssignment = async (id, setAccept = null) => {
    try {
      const response = await axios.patch(`/api/assignments/${id}`, {accepted: setAccept});

      const newUserAssignments = userAssignments.map(assignment => {
        if(assignment.assignment.id === response.data.assignment.id){

          return {...assignment, assignment: response.data.assignment};
        }

        return assignment;
      });

      setUserAssignments(newUserAssignments)

    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // return { getAssignmentsByUser, userAssignments, sortAssignmentsByGameDate, sortAssignmentsByStatus, userAcceptAssignment };
  return (
    <UserDataContext.Provider value={{ getAssignmentsByUser, userAssignments, sortAssignmentsByGameDate, sortAssignmentsByStatus, userAcceptAssignment }} >
      {children}
    </UserDataContext.Provider>
  )
};

const useUserData = () => {
  return useContext(UserDataContext);
}

export {UserDataProvider, useUserData};
