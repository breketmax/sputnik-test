import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import './RndPhotoCard.css';

const RndPhotoCard: React.FC = () => {
  const {
    urls,
    user,
    description,
    alt_description: altDescription,
    isRndPhotoError,
    isRndPhotoLoading,
  } = useAppSelector((state) => state.rootReducer.RndPhotoReducer);
  if (isRndPhotoLoading) {
    return <Loading />;
  }
  if (isRndPhotoError !== '') {
    return <Error>{isRndPhotoError}</Error>;
  }
  return (
    <>
      <h1>Just a random photo...</h1>
      <div className="rndphoto-card">
        <div className="rndphoto-image">
          <img
            alt={
              altDescription !== null
                ? altDescription
                : 'Just a beautiful image'
            }
            src={urls.regular}
          />
        </div>
        <div className="rndphoto-text">
          <h3>
            {description !== null ? description : 'Just a beautiful title'}
          </h3>
          <a href={user.portfolio_url} target="_blank" rel="noreferrer">
            {user.username}
          </a>
        </div>
      </div>
    </>
  );
};

export default RndPhotoCard;
