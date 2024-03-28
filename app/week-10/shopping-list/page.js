'use client';
import React, { useState, useEffect } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { getItems, addItem, deleteItem } from '../_services/shopping-list-service.js';
import { useUserAuth } from '../_utils/auth-context.js';

const Page = () => {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const loadItems = async () => {
        try {
            const userId = user.uid;
            const items = await getItems(userId);
            setItems(items);
        } catch (error) {
            console.error('Error loading items:', error);
        }
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/,.*|(\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|\uD83E[\uDD00-\uDDFF]|[\u2700-\u27BF])/g, '').trim();
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = async (newItem) => {
        try {
            const userId = user.uid;
            const addedItemId = await addItem(userId, newItem);
            setItems(prevItems => [...prevItems, { id: addedItemId, ...newItem }]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const handleDeleteItem = async (itemId) => {
        // Check if user is defined
        if (user) {
            try {
                const userId = user.uid;
                await deleteItem(userId, itemId);
                setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        } else {
            console.error('User is not defined');
        }
    };
    

    return (
        <main className="container mx-auto p-4 flex">
            <div className="flex-1">
                <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Indie Flower', color: 'lightgray' }}>Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem} />
            </div>
            <div className="flex-1">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
};

export default Page;
