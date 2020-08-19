import React from 'react';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import View from './view';
import { SET_ARTICLE_ID } from '../../redux/actions';

const Articles = props => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles);

  function navigateToArticle(articleId) {
    dispatch({ type: SET_ARTICLE_ID, payload: articleId });
    props.navigation.navigate('Article');
  }

  return (
    <View
      articles={articles}
      navigateToArticle={navigateToArticle}
    />
  );
};

export default Articles;
