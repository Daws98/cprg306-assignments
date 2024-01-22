import Item from './item';
import React, { useState } from 'react';
import Item from './item';

function ItemList() {
  const items = [
    { 
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    // ... other items
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={checkedItems[index] || false}
            onChange={() => handleCheckboxChange(index)}
          />
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
