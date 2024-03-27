"use client"
import { useState } from "react";

export function NewItem({ onAddItem, categories }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1); 
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const categoryObject = categories.find(cat => cat.value === category);
        const item = { name, quantity, category: categoryObject.label};
        onAddItem(item); // Use onAddItem prop to add the new item
        console.log("new item", item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <main className="flex justify-center w-full">
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
                <input
                    type="text"
                    placeholder="Item name"
                    required
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-indieflower"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="flex justify-between">
                <input
                    type="number"
                    min="1"
                    max="99"
                    required
                    className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-indieflower"
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}
                />
                <select
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-indieflower"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="" disabled>Category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat.value}>{cat.label}</option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="w-full mt-4 py-2 px-4 bg-gray-300 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                Add Item
            </button>
        </form>
        </main>
    );
}

export default NewItem;
