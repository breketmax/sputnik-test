import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/WeatherSlice';
import APODReducer from './reducers/APODSlice';
import CollectionReducer from './reducers/CollectionSlice';
import RndPhotoReducer from './reducers/RndPhotoSlice';

const rootReducer = combineReducers({
  weatherReducer,
  APODReducer,
  CollectionReducer,
  RndPhotoReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
