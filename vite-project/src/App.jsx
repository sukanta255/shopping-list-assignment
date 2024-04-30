import "./App.css";
import React, { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      purchased: false,
    };
    setItems([...items, newItem]);
  };

  const togglePurchased = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} togglePurchased={togglePurchased} />
    </div>
  );
};

export default App;
