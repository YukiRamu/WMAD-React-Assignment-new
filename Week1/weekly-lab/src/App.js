import React, { useEffect, useState } from "react";
import './App.css';
import Boolean from "./component/Boolean/Boolean";
import Student from "./component/Student/Student";
import Meme from "./component/Meme/Meme";
import Vote from "./component/Vote/Vote";

const App = () => {
  /* ================== Student.js ================== */
  //state hook : empty array
  /* useState() always returns an array with two values (current state and function to update the current state) */
  const [studentList, setStudent] = useState([]);

  //when the window is loaded. wait 3 sec and update state hook
  //called when the window is loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setStudent([
        "Jonny Depp",
        "John Wick",
        "Paul Walker",
        "Emma Watson",
        "Harry Potter"]);
    }, 3000);
    return () => {
      //write clean up function here
      clearTimeout(timer);
    };
  }, []);
  //load once if it is empty, 中にArrayが入ってたらChangeの度に呼ばれる

  //shuffle
  const shuffle = () => {
    console.log("shuffled!!");
    //get random index
    let newArray = [];
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * studentList.length);
      newArray.push(studentList[randomIndex]);
      studentList.splice(randomIndex, 1);
    } while (studentList.length > 0);
    //set shuffled array into studentList
    setStudent(newArray);
  };

  //return
  return (
    <>
      <header className="Header">
        <h1><a href="../public/index.html">React.js App</a></h1>
        <nav className="nav">
          <a className="nav-link" href="#App">Right/Left</a>
          <a className="nav-link" href="#App">Student List</a>
          <a className="nav-link" href="#Meme">Random Meme Generator</a>
          <a className="nav-link" href="#Vote">Voting</a>
        </nav>
      </header>

      {/* Boolean / Student */}
      <section className="App" id="App">
        {/* Option 2: task 1 : class component*/}
        <div className="Boolean">
          <Boolean />
        </div>
        {/* Option 2: task 2 : function component*/}
        <div className="Student">
          <Student array={studentList} />
          <button type="shuffleButton" className="shuffleButton" onClick={shuffle} >Shuffle Students</button>
        </div>
      </section>

      {/* Meme */}
      <section className="Meme" id="Meme">
        <h2>Generate Your Meme!</h2>
        <Meme />
      </section>

      {/* Vote */}
      <section className="Vote" id="Vote">
        <h2>Vote Your Language!</h2>
        <Vote />
      </section>

      <footer className="footer">
        ©Yuki Matsubara 2021. All Rights Reserved.
        <a href="https://www.linkedin.com/in/yukimatsubara/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/YukiRamu" target="_blank"><i className="fab fa-github-square"></i></a>
      </footer>
    </>
  );
};

export default App;
