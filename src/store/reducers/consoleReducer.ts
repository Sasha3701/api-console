import {consoleTypes} from '../actionTypes';
import {ConsoleActions, IConsoleState} from '../types';

const initialState: IConsoleState = {
  value: null,
  widthIn: null,
};

const consoleReducer = (state = initialState, action: ConsoleActions) => {
  switch (action.type) {
    case consoleTypes.CONSOLE_SIZE:
      return {
        ...state,
        widthIn: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default consoleReducer;
