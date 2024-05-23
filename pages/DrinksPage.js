import React from 'react';
import { drinks } from '../data/items';

const DrinksPage = () => (
  <ItemList items={drinks} itemType="Drinks" />
);

export default DrinksPage;
