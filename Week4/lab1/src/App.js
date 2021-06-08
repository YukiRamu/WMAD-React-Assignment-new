import React, { Component } from "react";
import AuthContext, { AuthProvider } from "./Contexts/AuthContext";
import './App.css';
import  User  from "./Components/User";

class App extends Component {

  render() {
    return (
      <>
        <h1>Context API Practice</h1>
        <AuthProvider>
          <User />
        </AuthProvider>
      </>
    );
  }
}

export default App;
