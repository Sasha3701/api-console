import {combineReducers} from 'redux';
import userReducer from './userReducer';
import consoleReducer from './consoleReducer';
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'loading', 'value'],
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  console: persistReducer(persistConfig, consoleReducer),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
