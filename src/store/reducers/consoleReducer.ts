import {formatJson, isJsonString} from '../../utils';
import {consoleTypes} from '../actionTypes';
import {ConsoleActions, IConsoleState} from '../types';
import {addHistory} from '../../services';
import {cloneDeep} from 'lodash';

const initialState: IConsoleState = {
  value: '',
  valueResponse: '',
  widthIn: null,
  errorRequest: false,
  loadingConsole: false,
  errorResponse: false,
  history: [
    {
      id: '1',
      request: '{\n  "action": "sys.settings.get"\n}',
      status: true,
      title: 'sys.settings.get',
    },
    {
      id: '2',
      request: '{\n  "action": "pong"\n}',
      status: true,
      title: 'pong',
    },
  ],
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
        errorResponse: false,
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
        errorRequest: false,
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
        errorRequest: !isJsonString(action.payload),
      };
    case consoleTypes.CONSOLE_HISTORY_CLEAR:
      return {
        ...state,
        history: [],
      };
    case consoleTypes.CONSOLE_ERROR_REQUEST:
      return {
        ...state,
        errorRequest: action.payload,
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
