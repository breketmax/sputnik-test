import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCoords, fetchWeather } from '../../store/reducers/ActionCreator';
import { setCityName } from '../../store/reducers/CitySlice';

const Weather: React.FC = () => {
  const { name, lat, lon, isFullfield, } = useAppSelector(
    (state) => state.rootReducer.cityReducer
  );
  const { main, isWeatherFullfield, } = useAppSelector(
    (state) => state.rootReducer.weatherReducer
  );
  const dispatch = useAppDispatch();
  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCityName(e.target.value));
  };
  const fetchCoordinates = (): void => {
    void dispatch(fetchCoords(name));
  };
  useEffect((): void => {
    if (isFullfield) {
      void dispatch(fetchWeather({ lat, lon, }));
    }
  }, [ isFullfield, ]);

  return (
    <div className="weather-page">
      weather-page
      <Input
        placeholder="Enter the city name"
        onChange={cityHandler}
        value={name}
      />
      <Button name="submit" onClick={fetchCoordinates} />
      {isWeatherFullfield && <h1>{main.temp}</h1>}
    </div>
  );
};

export default Weather;
