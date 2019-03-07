import React from "react";
import { Route, Redirect } from "react-router-dom";
// import FriendsList from './FriendsList';

const PrivateRoute = ({ component: FriendsList, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <FriendsList {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
