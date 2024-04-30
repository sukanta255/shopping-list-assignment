import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    addItem(itemName);
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please Input some Item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">Add New Item</button>
    </form>
  );
};

export default AddItemForm;

