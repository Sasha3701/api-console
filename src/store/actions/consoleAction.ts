import {consoleTypes} from '../actionTypes';
import {
  ConsoleChange,
  ConsoleErrorRequest,
  ConsoleFailure,
  ConsoleFormat,
  ConsoleHistoryClear,
  ConsoleHistoryDelete,
  ConsoleRequest,
  ConsoleSize,
  ConsoleSuccess,
} from '../types';

export const consoleChangeSize = (payload: number): ConsoleSize => {
  return {
    type: consoleTypes.CONSOLE_SIZE,
    payload,
  };
};

export const consoleFormatValue = (payload: string): ConsoleFormat => {
  return {
    type: consoleTypes.CONSOLE_FORMAT,
    payload,
  };
};

export const consoleChangeValue = (payload: string): ConsoleChange => {
  return {
    type: consoleTypes.CONSOLE_CHANGE,
    payload,
  };
};

export const consoleRequest = (payload: string): ConsoleRequest => {
  return {
    type: consoleTypes.CONSOLE_REQUEST,
    payload,
  };
};

export const consoleSuccess = (payload: string): ConsoleSuccess => {
  return {
    type: consoleTypes.CONSOLE_SUCCESS,
    payload,
  };
};

export const consoleFailure = (payload: string): ConsoleFailure => {
  return {
    type: consoleTypes.CONSOLE_FAILURE,
    payload,
  };
};

export const consoleErrorRequest = (payload: boolean): ConsoleErrorRequest => {
  return {
    type: consoleTypes.CONSOLE_ERROR_REQUEST,
    payload,
  };
};

export const consoleHistoryClear = (): ConsoleHistoryClear => {
  return {
    type: consoleTypes.CONSOLE_HISTORY_CLEAR,
  };
};

export const consoleHistoryDelete = (payload: string): ConsoleHistoryDelete => {
  return {
    type: consoleTypes.CONSOLE_HISTORY_DELETE,
    payload,
  };
};
