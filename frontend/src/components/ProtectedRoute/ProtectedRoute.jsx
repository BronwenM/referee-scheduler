import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {user} = useAuth();
  const {children, permittedRoles} = props;

  if(permittedRoles.includes(user.role)){
    return children ? children : <Outlet />;
  }
  else {
    console.log("User not permitted to view route")
    return <Navigate to="/" />
  }

}

export default ProtectedRoute