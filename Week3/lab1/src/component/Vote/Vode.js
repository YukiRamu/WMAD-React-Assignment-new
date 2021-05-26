import React, { useState } from "react";
import "./Vote.css";

const Vote = () => {
  //state hook
  const [PHPVote, setPHPVote] = useState(0);
  const [pythonVote, setPythonVote] = useState(0);
  const [goVote, setGoVote] = useState(0);
  const [JavaVote, setJavaVote] = useState(0);

  //when the button is clicked, count up the vote
  return (
    <>
      <div className="vote">
        <div className="panel">
          <p className="count">{PHPVote}</p>
          <p>PHP</p>
          <button type="button" className="php" onClick={() => { setPHPVote(PHPVote + 1); }}>Vote me!</button>
        </div>

        <div className="panel">
          <p className="count">{pythonVote}</p>
          <p>Pyhon</p>
          <button type="button" className="php" onClick={() => { setPythonVote(pythonVote + 1); }}>Vote me!</button>
        </div>

        <div className="panel">
          <p className="count">{goVote}</p>
          <p>Go</p>
          <button type="button" className="php" onClick={() => { setGoVote(goVote + 1); }}>Vote me!</button>
        </div>

        <div className="panel">
          <p className="count">{JavaVote}</p>
          <p>Java</p>
          <button type="button" className="php" onClick={() => { setJavaVote(JavaVote + 1); }}>Vote me!</button>
        </div>
      </div>
    </>
  );

};

export default Vote;