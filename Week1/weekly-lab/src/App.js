import React, { useEffect, useState } from "react";
import './App.css';
import Boolean from "./component/Boolean/Boolean";
import Student from "./component/Student/Student";

const App = () => {
  //state hook : empty array
  /* useState() always returns an array with two values (current state and function to update the current state) */
  const [studentList, setStudent] = useState([]);

  //when the window is loaded. wait 3 sec and update state hook
  window.onload = () => {
    setTimeout(() => {
      setStudent(studentList.push(
        "Jonny Depp",
        "John Wick",
        "Paul Walker",
        "Emma Watson",
        "Harry Potter",
        "Steve Jobs"
      ));
      console.log(studentList);
    }, 3000);
  };


  return (
    <>
      <h1>Weekly Assignment Option 2</h1>
      <div className="App">
        {/* Option 2: task 1 */}
        <div className="Boolean">
          <Boolean />
        </div>
        {/* Option 2: task 2 */}
        <div className="Student">
          <Student setStudent={studentList} />
        </div>
      </div>
    </>
  );
};

export default App;
