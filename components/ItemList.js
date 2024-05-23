import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items, itemType }) => (
  <div>
    <h2>{itemType} List</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/${itemType.toLowerCase()}/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ItemList;
