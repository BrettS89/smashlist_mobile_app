import { combineReducers } from 'redux';
import articleReducers from './articles';
import userReducer from './user';
import favoritesReducer from './favorites';

export default combineReducers({
  user: userReducer,
  articles: articleReducers,
  favorites: favoritesReducer
});
