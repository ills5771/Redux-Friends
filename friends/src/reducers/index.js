import { GET_FRIENDS, GET_FRIENDS_SUCCESS } from "../actions";

const initialState = {
  getFriends: false,
  getFriendsSuccess: false,
  // isLoggedIn: false,
  friends: [],
  //   addingFriend,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        getFriends: true
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        getFriendsSuccess: true,
        error: null,
        friends: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
