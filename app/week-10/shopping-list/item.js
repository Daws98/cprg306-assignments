import React from 'react';

const Item = ({ id, name, quantity, category, onSelect, onDelete }) => {
    const handleDelete = (event) => {
        event.stopPropagation(); // Prevents the click event from bubbling up to the parent element
        onDelete(id);
    };

    return (
        <li
            className="border border-gray-300 p-4 m-4 bg-gray-200 text-black flex flex-col flex-grow cursor-pointer relative" // Added relative positioning
            style={{ justifyContent: 'flex-end' }}
            onClick={() => onSelect(name)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 className="text-lg font-Indie Flower capitalize">{name}</h3>
                    <p>Quantity: {quantity}</p>
                    <p className="capitalize">Category: {category}</p>
                </div>
                <div className="absolute top-0 right-0"> {/* Added absolute positioning */}
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <div>
                    <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
                </div>
            </div>
        </li>
    );
};

export default Item;