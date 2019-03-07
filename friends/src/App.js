import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import FriendForm from "./components/FriendForm";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/friends-list">Friends List</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends-list" component={FriendsList} />
          {/* <FriendForm />
        <FriendsList /> */}
        </div>
      </Router>
    );
  }
}

export default App;
