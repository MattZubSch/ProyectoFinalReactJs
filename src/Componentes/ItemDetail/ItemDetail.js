import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { useContext } from "react";
import { CartContext } from '../../context/CartContext.js'

 
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



const ItemDetail = ({ id, name, price, img, stock, description}) => {

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id, name, price, quantity
    }

    addItem(productToAdd)
  }


    return (
        <div className="ItemDetail">
            <div className="itemDetailContIzq">
                <h2 className="ItemDetail-Title">{name}</h2>
                <img src={img} alt={name} height={500} width={500} />
                <h5>{id}</h5>
            </div>
            <div className="itemDetailContDer">
                <p className="descrip">{description}</p>
                <p className="precio">Precio: ${price}</p> 
          <footer className="counterCart">
              <ItemCount stock={stock} onAdd={handleOnAdd}/>
          </footer>
          </div>
        </div>
      );
    };

export default ItemDetail