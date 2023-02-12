import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import { useAppSelector } from './hooks/redux';

const App: React.FC = () => {
  const { isNight, } = useAppSelector(
    (state) => state.rootReducer.weatherReducer
  );
  return (
    <div className={isNight ? 'App night' : 'App'}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
