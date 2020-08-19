import _ from 'lodash';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../lib/api';
import { favoritesState } from '../selectors';

export default [
  createFavoriteWatcher,
];

function * createFavoriteWatcher() {
  yield takeLatest(actions.CREATE_FAVORITE, createFavoriteHandler);
}

function * createFavoriteHandler({ payload }) {
  try {
    const { favorite } = yield call(api.createFavorite, payload);
    const existingFavorites = yield select(favoritesState);
    const favoritesClone = _.cloneDeep(existingFavorites);
    yield put({ type: actions.SET_FAVORITES, payload: [favorite, ...favoritesClone] });
  } catch(e) {
    console.log('createFavorite error:', e.message);
  }
}
