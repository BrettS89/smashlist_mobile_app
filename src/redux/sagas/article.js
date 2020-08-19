import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../lib/api';

export default [
  getArticlesWatcher,
];

function * getArticlesWatcher() {
  yield takeLatest(actions.GET_ARTICLES, getArticlesHandler);
}

function * getArticlesHandler({ payload }) {
  try {
    // yield put({ type: actions.APP_IS_LOADING });
    yield 'hi';
  } catch(e) {
    // yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('getSubscriptions error: ', e.message);
  }
}
