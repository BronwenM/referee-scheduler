import React, {createContext, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");

    //Load user from storage
    return storedUser ? JSON.parse(storedUser) : { role: '', permissions: [], name: '', username: '', email: '' };
  });

  const navigate = useNavigate();

  //Add user to the state and navigate to dashboard
  //TODO: make sure user sesssion/state includes name, user name & email
  const login = (newUser) => {
    const { user_role, permissions, name, username, email, id } = newUser.user;
    const userToStore = { role: user_role, permissions, name, username, email };
    Cookies.set('new_user_id', id, {expires: 7, secure:true, sameSite: true})

    setUser(userToStore);
    sessionStorage.setItem("user", JSON.stringify(userToStore));
    navigate("/dashboard");
  };

  //TODO: make sure user sesssion/state includes name, user name & email
  const logout = () => {
    setUser({ role: '', permissions: [], name: '', username: '', email: '' });
    Cookies.remove("new_user_id");
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