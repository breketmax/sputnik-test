import React from 'react';
import { useAppSelector } from '../../hooks/redux';

const WeatherCard: React.FC = () => {
  const { id, } = useAppSelector((state) => state.rootReducer.weatherReducer);
  return <div>{id}</div>;
};

export default WeatherCard;
