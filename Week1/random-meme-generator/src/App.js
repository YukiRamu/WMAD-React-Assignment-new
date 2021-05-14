import React, { Component } from "react";
import './App.css';

//import child component
import Meme from "./component/Form/Meme";


class App extends Component {
  state = {
    // property: "background",
    // style: "red"
    style: { "background": "red" }
  };
  render() {
    return (
      <>
        <header className="App-header">
          <h1>Generate Your Meme!</h1>
        </header>
        <main className="Meme" style={this.state.style}>
          {/* pass function to child */}
          <Meme name={this.updateStyle} />
        </main>
        <button type="button" onClick={() => { this.updateStyle(); }}>button</button>
        <footer className="footer">
          ©Yuki Matsubara 2021. All Rights Reserved.
          <a href="https://www.linkedin.com/in/yukimatsubara/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/YukiRamu" target="_blank"><i className="fab fa-github-square"></i></a>
        </footer>
      </>
    );
  };

  //update style inside Meme.js
  //must be arrow function because of "this" keyword
  updateStyle = (arg) => {
    console.log(`${arg}  Hi Hi`);
    this.setState({ style: { "display": "flex" } });
  };
  // updateStyle = (property, value) => {
  //   console.log(`${arg}  Hi Hi`);
  //   this.setState({ style: { `${property}: ${value}`} });
  // };
};

export default App;
