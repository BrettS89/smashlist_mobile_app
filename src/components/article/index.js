import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_FAVORITE, SHOW_LOGIN_MODAL } from '../../redux/actions';
import ArticleView from './view';
import { getArticle } from '../../lib/api';

const Article = props => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState(null);
  const articleId = useSelector(state => state.articles.articleId);
  const isLoggedIn = useSelector(state => state.user.userData._id);
  const favorites = useSelector(state => state.favorites.favorites);

  useEffect(() => {
    if (!article) fetchArticle();
    if (article && !article.favorited) {
      const isFavorited = favorites.find(a => a.article._id === article._id);
      if (isFavorited) {
        setArticle({
          ...article,
          favorited: true,
        });
      }
    }
  }, [favorites]);

  async function fetchArticle() {
    try {
      const data = await getArticle(articleId);
      setArticle(data.article);
    } catch(e) {
      console.log(e);
    }
  }

  function addToFavorites(override) {
    // console.log('WTF', override.type === undefined);
    console.log('IN', override);
    if (!isLoggedIn && override !== true) {
      dispatch({ type: SHOW_LOGIN_MODAL, payload: true });
      return;
    }
    console.log('IN M8');
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
    : <View><Text>Loading...</Text></View>
};

export default Article;
