import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ItemDetail = ({ items, itemType }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) return <Redirect to={`/${itemType.toLowerCase()}`} />;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
