import { formatJson } from '../../utils';
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
        valueResponse: action.payload,
        loadingConsole: false,
      };
    case consoleTypes.CONSOLE_FAILURE:
      return {
        ...state,
        loadingConsole: false,
        errorResponse: true,
        valueResponse: action.payload,
      };
    case consoleTypes.CONSOLE_FORMAT:
      return {
        ...state,
        value: formatJson(action.payload)
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
