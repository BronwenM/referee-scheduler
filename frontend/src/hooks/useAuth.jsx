import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //Add user to the state and navigate to dashboard
  //TODO: add mechanism to add user to session storage
  const login = (newUser) => {
    setUser(newUser);
    navigate("/dashboard");
  };

  //TODO: add mechanism to remove user from session storage
  const logout = () => {
    setUser({});
    navigate("/", {replace: true})
  };

  //return true/false based on if user is logged in
  const userLoggedIn = () => {
    return (Object.keys(user).length !== 0 && user.constructor === Object)
  }

  return (
    <AuthContext.Provider value={{user, setUser, login, logout, userLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth}