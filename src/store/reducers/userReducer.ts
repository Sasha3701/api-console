import {userTypes} from '../actionTypes';
import {IUserState, UserActions} from '../types';

const initialState: IUserState = {
  loading: false,
  user: {
    login: null,
    sublogin: null,
    password: null,
  },
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
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: null,
      };
    case userTypes.USER_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        user: {
          login: null,
          sublogin: null,
          password: null,
        },
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
