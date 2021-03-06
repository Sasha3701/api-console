import {IUser} from '../../models';
import {userTypes} from '../actionTypes';
import {UserFailure, IErrorData, UserRequest, UserSuccess, IAuthData, UserCheck, UserLogout} from '../types';

export const userRequest = (payload: IUser): UserRequest => {
  return {
    type: userTypes.USER_AUTH_REQUEST,
    payload,
  };
};

export const userSuccess = (payload: IAuthData): UserSuccess => {
  return {
    type: userTypes.USER_AUTH_SUCCESS,
    payload,
  };
};

export const userFailure = (payload: IErrorData): UserFailure => {
  return {
    type: userTypes.USER_AUTH_FAILURE,
    payload,
  };
};

export const userCheck = (): UserCheck => {
  return {
    type: userTypes.USER_CHECK,
  };
};

export const userLogout = (): UserLogout => {
  return {
    type: userTypes.USER_LOGOUT,
  };
};
