import React from 'react';
import { snacks } from '../data/items';

const SnacksPage = () => (
  <ItemList items={snacks} itemType="Snacks" />
);

export default SnacksPage;
