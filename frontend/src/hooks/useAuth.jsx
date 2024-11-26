import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");

    //Load user from storage
    return storedUser ? JSON.parse(storedUser) : {};
  });

  const navigate = useNavigate();

  //Add user to the state and navigate to dashboard
  //TODO: add mechanism to add user to session storage => Check!
  const login = (newUser) => {
    setUser(newUser);
    sessionStorage.setItem("user", JSON.stringify(newUser));
    navigate("/dashboard");
  };

  //TODO: add mechanism to remove user from session storage => Check!
  const logout = () => {
    setUser({});
    sessionStorage.removeItem("user");
    navigate("/", {replace: true});
  };

  //return true/false based on if user is logged in
  const userLoggedIn = () => {
    return (Object.keys(user).length !== 0 && user.constructor === Object)
  };

  const getRole = () => {
    return user.role
  };

  return (
    <AuthContext.Provider value={{user, setUser, login, logout, userLoggedIn, getRole}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth}