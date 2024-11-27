import React, {createContext, useContext, userContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});

  const getUser = () => {
    return user;
  };

  const selectUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export {UserProvider, useUser}