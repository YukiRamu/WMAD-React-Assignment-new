import React, { Component } from 'react';
import "./Vote.css";

export class Vote extends Component {
  state = {
    php: 0,
    python: 0,
    go: 0,
    java: 0,
  };

  render() {
    return (
      <>
        <div className="vote">
          <div className="panel">
            <p className="count">{this.state.php}</p>
            <p>PHP</p>
            <button type="button" className="php" onClick={(event) => { this.countUp(event); }}>Vote me!</button>
          </div>
          <div className="panel">
            <p className="count">{this.state.python}</p>
            <p>Python</p>
            <button type="button" className="python" onClick={(event) => { this.countUp(event); }}>Vote me!</button>
          </div>
          <div className="panel">
            <p className="count">{this.state.go}</p>
            <p>Go</p>
            <button type="button" className="go" onClick={(event) => { this.countUp(event); }}>Vote me!</button>
          </div>
          <div className="panel">
            <p className="count">{this.state.java}</p>
            <p>Java</p>
            <button type="button" className="java" onClick={(event) => { this.countUp(event); }}>Vote me!</button>
          </div>
        </div>
      </>
    );
  };

  countUp = (event) => {
    console.log(event.target.className);
    console.log(this.state[event.target.className]);
    this.setState({ [event.target.className]: this.state[event.target.className] + 1 });
  };
};

export default Vote;
