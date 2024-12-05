import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");

    //Load user from storage
    return storedUser ? JSON.parse(storedUser) : { role: '', permissions: [], name: '', username: '', email: '', id: null };
  });
  const {children} = props;

  const navigate = useNavigate();

  //Add user to the state and navigate to dashboard
  //TODO: make sure user sesssion/state includes name, user name & email
  const login = (newUser) => {
    const { user_role, permissions, name, username, email, id } = newUser.user;
    const userToStore = { role: user_role, permissions, name, username, email, id };

    setUser(userToStore);
    sessionStorage.setItem("user", JSON.stringify(userToStore));
    navigate("/dashboard");
  };

  //TODO: make sure user sesssion/state includes name, user name & email
  const logout = () => {
    setUser({ role: '', permissions: [], name: '', username: '', email: '', id: null });
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