import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/projects/projectSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, projectReducer);

const store = configureStore({
  reducer: {
    projects: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
