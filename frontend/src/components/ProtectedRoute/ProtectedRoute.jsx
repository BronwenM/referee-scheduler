import React, { Children } from 'react'
import { useUser } from '../../context/userContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {user} = useUser();

  if(!user.name) {
    return <Navigate to="/" />
  }

  return children;
}

export default ProtectedRoute