import React from 'react';
import { type ICollection } from '../../types/ICollection';
import './CollectionItem.css';

const CollectionItem: React.FC<ICollection> = ({
  alt_description: altDescription,
  description,
  id,
  urls,
  user,
}) => {
  return (
    <div className="collection-item-card">
      <div className="collection-img-wrapper">
        <img
          alt={
            altDescription !== null ? altDescription : 'Just beautiful image'
          }
          src={urls.regular}
        />
      </div>
      <div className="collection-text">
        <h3>{description !== null ? description : 'Just beautiful title'}</h3>
        <a href={user.portfolio_url} target="_blank" rel="noreferrer">
          {user.username}
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;
