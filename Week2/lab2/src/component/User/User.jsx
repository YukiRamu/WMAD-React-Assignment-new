import React from "react";
import "./User.css";
import "../Form/Form";

//props = userList
const User = (props) => {
  console.log(props)
  return (
    <>
      <div className="row">
        {/* map userlist */}
        {props.userList.length !== 0 ?
          props.userList.map((elem, index) =>
            <div className="col-md-4 user row" key={index + "_userPanel"}>
              {/* id = display none */}
              <p className="id" key={index + "_id"}>ID: {elem["id"]}</p>
              <p className="name" key={index + "_name"}>Name: {elem["name"]}</p>
              <p className="email" key={index + "_email"}>Email: {elem["email"]}</p>
              <p className="companyPhrase" key={index + "_phrase"}>Company Phrase: {elem["phrase"]}</p>
              <button type="button" className="delBtn" key={index + "_del"} id={index}
                onClick={event => props.delUserFunc(event)}>Delete User</button>
              <button type="button" className="editBtn" key={index + "_edit"} id={index}
                onClick={event => props.editUserFunc(event)}>Edit Contact</button>
            </div>
          ) :
          ""}
      </div>
    </>
  );
};

export default User;