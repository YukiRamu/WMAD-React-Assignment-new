import React, { useState, useEffect } from "react";
import './App.css';
import User from "./component/Form/Form";
import Form from "./component/User/User";

const App = () => {
  //state hook
  const [userlist, setUserList] = useState({
    name: "default usre name",
    email: "example@gmail.com",
    phrase: "Your phrase here"
  });

  //This will be changed to fetch User List later
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
      <section className="userPanel">
        <User user={userlist} />
      </section>
      <section className="formPanel">
        <Form />
      </section>
    </>
  );
};

export default App;
