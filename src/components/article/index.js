import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_FAVORITE } from '../../redux/actions';
import ArticleView from './view';
import { getArticle } from '../../lib/api';

const Article = props => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState(null);
  const articleId = useSelector(state => state.articles.articleId);

  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    try {
      const data = await getArticle(articleId);
      setArticle(data.article);
    } catch(e) {
      console.log(e);
    }
  }

  function addToFavorites() {
    dispatch({ type: CREATE_FAVORITE, payload: article._id });
    setArticle({
      ...article,
      favorited: true,
    });
  }

  return article
    ? (
      <ArticleView article={article} addToFavorites={addToFavorites} />
    )
    : <View />
};

export default Article;
