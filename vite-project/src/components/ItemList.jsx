import React from 'react';
import Item from './Item';

const ItemList = ({ items, togglePurchased }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} togglePurchased={togglePurchased} />
      ))}
    </div>
  );
};

export default ItemList;
