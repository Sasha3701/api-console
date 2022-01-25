import {formatJson} from '../../utils';
import {consoleTypes} from '../actionTypes';
import {ConsoleActions, IConsoleState} from '../types';
import {addHistory} from '../../services';
import {cloneDeep} from 'lodash';

const initialState: IConsoleState = {
  value: '',
  valueResponse: '',
  widthIn: null,
  loadingConsole: false,
  errorResponse: false,
  history: [],
};

const consoleReducer = (state = initialState, action: ConsoleActions) => {
  switch (action.type) {
    case consoleTypes.CONSOLE_REQUEST:
      return {
        ...state,
        loadingConsole: true,
      };
    case consoleTypes.CONSOLE_SUCCESS:
      const result = addHistory(state, true);
      return {
        ...state,
        valueResponse: action.payload,
        loadingConsole: false,
        history: result,
      };
    case consoleTypes.CONSOLE_FAILURE:
      const newHistory = addHistory(state, false);
      return {
        ...state,
        loadingConsole: false,
        errorResponse: true,
        valueResponse: action.payload,
        history: newHistory,
      };
    case consoleTypes.CONSOLE_FORMAT:
      return {
        ...state,
        value: formatJson(action.payload),
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
    case consoleTypes.CONSOLE_HISTORY_CLEAR:
      return {
        ...state,
        history: [],
      };
    case consoleTypes.CONSOLE_HISTORY_DELETE:
      return {
        ...state,
        history: cloneDeep(state.history).filter((item) => item.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default consoleReducer;
