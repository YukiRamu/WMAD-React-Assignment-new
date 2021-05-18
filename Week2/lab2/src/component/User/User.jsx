import React, { useState, useEffect } from "react";
import "./User.css";

const User = (props) => {
  //state hook
  console.log("props is ", props.userList);

  console.log(props.userList.length);


  return (
    <>
      <div>
        {/* map userlist */}
        {props.userList.length !== 0 ? props.userList.map((elem, index) =>
          <p className="name" key={index}>{elem["name"]}</p>
        ) : ""}
        {props.userList.length !== 0 ? props.userList.map((elem, index) =>
          <p className="name" key={index}>{elem["email"]}</p>
        ) : ""}
        <button type="button" className="delBtn">Delete User</button>
        <button type="button" className="editBtn">Edit Contact</button>
      </div>
    </>
  );

};

export default User;

// object Object issue
// +
//             <p className="email" key={index}>{elem["email"]}</p> +
//             <p className="companyPhrase" key={index}>{elem["phrase"]}</p>