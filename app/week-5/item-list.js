'use client'
import { useState } from 'react';
import Item from './item';
import items from './item.json';

function ItemList() {
  const [itemList, setItemList] = useState(items);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemList].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <div>
      <button
        onClick={handleSortByName}
        style={{ backgroundColor: sortBy === "name" ? "grey" : "lightgrey", fontFamily: 'Indie Flower', padding: '5px' }}
      >
        Sort by Name
      </button>
      <button
        onClick={handleSortByCategory}
        style={{ backgroundColor: sortBy === "category" ? "grey" : "lightgrey", fontFamily: 'Indie Flower', padding: '5px' }}
      >
        Sort by Category
      </button>
      <ul style={{ fontFamily: 'Indie Flower' }}>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
