import {userTypes} from '../actionTypes';
import {UserFailure, UserFailurePayload, UserRequest, UserSuccess, UserSuccessPayload} from '../types';

export const userRequest = (): UserRequest => {
  return {
    type: userTypes.USER_AUTH_REQUEST,
  };
};

export const userSuccess = (payload: UserSuccessPayload): UserSuccess => {
  return {
    type: userTypes.USER_AUTH_SUCCESS,
    payload,
  };
};

export const userFailure = (payload: UserFailurePayload): UserFailure => {
  return {
    type: userTypes.USER_AUTH_FAILURE,
    payload,
  };
};
