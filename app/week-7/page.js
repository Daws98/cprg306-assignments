
"use client";

import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';


const Page = () => {
export default function Page() {
        // Clean up item name if necessary
        const cleanedItemName = itemName.replace(/,.*|(\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|\uD83E[\uDD00-\uDDFF]|[\u2700-\u27BF])/g, '').trim();
        setSelectedItemName(cleanedItemName);
    };
    const handleAddItem = newItem => {
        setItems(prevItems => [...prevItems, newItem]);
    };
      // Clean up item name by removing emojis and extra characters
      const cleanedItemName = itemName.replace(/[\p{Emoji_Presentation}\p{Emoji}\p{Emoji_Modifier_Base}\p{Emoji_Modifier}\p{Emoji_Component}]/gu, '').trim();
      setSelectedItemName(cleanedItemName);
  };
    return (
        <main className="container mx-auto p-4 flex">
            <div className="flex-1">
                <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Indie Flower', color: 'lightgray' }}>Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
export default Page;

