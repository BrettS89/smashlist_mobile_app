import { SET_ARTICLES, SET_ARTICLE_ID } from '../actions';

const INITIAL_STATE = {
  article: null,
  articleId: null,
  articles: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };

    case SET_ARTICLE_ID:
      return {
        ...state,
        articleId: payload,
      };

    default:
      return state;
  }
};
