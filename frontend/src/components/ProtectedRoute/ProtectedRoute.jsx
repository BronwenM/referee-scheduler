import React, { Children } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, permittedRoles}) => {
  const {user} = useAuth();

  if(!user.name) {
    
  }

  if(permittedRoles.includes(user.role)){
    return children;
  }

  return <Navigate to="/" />
}

export default ProtectedRoute