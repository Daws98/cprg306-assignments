import React from 'react';
const Item = ({ name, quantity, category }) => {
    return (
        <li className="border border-gray-300 p-4 m-4 bg-gray-200 text-black flex flex-col">
            <h3 className="text-lg font-bold capitalize">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p className="capitalize">Category: {category}</p>
            <input type="checkbox" className="ml-auto mr-2" />
        </li>
    );
};

export default Item;