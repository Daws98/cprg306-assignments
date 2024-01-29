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
        <form className="flex flex-col items-center justify-center space-y-4" onSubmit={handleSubmit}>
            <label className="flex flex-col items-center">
                <span className="text-lg">Name:</span>
                <input
                    className="border border-gray-300 rounded-md px-2 py-1"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>
            <label className="flex flex-col items-center">
                <span className="text-lg">Quantity:</span>
                <input
                    className="border border-gray-300 rounded-md px-2 py-1"
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}
                    required
                />
            </label>
            <label className="flex flex-col items-center">
                <span className="text-lg">Category:</span>
                <select className="border border-gray-300 rounded-md px-2 py-1" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default NewItem;
