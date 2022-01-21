import {all, call, put, takeLatest} from 'redux-saga/effects';
import sendsay from '../../api';
import {IError, IUser} from '../../models';
import {userFailure, userSuccess} from '../actions/userAction';
import {userTypes} from '../actionTypes';
import {UserRequest} from '../types';

const login = (payload: IUser) => sendsay.login(payload);

export function* logoutSaga() {
  try {
    yield sendsay.request({
      action: 'logout',
    });
    document.cookie = '';
  } catch (e) {
    yield put(
      userFailure({
        error: e as IError,
      })
    );
  }
}

function* checkSaga() {
  try {
    yield sendsay.request({
      action: 'pong',
    });
  } catch (e) {
    yield put(
      userFailure({
        error: e as IError,
      })
    );
  }
}

function* loginSaga(action: UserRequest) {
  try {
    yield call(login, action.payload);
    document.cookie = `sendsay_ssesion=${sendsay.session}`;
    yield put(
      userSuccess({
        login: action.payload.login!,
        sublogin: action.payload.sublogin!,
        session: sendsay.session,
      })
    );
  } catch (e) {
    document.cookie = '';
    yield put(
      userFailure({
        error: e as IError,
      })
    );
  }
}

function* userSaga() {
  yield all([
    takeLatest(userTypes.USER_AUTH_REQUEST, loginSaga),
    takeLatest(userTypes.USER_CHECK, checkSaga),
    takeLatest(userTypes.USER_LOGOUT, logoutSaga),
  ]);
}

export default userSaga;
