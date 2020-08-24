import { SET_USER_DATA, SHOW_LOGIN_MODAL } from '../actions';

const INITIAL_STATE = {
  userData: {},
  showLoginModal: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };

    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: payload,
      };

    default:
      return state;
  }
};
