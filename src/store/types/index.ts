import {IError, IUser, nullableTypes} from '../../models';
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
  value: nullableTypes<number>;
  widthIn: nullableTypes<number>;
}

export interface ConsoleSize {
  type: typeof consoleTypes.CONSOLE_SIZE;
  payload: number;
}

export type ConsoleActions = ConsoleSize;
