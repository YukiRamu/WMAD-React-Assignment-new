import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./component/Form/Form.jsx";
import User from "./component/User/User.jsx";

const App = () => {
  //state hook
  const [userList, setUserList] = useState([]);

  //This will be changed to "fetch User List" later
  //When the window is loaded
  useEffect(() => {
    setUserList([
      {
        name: "Emma Green",
        email: "emmagreen@gmail.com",
        phrase: "No code no life"
      },
      {
        name: "Josh Holland",
        email: "joshholland@gmail.com",
        phrase: "Where there is a will there is a way"
      },
      {
        name: "Owen Shaw",
        email: "owenshaw@gmail.com",
        phrase: "Ride or Die"
      }
    ]);
    return () => {
      //write clear function here
    };
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>React Form</h1>
      </header>
      <section className="formPanel">
        <Form />
      </section>
      <section className="userPanel">
        <User userList={userList} />
      </section>
    </>
  );
};

export default App;
