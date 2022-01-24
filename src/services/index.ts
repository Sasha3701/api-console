import {cloneDeep} from 'lodash';
import {v4} from 'uuid';
import {MAX_HISTORY} from '../const';
import {IHistory} from '../models';
import {IConsoleState} from '../store/types';
import {formatJson, jsonFromStr} from '../utils';

export const addHistory = (state: IConsoleState, status: boolean): IHistory[] => {
  const newHistory = cloneDeep(state.history).find((item) => formatJson(item.request) === formatJson(state.value));
  if ((state.history.length <= MAX_HISTORY && !newHistory) || state.history.length === 0) {
    const requestObj = jsonFromStr(state.value) as Record<string, any>;
    const currentNewHistory: IHistory = {
      id: v4(),
      status,
      title: requestObj.action,
      request: formatJson(state.value),
    };
    return [currentNewHistory, ...cloneDeep(state.history)];
  }
  return [newHistory!, ...cloneDeep(state.history).filter((item) => item.id !== newHistory!.id)];
};
