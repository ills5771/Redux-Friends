import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post("http://localhost:5000/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    // getFriends();
  });
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post("http://localhost:5000/api/friends", friend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
