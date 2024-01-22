import React from 'react';

const Item = ({ item }) => {
    return (
        <li>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
        </li>
    );
};

export default Item;
