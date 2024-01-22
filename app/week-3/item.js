const Item = ({ name, quantity, category }) => {
    return (
        <li className="border border-gray-300 p-4 m-4 bg-gray-200 text-black">
            <h3 className="text-lg font-bold capitalize">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p className="capitalize">Category: {category}</p>
        </li>
    );
};

export default Item;