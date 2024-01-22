import React from 'react';
import Item from './Item';

const items = [
    { name: 'Item 1', quantity: 5, category: 'Category 1' },
    { name: 'Item 2', quantity: 3, category: 'Category 2' },
    { name: 'Item 3', quantity: 2, category: 'Category 1' },
    { name: 'Item 4', quantity: 1, category: 'Category 2' },
];

function ItemList() {
    return (
        <div>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
}

export default ItemList;
