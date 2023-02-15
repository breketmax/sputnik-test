import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  fetchCollections,
  fetchRandomPhoto
} from '../../store/reducers/ActionCreator';
import './Gallery.css';
import { ReactComponent as Arrow } from './arrow.svg';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import RndPhotoCard from '../../components/RndPhotoCard/RndPhotoCard';

const Gallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const [ idInput, setIdInput, ] = useState<string>('');
  const {
    collection,
    isCollectionFullfield,
    isCollectionLoading,
    isCollectionrError,
  } = useAppSelector((state) => state.rootReducer.CollectionReducer);
  const idInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIdInput(e.target.value);
  };
  const fetchCollection = (): void => {
    void dispatch(fetchCollections(+idInput));
  };
  useEffect(() => {
    void dispatch(fetchRandomPhoto(null));
  }, []);
  return (
    <div className="gallery-page container">
      <div className="enter-id-block">
        <Input
          placeholder="Enter id of collection"
          onChange={idInputHandler}
          value={idInput}
        />
        <Button onClick={fetchCollection}>
          <Arrow />
        </Button>
      </div>
      {!isCollectionLoading &&
        isCollectionrError === '' &&
        !isCollectionFullfield && <RndPhotoCard />}
      {isCollectionLoading && <Loading />}
      {isCollectionrError !== '' && <Error>{isCollectionrError}</Error>}
      {isCollectionFullfield && (
        <div className="gallery-block">
          <div className="gallery-col">
            {collection[0].map((item) => (
              <CollectionItem key={item.id} {...item} />
            ))}
          </div>
          <div className="gallery-col">
            {collection[1].map((item) => (
              <CollectionItem key={item.id} {...item} />
            ))}
          </div>
          <div className="gallery-col">
            {collection[2].map((item) => (
              <CollectionItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
