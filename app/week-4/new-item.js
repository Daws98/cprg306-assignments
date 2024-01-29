'use client'

import { useState } from "react";

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1); 
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category
        };

        console.log(item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main class="flex justify-center w-full">
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
                    <option value="produce" selected>Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full mt-4 py-2 px-4 bg-gray-300 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={handleSubmit}
            >
                Add Item
            </button>
        </form>
        </main>
    );
};

export default NewItem;
