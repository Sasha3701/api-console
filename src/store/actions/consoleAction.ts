import {consoleTypes} from '../actionTypes';
import {ConsoleChange, ConsoleFailure, ConsoleRequest, ConsoleSize, ConsoleSuccess, IErrorData} from '../types';

export const consoleChangeSize = (payload: number): ConsoleSize => {
  return {
    type: consoleTypes.CONSOLE_SIZE,
    payload,
  };
};

export const consoleChangeValue = (payload: string): ConsoleChange => {
  return {
    type: consoleTypes.CONSOLE_CHANGE,
    payload,
  };
};

export const consoleRequest = (payload: any): ConsoleRequest => {
  return {
    type: consoleTypes.CONSOLE_REQUEST,
    payload,
  };
};

export const consoleSuccess = (payload: any): ConsoleSuccess => {
  return {
    type: consoleTypes.CONSOLE_SUCCESS,
    payload,
  };
};

export const consoleFailure = (payload: IErrorData): ConsoleFailure => {
  return {
    type: consoleTypes.CONSOLE_FAILURE,
    payload,
  };
};
