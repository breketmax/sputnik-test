import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setTime } from './store/reducers/WeatherSlice';

const App: React.FC = () => {
  const { isNight, } = useAppSelector(
    (state) => state.rootReducer.weatherReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTime());
    const updateTime = setInterval(() => {
      dispatch(setTime());
    }, 60000);
    return () => {
      clearInterval(updateTime);
    };
  }, []);
  return (
    <div className={isNight ? 'App night' : 'App'}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
