import React, { Children } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {user} = useAuth();

  if(!user.name) {
    return <Navigate to="/" />
  }

  return children;
}

export default ProtectedRoute