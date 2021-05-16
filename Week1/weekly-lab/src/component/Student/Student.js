import React, { useEffect, useState } from 'react';
import "./student.css";

//function component
const Student = (props) => {
  console.log(props.array);
  //state hook
  /* useState() always returns an array with two values (current state and function to update the current state) */
  const [style, updateStyle] = useState({ "display": "block" });

  useEffect(() => {
    const timer = setTimeout(() => {
      updateStyle({ "display": "none" });
    }, 3000);
    return () => {
      //write clean up function here
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="studentPanel">
        <h2>Student List</h2>
        <p style={style} className="loading">Loading ...!</p>

        {/* in React, each element needs to have "key" attribute to deffrenciate them */}
        {props.array.map((elem, index) => <p className="student" key={index}>{elem}</p>)}

      </div>
    </>
  );

};

export default Student;


