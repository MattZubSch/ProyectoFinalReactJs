import React, { useState } from "react";
import "./ItemCount.css"

const Counter = ({ onAdd, stock }) => {
  const [count, setCount] = useState(0);
  console.log("Cantidad: " + count);
  const [cant, setCant] = useState(stock);
  console.log("(" + cant + ") disponible");

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
      setCant(cant - 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setCant(cant + 1);
    }
  };

  return (
    <div>
      <div>
        <h3>Stock: {cant}</h3>
        <div className="counter">
          <button onClick={decrement} className="btn btn-dark btnCounter">-</button>
          <h3>{count}</h3>
          <button onClick={increment} className="btn btn-dark btnCounter">+</button>
        </div>
      </div>
      <div>
        <button onClick={onAdd} className="btn btn-primary btnCounter">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;