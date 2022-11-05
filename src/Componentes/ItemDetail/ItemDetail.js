import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { useState } from "react";

 
// const InputCount = ({onConfirm, stock, initial = 1}) => {
//   const [count, setCount] = useState(initial)

//   const handleChange = (e) => {
//     if (e.target.value <= stock) {
//       setCount(e.target.value)
//     }
//   } 

//   return (
//     <div>
//       <input type='number' onChange={handleChange} value={count} />
//       <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
//     </div>
//   )
// };

// const ButtonCount = ({onConfirm, stock, initial = 1}) => {
//   const [count, setCount] = useState(initial)
//   const increment = () => {
//     if (count < stock) {
//       setCount(count + 1);
//       setCount(count - 1);
//     }
//   }

//   const decrement = () => {
//     setCount(count - 1)
//   }   

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//       <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
//     </div>
//   )

// };



const ItemDetail = ({ name, price, img, stock, description}) => {

  const CartConfirm = () => {
    
    return (
      <div>
        <h4>Producto agregado al carrito</h4>;
        <button>Seguir Comprando</button>;
        <button>Ir al Carrito</button>
      </div>
    );
  }

  const [cartChange, setCartChange] = useState('confirm')  
  const ItemConfirm = cartChange === 'confirm' ? ItemCount : CartConfirm

  const handleOnClick = () => {
    console.log('Productos Agregados al Carrito')
    setCartChange(cartChange === 'confirm' ? 'button' : 'confirm')
  };

    return (
        <div className="ItemDetail">
            <div className="itemDetailContIzq">
                <h2 className="ItemDetail-Title">{name}</h2>
                <img src={img} alt={name} height={500} width={500} />
            </div>
            <div className="itemDetailContDer">
                <p className="descrip">{description}</p>
                <p className="precio">Precio: ${price}</p> 
          <footer className="counterCart">
              <ItemConfirm stock={stock} onClick={handleOnClick}/>
          </footer>
          </div>
        </div>
      );
    };

export default ItemDetail