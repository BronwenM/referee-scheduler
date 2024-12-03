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
    console.log("Not permitted to view route")
    console.log("Permitted Roles: ", permittedRoles)
    console.log("User role: ", user.role);
    return <Navigate to="/" />
  }

}

export default ProtectedRoute