import {all, fork} from 'redux-saga/effects';
import consoleSaga from './consoleSaga';
import userSaga from './userSaga';

export function* rootSaga() {
  yield all([fork(userSaga), fork(consoleSaga)]);
}
