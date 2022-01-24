import {all, call, put, takeLatest} from 'redux-saga/effects';
import sendsay from '../../api';
import {formatJson, getCookie} from '../../utils';
import {consoleFailure, consoleSuccess} from '../actions/consoleAction';
import {consoleTypes} from '../actionTypes';
import {ConsoleRequest} from '../types';

const requestConsole = (payload: string) =>
  sendsay.request({
    session: getCookie('sendsay_ssesion'),
    ...JSON.parse(payload),
  });

function* requestConsoleSaga(action: ConsoleRequest) {
  try {
    yield call(requestConsole, action.payload);
    document.cookie = `sendsay_ssesion=${sendsay.session}`;
    yield put(consoleSuccess({...sendsay.response}));
  } catch (e) {
    yield put(consoleFailure(formatJson(e as Record<string, string>)));
  }
}

function* consoleSaga() {
  yield all([takeLatest(consoleTypes.CONSOLE_REQUEST, requestConsoleSaga)]);
}

export default consoleSaga;
