import React, { useState } from 'react';
import APODCard from '../../components/APODCard/APODCard';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useAppDispatch } from '../../hooks/redux';
import { fetchWeather } from '../../store/reducers/ActionCreator';
import { ReactComponent as Arrow } from './arrow.svg';
import './Weather.css';

const Weather: React.FC = () => {
  const dispatch = useAppDispatch();
  const [ cityInput, setCityInput, ] = useState<string>('');
  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityInput(e.target.value);
  };
  const fetchCoordinates = (): void => {
    void dispatch(fetchWeather(cityInput));
  };

  return (
    <div className="weather-page container">
      <div className="enter-city-block">
        <Input
          placeholder="Enter name of the city"
          onChange={cityHandler}
          value={cityInput}
        />
        <Button onClick={fetchCoordinates}>
          <Arrow />
        </Button>
      </div>
      <WeatherCard />
      <APODCard />
    </div>
  );
};

export default Weather;
