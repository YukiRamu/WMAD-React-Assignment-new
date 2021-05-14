import React from "react";
import './App.css';

//import child component
import Meme from "./component/Form/Meme";


const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>Generate Your Meme!</h1>
      </header>
      <main className="Meme">
        <Meme />
      </main>
      <footer className="footer">
        ©Yuki Matsubara 2021. All Rights Reserved.
        <a href="https://www.linkedin.com/in/yukimatsubara/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/YukiRamu" target="_blank"><i className="fab fa-github-square"></i></a>
      </footer>
    </>
  );
};

export default App;
