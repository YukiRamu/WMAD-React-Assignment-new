import React, { useState, useEffect } from "react";
import "./User.css";

const User = (props) => {
  //state hook
  console.log("props is ", props);
  return (
    <>
      <div>
        <p className="name">name here</p>
        <p className="email">email here</p>
        <p className="companyPhrase">companyPhrase here</p>
        <button type="button" className="delBtn">Delete User</button>
        <button type="button" className="editBtn">Edit Contact</button>
      </div>
    </>
  );

};

export default User;
