import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('snack');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, description, type });
    setName('');
    setDescription('');
    setType('snack');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
