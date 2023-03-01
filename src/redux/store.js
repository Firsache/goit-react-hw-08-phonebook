import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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

import { contactsReducer } from './contacts/contactsSlice';
import { globalReducer } from './global/globalSlice';
import { authReducer } from './auth/authSlice';

const persistedThemeReducer = persistReducer(
  { key: 'theme', storage },
  globalReducer
);
const persistedAuthReducer = persistReducer(
  { key: 'auth', storage, whitelist: ['token'] },
  authReducer
);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  global: persistedThemeReducer,
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
