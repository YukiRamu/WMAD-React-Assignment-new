import React, { useState } from 'react';
import "./student.css";

const Student = (props) => {
  console.log("showing props", props);

  const [style, updateStyle] = useState({ "display": "block" });

  //to prevent infinite loop
  window.onload = () => {
    console.log("hihi");
    setTimeout(() => {
      updateStyle({ "display": "none" });
    }, 3000);
  };

  // let list = props.array();
  // console.log(list)
  // let studentHTML = props.array.map((elem) => {
  //   return `${elem} `;
  // }).join("");

  return (
    <>
      <div className="studentPanel">
        <h2>Student List</h2>
        <p style={style}>Loading ...</p>
        <p className="studentList">Student List Shown Here {props.array}</p>
      </div>
    </>
  );

};

export default Student;


