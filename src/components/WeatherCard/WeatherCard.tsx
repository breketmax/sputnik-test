import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import './WeatherCard.css';
import { ReactComponent as Geo } from './geo.svg';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const WeatherCard: React.FC = () => {
  const {
    name,
    main,
    weather,
    wind,
    time,
    isWeatherLoading,
    isWeatherError,
    isWeatherFullfield,
  } = useAppSelector((state) => state.rootReducer.weatherReducer);
  return (
    <div className="weather-card">
      {isWeatherError !== '' && <Error>{isWeatherError}</Error>}
      {isWeatherLoading && <Loading />}
      {isWeatherFullfield && (
        <div className="weather-block">
          <span className="city-name">
            <Geo />
            {name}
          </span>
          <div className="weather-row">
            <div className="temperature">
              {Math.trunc(main.temp)}°
              <span>
                {Math.trunc(main.temp_min)}° / {Math.trunc(main.temp_max)}°
              </span>
            </div>
            <div className="main">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                alt="weather-icon"
              />
              <span>{weather[0].main}</span>
            </div>
            <div className="additional-info">
              <p className="info-item">
                Feels like {Math.trunc(main.feels_like)}°
              </p>
              <p className="info-item">Wind {wind.speed}</p>
              <p className="info-item">Pressure {main.pressure}</p>
            </div>
          </div>
        </div>
      )}
      <div className="time-block">
        <p className="time">
          {time.hours < 10 ? `0${time.hours}` : time.hours}:
          {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
        </p>
        <p className="date">
          {time.day} &nbsp; {time.month} {time.number}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
