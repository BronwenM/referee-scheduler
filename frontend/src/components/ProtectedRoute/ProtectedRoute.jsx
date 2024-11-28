import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children, permittedRoles}) => {
  const {user} = useAuth();

  if(!user.name) {
    
  }

  if(permittedRoles.includes(user.role)){
    return children ? children : <Outlet />;
  }

  return <Navigate to="/" />
}

export default ProtectedRoute