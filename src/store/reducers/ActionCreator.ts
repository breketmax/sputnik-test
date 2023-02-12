import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type IAPOD } from '../../types/IAPOD';
import { type IWeather } from '../../types/IWeather';

export const fetchWeather = createAsyncThunk<
IWeather,
string,
{ rejectValue: string }
>('weather/fetchWeather', async (city, thunkAPI) => {
  try {
    const responce = await axios.get<IWeather>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: '4f50d8116e1dd2db222276849f64810e',
          units: 'metric',
        },
      }
    );
    return responce.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      'Please check the correctness of city name.'
    );
  }
});

export const fetchAPOD = createAsyncThunk<
IAPOD,
string,
{ rejectValue: string }
>('fetchAPOD', async (_, thunkAPI) => {
  try {
    const responce = await axios.get<IAPOD>(
      'https://api.nasa.gov/planetary/apod',
      {
        params: {
          api_key: '0IzgS1x6LjTnPIxLZt1Y7BbyyIyM2oNB5BhjCqeQ',
        },
      }
    );
    return responce.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue('Something wrong with space.');
  }
});
