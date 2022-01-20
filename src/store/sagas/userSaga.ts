import {all, call, put, takeLatest} from 'redux-saga/effects';
import {IUser} from '../../models';
import {userFailure, userSuccess} from '../actions/userAction';
import {userTypes} from '../actionTypes';

const login = () => {};

function* loginSaga() {
  // try {
  //   const response = yield call(login);
  //   yield put(
  //     userSuccess({
  //       user: response.data,
  //     })
  //   );
  // } catch (e) {
  //   yield put( 
  //     userFailure({
  //       error: e.message,
  //     })
  //   );
  // }
}

function* userSaga() {
  yield all([takeLatest(userTypes.USER_AUTH_REQUEST, loginSaga)]);
}

export default userSaga;
