import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
      'Please check the correctness of city name'
    );
  }
});
