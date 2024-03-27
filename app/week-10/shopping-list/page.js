'use client'
import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { getItems, addItem } from './shopping-list-services.js';
import React, { useState, useEffect } from 'react';


export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItem] = useState('');
    
    useEffect(() => {
      const loadItems = async () => {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
      };
      
      loadItems();
    }, [user.uid]);

    const loadItems = async () => {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
    };

    const handleAddItem = async (item) => {
      const newItem = await addItem(user.uid, item);
      setItems([...items, { ...newItem, id: newItem.id }]);
    };
    

    const handleItemSelect = (id) => {
      const selectedIngredient = items.find((ingredient) => ingredient.id === id);
      console.log("selectedIngredient", selectedIngredient);
      const separatedSymbols = selectedIngredient.name.split(",")[0];
      console.log("separatedSymbols", separatedSymbols);
      const cleanedIngredient = separatedSymbols.replace(
        /[\p{Emoji_Presentation}\p{Emoji}\p{Emoji_Modifier_Base}\p{Emoji_Modifier}\p{Emoji_Component}]/gu,
        ""
      );
      console.log("item selected", cleanedIngredient);
      setSelectedItem(cleanedIngredient);
    };

    return (
      <main className="container mx-auto p-4 flex">
          <div className="w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Indie Flower', color: 'lightgray' }}>Shopping List</h1>
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="w-1/2">
              <MealIdeas ingredient={selectedItemName} />
          </div>
      </main>
  );
};