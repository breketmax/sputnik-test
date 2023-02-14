import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchAPOD } from './store/reducers/ActionCreator';

const App: React.FC = () => {
  const { isNight, } = useAppSelector(
    (state) => state.rootReducer.weatherReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    //  useEffect for state that doesnt change ever
    void dispatch(fetchAPOD(''));
  }, []);
  return (
    <div className={isNight ? 'App night' : 'App'}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
