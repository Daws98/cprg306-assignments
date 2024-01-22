import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
};

export default Item;
