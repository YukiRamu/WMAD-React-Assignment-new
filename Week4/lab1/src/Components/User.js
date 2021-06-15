import React, { Component } from "react";
//import consumer
import { AuthConsumer } from "../Contexts/AuthContext";

class User extends Component {
  render() {
    return (
      <AuthConsumer>
        {/* {value => (
          <>
            <div>
              <h1>User List</h1>
            </div>
            {value.contacts.map((contact, index) => (
              <>
                <div>
                  <p>Name: {contact.name}</p>
                </div>
              </>
            ))}
          </>
        )} */}


        {value => {
          const { username, age, isAuth, logIn, logOut } = value;
          return (
            <>
              <ul>
                <li>User Name : {username}</li>
                <li>Age : {age}</li>
                {isAuth ? (
                  <button type="button" onClick={logOut}>Log out</button>
                ) : <button type="button" onClick={logIn}>Log in</button>}
              </ul>
            </>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default User;
