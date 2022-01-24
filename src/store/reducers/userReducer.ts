import {userTypes} from '../actionTypes';
import {IUserState, UserActions} from '../types';

const initialState: IUserState = {
  loading: false,
  login: null,
  sublogin: null,
  sessionKey: null,
  error: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.USER_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.USER_AUTH_SUCCESS:
      const {login, sublogin, session} = action.payload;
      return {
        ...state,
        loading: false,
        login: login,
        sublogin: sublogin,
        sessionKey: session,
        error: null,
      };
    case userTypes.USER_AUTH_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        login: null,
        sublogin: null,
        sessionKey: null,
        error: error,
      };
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        loading: false,
        login: null,
        sublogin: null,
        sessionKey: null,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
