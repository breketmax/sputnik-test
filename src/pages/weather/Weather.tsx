import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchWeather } from '../../store/reducers/ActionCreator';
import { setCityName } from '../../store/reducers/WeatherSlice';

const Weather: React.FC = () => {
  const { isWeatherFullfield, name, isWeatherError, } = useAppSelector(
    (state) => state.rootReducer.weatherReducer
  );
  const dispatch = useAppDispatch();
  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCityName(e.target.value));
  };
  const fetchCoordinates = (): void => {
    void dispatch(fetchWeather(name));
  };

  return (
    <div className="weather-page">
      weather-page
      <Input
        placeholder="Enter the city name"
        onChange={cityHandler}
        value={name}
      />
      <Button name="submit" onClick={fetchCoordinates} />
      {isWeatherFullfield && <WeatherCard />}
      {isWeatherError !== '' && <h1>{isWeatherError}</h1>}
    </div>
  );
};

export default Weather;
