import React, { Component } from "react";
//import provider
import AuthContext, { AuthConsumer } from "../Contexts/AuthContext";

// export class User2 extends Component {
//   render() {
//     console.log(this.context);
//     const { username, age, isAuth, logIn, logOut } = this.context;
//     return (
//       <>
//         <ul>
//           <li>User Name : {username}</li>
//           <li>Age : {age}</li>
//           {isAuth ? (
//             <button type="button" onClick={logOut}>Log out</button>
//           ) : <button type="button" onClick={logIn}>Log in</button>}
//         </ul>
//       </>
//     );
//   }
// }

//User2.contextType = AuthContext;

class User extends Component {
  render() {
    return (
      <AuthConsumer>
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
