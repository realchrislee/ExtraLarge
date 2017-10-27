import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  let currentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = { currentUser: action.currentUser };
      return Object.assign({}, state, currentUser);
    default:
      return state;
  }
};

export default SessionReducer;
