import React from 'react';
import "./student.css";

const Student = (props) => {
  console.log(props);


  // let list = props.array();
  // console.log(list)
  // let studentHTML = props.array.map((elem) => {
  //   return `${elem} `;
  // }).join("");

  return (
    <>
      <div className="studentPanel">
        <h2>Loading student lists....</h2>
        <p>{props.array}</p>
      </div>
    </>
  );

  //hide <h2> after 3 seconds

};

export default Student;

