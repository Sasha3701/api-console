import {all, call, put, takeLatest} from 'redux-saga/effects';
import sendsay from '../../api';
import {formatJson, getCookie, jsonFromStr} from '../../utils';
import {consoleFailure, consoleSuccess} from '../actions/consoleAction';
import {consoleTypes} from '../actionTypes';
import {ConsoleRequest} from '../types';

const requestConsole = (payload: string) => {
  const request = jsonFromStr(payload) as Record<string, any>;

  return sendsay.request({
    session: getCookie('sendsay_ssesion'),
    ...request,
  });
};

function* requestConsoleSaga(action: ConsoleRequest) {
  try {
    const response: Generator = yield call(requestConsole, action.payload);
    const result: string = formatJson(response);
    yield put(consoleSuccess(result));
  } catch (e) {
    const result: string = formatJson(e as Record<string, any>);
    yield put(consoleFailure(result));
  }
}

function* consoleSaga() {
  yield all([takeLatest(consoleTypes.CONSOLE_REQUEST, requestConsoleSaga)]);
}

export default consoleSaga;
