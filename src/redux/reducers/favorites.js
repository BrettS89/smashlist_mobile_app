import { SET_FAVORITES, SET_NAVIGAGED_FROM_FAVORITES } from '../actions';

const INITIAL_STATE = {
  favorites: [],
  navigatedFromFavorites: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_FAVORITES:
      return {
        ...state,
        favorites: payload,
      };

    case SET_NAVIGAGED_FROM_FAVORITES:
      return {
        ...state,
        navigatedFromFavorites: payload,
      };

    default:
      return state;
  }
};
