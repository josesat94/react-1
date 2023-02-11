import React, { useState } from "react";
import './style.css';

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container">
            <button className="btn btn-primary p-2" onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button className="btn btn-primary p-2" onClick={onPlus}>+</button>
            <div className="containerAddToCart">
                <button className="btn btn-primary p-2" onClick={() => onAdd(count)}>Add to cart</button>
            </div>
        </div>
    );
};

export default ItemCount;