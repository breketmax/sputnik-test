import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IWeather } from '../../types/IWeather';
import { fetchWeather } from './ActionCreator';

const initialState: IWeather = {
  coord: {
    lat: 0,
    lon: 0,
  },
  weather: [],
  base: '',
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  visibility: 0,
  wind: {
    deg: 0,
    speed: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    country: '',
    id: 0,
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  id: 0,
  name: '',
  cod: 0,
  isWeatherLoading: false,
  isWeatherError: '',
  isWeatherFullfield: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isWeatherError = '';
      state.isWeatherLoading = true;
      state.isWeatherFullfield = false;
    });
    builder.addCase(
      fetchWeather.fulfilled,
      (state, action: PayloadAction<IWeather>) => {
        state.main = { ...action.payload.main, };
        state.base = action.payload.base;
        state.clouds = action.payload.clouds;
        state.cod = action.payload.cod;
        state.dt = action.payload.dt;
        state.id = action.payload.id;
        state.weather = action.payload.weather;
        state.name = action.payload.name;
        state.sys = { ...action.payload.sys, };
        state.timezone = action.payload.timezone;
        state.visibility = action.payload.visibility;
        state.wind = { ...action.payload.wind, };
        state.coord = { ...action.payload.coord, };
        state.isWeatherLoading = false;
        state.isWeatherFullfield = true;
        state.isWeatherError = '';
      }
    );
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state = JSON.parse(JSON.stringify(initialState));
      state.isWeatherLoading = false;
      state.isWeatherFullfield = false;
      state.isWeatherError = action.payload ?? '';
    });
  },
});

export default weatherSlice.reducer;
