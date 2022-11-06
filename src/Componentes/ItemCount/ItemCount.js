import React, { useState } from "react";
import "./ItemCount.css"
// import { Link } from "react-router-dom";


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

  // const [count, setCount] = useState(0);
  // const [cant, setCant] = useState(stock);

  // const CartConfirm = () => {
    
  //   return (
  //     <div>
  //       <h4>Producto agregado al carrito</h4>
  //       <Link to={'/'} className="btn btn-primary btnConfirm">Seguir Comprando</Link>
  //       <Link to={'/cart'} className="btn btn-primary btnConfirm">Ir al Carrito</Link>
  //     </div>
  //   );
  // }

  
  
  // const increment = () => {
  //     if (count < stock) {
  //         setCount(count + 1);
  //         setCant(cant - 1);
  //       }
  //     };
      
  //   const decrement = () => {
  //       if (count > 0) {
  //           setCount(count - 1);
  //           setCant(cant + 1);
  //         }
  //       };
    
  // const Counter = () => {      
  //   return (
  //       <div>
  //         <div>
  //           <div className="counter">
  //             <h3>Stock: {cant}</h3>
  //             <div>
  //               <button onClick={decrement} className="btn btn-dark btnCounter">-</button>
  //               <h3 className="btnCounter">{count}</h3>
  //               <button onClick={increment} className="btn btn-dark btnCounter">+</button>
  //             </div>
  //           </div>
  //         </div>
  //         <div>
  //           <button onClick={handleOnConfirm} className="btn btn-primary btnConfirm">Agregar al carrito</button>
  //         </div>
  //       </div>
  //     );
  //   };
  // const [cartChange, setCartChange] = useState('confirm')  
  // const ItemConfirm = cartChange === 'confirm' ? Counter : CartConfirm

  // const handleOnConfirm = () => {
  //   console.log('Productos Agregados al Carrito')
  //   setCartChange(cartChange === 'confirm' ? 'button' : 'confirm')
  // };

}
    
export default ItemCount
            