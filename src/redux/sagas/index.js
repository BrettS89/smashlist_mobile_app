import { all, fork } from 'redux-saga/effects';
import appSagas from './app';
import articleSagas from './article';
import favoriteSagas from './favorite';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(articleSagas),
    ...forkList(appSagas),
    ...forkList(favoriteSagas),
  ]);
}
