import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
        </label>
        <label>
            Quantity:
            <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                required
            />
        </label>
        <label>
            Category:
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
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
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
);
