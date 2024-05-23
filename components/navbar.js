import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/snacks">Snacks</Link></li>
      <li><Link to="/drinks">Drinks</Link></li>
      <li><Link to="/add">Add Item</Link></li>
    </ul>
  </nav>
);

export default Navbar;
