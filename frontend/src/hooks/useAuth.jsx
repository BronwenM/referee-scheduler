import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");

    //Load user from storage
    return storedUser ? JSON.parse(storedUser) : { role: '', permissions: [] };
  });

  const navigate = useNavigate();

  //Add user to the state and navigate to dashboard
  //TODO: add mechanism to add user to session storage => Check!
  const login = (newUser) => {
    const { role, permissions } = newUser;
    const userToStore = { role, permissions };

    setUser(userToStore);
    sessionStorage.setItem("user", JSON.stringify(userToStore));
    navigate("/dashboard");
  };

  //TODO: add mechanism to remove user from session storage => Check!
  const logout = () => {
    setUser({ role: '', permissions: [] });
    sessionStorage.removeItem("user");
    navigate("/", {replace: true});
  };

  //return true/false based on if user is logged in
  const userLoggedIn = () => {
    return user.role !== '';
  };

  const getRole = () => {
    return user.role
  };

  const getPermissions = () => {
    return user.permissions;
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, userLoggedIn, getRole }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth}