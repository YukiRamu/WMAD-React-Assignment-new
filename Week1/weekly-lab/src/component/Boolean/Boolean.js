import React, { Component } from "react";
import "./boolean.css";

//class component
class Boolean extends Component {
  state = {
    isLeft: true,
    text: "______"
  };

  render() {
    return (
      <>
        <h2>This is the <span> {this.state.text} </span>Text</h2>
        <button type="button" className="left" onClick={(event) => { this.changeText(event); }}>Show Left</button>
        <button type="button" className="right" onClick={(event) => { this.changeText(event); }} >Show Right</button>
      </>
    );
  };

  changeText = (event) => {
    if (event.target.className === "left") {
      this.setState({ isLeft: true, text: "Left" });
    } else {
      this.setState({ isLeft: false, text: "Right" });
    };
  };
};

export default Boolean;
