import {consoleTypes} from '../actionTypes';
import {ConsoleActions, IConsoleState} from '../types';

const initialState: IConsoleState = {
  value: '',
  valueResponse: '',
  widthIn: null,
  loadingConsole: false,
  errorResponse: false,
};

const consoleReducer = (state = initialState, action: ConsoleActions) => {
  switch (action.type) {
    case consoleTypes.CONSOLE_REQUEST:
      return {
        ...state,
        loadingConsole: true,
      };
    case consoleTypes.CONSOLE_SUCCESS:
      return {
        ...state,
        valueResponse: JSON.stringify(action.payload, null, 2),
        loadingConsole: false,
      };
    case consoleTypes.CONSOLE_FAILURE:
      return {
        ...state,
        loadingConsole: false,
        errorResponse: true,
        valueResponse: JSON.stringify(action.payload.error, null, 2),
      };
    case consoleTypes.CONSOLE_SIZE:
      return {
        ...state,
        widthIn: action.payload,
      };
    case consoleTypes.CONSOLE_CHANGE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default consoleReducer;
