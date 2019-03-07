import React, { Component } from "react";
// import FriendForm from "./components/FriendForm";
// import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        {/* <FriendForm />
        <FriendsList /> */}
      </div>
    );
  }
}

export default App;
