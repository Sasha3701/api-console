import {IUser} from '../../models';
import {userTypes} from '../actionTypes';

export interface IUserState {
  loading: boolean;
  user: IUser;
  error: string | null;
}

export interface UserSuccessPayload {
  user: IUser;
}

export interface UserFailurePayload {
  error: string;
}

export interface UserRequest {
  type: typeof userTypes.USER_AUTH_REQUEST;
}

export type UserSuccess = {
  type: typeof userTypes.USER_AUTH_SUCCESS;
  payload: UserSuccessPayload;
};

export type UserFailure = {
  type: typeof userTypes.USER_AUTH_FAILURE;
  payload: UserFailurePayload;
};

export type UserActions = UserRequest | UserSuccess | UserFailure;
