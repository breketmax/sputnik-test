import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type IGeoItem } from '../../types/ICity';
import { type ICoord, type IWeather } from '../../types/IWeather';

export const fetchWeather = createAsyncThunk<
IWeather,
ICoord,
{ rejectValue: string }
>('weather/fetchWeather', async ({ lat, lon, }, thunkAPI) => {
  try {
    const responce = await axios.get<IWeather>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lon,
          lat,
          appid: '4f50d8116e1dd2db222276849f64810e',
        },
      }
    );
    return responce.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue('Something wrong with your country');
  }
});

export const fetchCoords = createAsyncThunk<
IGeoItem,
string,
{ rejectValue: string }
>('weather/fetchCoords', async (city, thunkAPI) => {
  try {
    const responce = await axios.get<IGeoItem[]>(
      'http://api.openweathermap.org/geo/1.0/direct',
      {
        params: {
          limit: 1,
          appid: '4f50d8116e1dd2db222276849f64810e',
          q: city,
        },
      }
    );
    if (responce.data.length === 0) {
      throw new SyntaxError('Please check the correctness of city name');
    }
    return responce.data[0];
  } catch (error) {
    if (error instanceof SyntaxError) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Something goes wrong try again later');
  }
});
