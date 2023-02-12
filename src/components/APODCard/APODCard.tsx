import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import './APODCard.css';

const APODCard: React.FC = () => {
  const {
    hdurl,
    date,
    title,
    explanation,
    isAPODFullfield,
    isAPODError,
    isAPODLoading,
  } = useAppSelector((state) => state.rootReducer.APODReducer);
  return (
    <div className="apod-card">
      {isAPODError !== '' && <Error>{isAPODError}</Error>}
      {isAPODLoading && <Loading />}
      {isAPODFullfield && (
        <>
          <div className="apod-picture-wrapper">
            <img src={hdurl} alt="Picture of day" />
          </div>
          <div className="apod-info">
            <span className="apod-date">{date}</span>
            <h1>{title}</h1>
            <p>{explanation}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default APODCard;
