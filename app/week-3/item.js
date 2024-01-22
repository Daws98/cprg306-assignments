import React from 'react';

const Item = ({ item }) => {
    return (
        <li style={{ border: '1px solid lightgrey', padding: '10px', margin: '10px', listStyleType: 'none', backgroundColor: 'lightgrey', color: 'black' }}>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
        </li>
    );
};

export default Item;