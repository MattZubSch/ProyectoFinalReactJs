import React, { useState } from "react";
import "./ItemCount.css"



const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () =>{ 
    if (quantity < stock) {
      setQuantity(quantity+1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity-1)
    }
  }

  return (
    <div>
      <div>
        <button onClick={decrement} className="btn btn-dark btnCounter">-</button>
        <h4>{quantity}</h4>
        <button onClick={increment} className="btn btn-dark btnCounter">+</button>
      </div>
      <div>
        <button onClick={() => onAdd(quantity)} className="btn btn-primary btnConfirm">Agregar al Carrito</button>
      </div>
    </div>
  )


}
    
export default ItemCount
            