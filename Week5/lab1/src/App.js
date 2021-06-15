import React from "react";
import './App.css';
import { UserProvider } from "./Context/UserContext";
import Users from "./Component/Users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <UserProvider>
        <Users />
      </UserProvider>
    </>
  );
};

export default App;
