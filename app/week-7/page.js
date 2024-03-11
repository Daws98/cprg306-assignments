import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js'; // Import the new MealIdeas component

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(''); // Add the new state variable selectedItemName

    // Create the new event handler function handleItemSelect
    const handleItemSelect = (itemName) => {
        // Clean up the item name by removing size and emoji
        const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
        setSelectedItemName(cleanedItemName); // Update the selectedItemName state
    };

    return (
        <main className="container mx-auto p-4">
            <div className="flex"> {/* Wrap the components in a div with flex property */}
                <div>
                    <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Indie Flower', color: 'lightgray' }}>Shopping List</h1>
                    <NewItem items={items} setItems={setItems} />
                    <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass the event handler as a prop */}
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName} /> {/* Pass the selectedItemName as a prop */}
                </div>
            </div>
        </main>
    );
};
