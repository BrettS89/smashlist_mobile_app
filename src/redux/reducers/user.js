import { SET_USER_DATA } from '../actions';

const INITIAL_STATE = {
  userData: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };

    default:
      return state;
  }
};
