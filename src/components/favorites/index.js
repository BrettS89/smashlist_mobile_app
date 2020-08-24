import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ARTICLE_ID, SHOW_LOGIN_MODAL } from '../../redux/actions';
import View from './view';

const Favorites = props => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.userData._id);
  const favorites = useSelector(state => state.favorites.favorites);

  function navigateToArticle(id) {
    dispatch({ type: SET_ARTICLE_ID, payload: id });
    props.navigation.navigate('Article2');
  }

  function pressLogin() {
    dispatch({ type: SHOW_LOGIN_MODAL, payload: true });
  }

  return (
    <View
      isLoggedIn={isLoggedIn}
      favorites={favorites}
      navigateToArticle={navigateToArticle}
      pressLogin={pressLogin}
    />
  );
};

export default Favorites;
