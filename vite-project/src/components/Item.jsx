import React from 'react';

const Item = ({ item, togglePurchased }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={() => togglePurchased(item.id)}
      />
      <span>{item.name}</span>
    </div>
  );
};

export default Item;
