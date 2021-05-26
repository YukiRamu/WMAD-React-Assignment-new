import React from "react";
import './App.css';
import Vote from "./component/Vote/Vode";

const App = () => {
  //return
  return (
    <>
      <h1>React Hook Practice</h1>

      {/* Vote */}
      <section className="Vote" id="Vote">
        <h2>Vote Your Language!</h2>
        <Vote />
      </section>
    </>
  );
};

export default App;
