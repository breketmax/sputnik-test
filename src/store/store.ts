import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cityReducer from './reducers/CitySlice'
import weatherReducer from './reducers/WeatherSlice'

const rootReducer = combineReducers({
  cityReducer,
  weatherReducer
})

export const store = configureStore({
  reducer: {
    rootReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
