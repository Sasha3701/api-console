import {combineReducers} from 'redux';
import userReducer from './userReducer';
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'loading'],
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
