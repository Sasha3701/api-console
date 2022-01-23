import {consoleTypes} from '../actionTypes';
import {ConsoleSize} from '../types';

export const consoleChangeSize = (payload: number): ConsoleSize => {
  return {
    type: consoleTypes.CONSOLE_SIZE,
    payload,
  };
};
