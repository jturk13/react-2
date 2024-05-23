import React from 'react';

const HomePage = ({ snacks, drinks }) => (
  <div>
    <h1>Welcome to Snack or Booze!</h1>
    <p>We have {snacks.length} snacks and {drinks.length} drinks available.</p>
  </div>
);

export default HomePage;
