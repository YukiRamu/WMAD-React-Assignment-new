import React, { Component } from "react";

//create context and export consumer
const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  state = {
    username: "",
    age: "",
    isAuth: false
  };

  logIn = () => {
    this.setState({ username: "Yuki Matsubara", age: "29", isAuth: true });
  };

  logOut = () => {
    this.setState({ username: "", age: "", isAuth: false });
  };

  render() {
    const { username, age, isAuth } = this.state;
    const { logIn, logOut } = this;
    return (
      <>
        <AuthContext.Provider value={{
          username,
          age,
          isAuth,
          logIn,
          logOut
        }}>
          {/* children = user.js */}
          {this.props.children}
        </AuthContext.Provider>
      </>
    );
  }
}

export default AuthContext;


