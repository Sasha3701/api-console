import {IError, IHistory, IUser, nullableTypes} from '../../models';
import {consoleTypes, userTypes} from '../actionTypes';

// User
export interface IUserState {
  loading: boolean;
  login: nullableTypes<string>;
  sublogin: nullableTypes<string>;
  sessionKey: nullableTypes<string>;
  error: IError | null;
}

export interface IAuthData {
  login: string;
  sublogin: string;
  session: string;
}

export interface IErrorData {
  error: IError;
}

export interface UserRequest {
  type: typeof userTypes.USER_AUTH_REQUEST;
  payload: IUser;
}

export type UserSuccess = {
  type: typeof userTypes.USER_AUTH_SUCCESS;
  payload: IAuthData;
};

export type UserFailure = {
  type: typeof userTypes.USER_AUTH_FAILURE;
  payload: IErrorData;
};

export type UserCheck = {
  type: typeof userTypes.USER_CHECK;
};

export type UserLogout = {
  type: typeof userTypes.USER_LOGOUT;
};

export type UserActions = UserRequest | UserSuccess | UserFailure | UserCheck | UserLogout;

// Console

export interface IConsoleState {
  value: string;
  valueResponse: string;
  widthIn: nullableTypes<number>;
  loadingConsole: boolean;
  errorResponse: boolean;
  history: IHistory[]
}

export interface ConsoleSize {
  type: typeof consoleTypes.CONSOLE_SIZE;
  payload: number;
}

export interface ConsoleChange {
  type: typeof consoleTypes.CONSOLE_CHANGE;
  payload: string;
}

export interface ConsoleFormat {
  type: typeof consoleTypes.CONSOLE_FORMAT;
  payload: string;
}

export interface ConsoleRequest {
  type: typeof consoleTypes.CONSOLE_REQUEST;
  payload: string;
}

export type ConsoleSuccess = {
  type: typeof consoleTypes.CONSOLE_SUCCESS;
  payload: string;
};

export type ConsoleFailure = {
  type: typeof consoleTypes.CONSOLE_FAILURE;
  payload: string;
};

export type ConsoleHistoryClear = {
  type: typeof consoleTypes.CONSOLE_HISTORY_CLEAR;
};

export type ConsoleActions = ConsoleSize | ConsoleChange | ConsoleRequest | ConsoleSuccess | ConsoleFailure | ConsoleFormat | ConsoleHistoryClear;
