import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import combineReducers from './global/global-reducer';
import authReducer from './auth/auth-slice';
import transactionReducer from './transaction/transaction-slice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'token',
  storage,
  whiteList: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    global: combineReducers,
    auth: persistedReducer,
    transactions: transactionReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
