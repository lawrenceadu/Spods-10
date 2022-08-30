import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';

import podcastReducer from './podcastStore';

const persistConfig = {
  key: 'spods',
  storage,
};

const rootReducer = combineReducers({
  podcasts: podcastReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
