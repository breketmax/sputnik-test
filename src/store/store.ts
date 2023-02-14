import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/WeatherSlice';
import APODReducer from './reducers/APODSlice';
import CollectionReducer from './reducers/CollectionSlice';

const rootReducer = combineReducers({
  weatherReducer,
  APODReducer,
  CollectionReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
