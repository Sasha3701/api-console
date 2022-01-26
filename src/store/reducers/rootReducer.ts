import {combineReducers} from 'redux';
import userReducer from './userReducer';
import consoleReducer from './consoleReducer';
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'loading', 'value', 'valueResponse', 'errorResponse', 'loadingConsole', 'errorRequest'],
};

const rootReducer = combineReducers({
  console: persistReducer(persistConfig, consoleReducer),
  user: persistReducer(persistConfig, userReducer),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
