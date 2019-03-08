import {
  GET_FRIENDS,
  GET_FRIENDS_SUCCESS,
  LOGIN_SUCCESS,
  ADDING_FRIEND,
  ADD_FRIEND_SUCCESS
} from "../actions";

const initialState = {
  getFriends: false,
  getFriendsSuccess: false,
  isLoggedIn: false,
  friends: [],
  addingFriend: false,
  addFriendSuccess: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };

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
    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        addFriendSuccess: true,
        friends: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
