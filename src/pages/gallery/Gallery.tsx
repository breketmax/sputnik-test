import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/ActionCreator';

const Gallery: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchCollections(12));
  }, []);
  return <div className="gallery-page">gallery-page</div>;
};

export default Gallery;
