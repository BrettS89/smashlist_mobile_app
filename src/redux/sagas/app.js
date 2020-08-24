import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import { articlesState } from '../selectors';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(actions.APP_LOAD, appLoadHandler);
}

function * appLoadHandler({ payload }) {
  try {
    const existingArticles = yield select(articlesState);
    const clone = _.cloneDeep(existingArticles);
    try {
      const { user, token } = yield call(api.isLoggedIn);
      const { favorites } = yield call(api.getFavorites);
      // yield AsyncStorage.setItem('token', token);
      yield put({ type: actions.SET_USER_DATA, payload: user });
      yield put({ type: actions.SET_FAVORITES, payload: favorites });
    } catch(e) {
      console.log('isLoggedIn error: ', e.message);
    }
    const { articles } = yield call(api.getArticles, 0);
    const newArticlesState = [...clone, ...articles];
    yield put({ type: actions.SET_ARTICLES, payload: newArticlesState });
    payload();
  } catch(e) {
    console.log('appLoadHandler error: ', e.message);
  }
}
