import React, { createContext, useEffect, useState, useReducer } from 'react';
import UserReducer from '../Reducer/UserReducer';

//create Context
const UserContext = createContext();

//initial state for reducer
const initialState = {
  name: "",
  email: "",
  phone: "",
  city: ""
};

const UserProvider = (props) => {

  const [userData, setUserData] = useState();
  const [users, dispatchUser] = useReducer(UserReducer, initialState);

  //fetch API
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw res.statusText;
        } else {
          const userData = await res.json();
          console.log(userData);
          setUserData(userData);
        }
      } catch (error) {
        console.error(`Failed to fetch user data. Error= ${error}`);
      }
    })();
  }, []);

  return (
    <>
      <UserContext.Provider value={{
        userData,
        setUserData,
        users,
        dispatchUser
      }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export { UserContext as default, UserProvider };
