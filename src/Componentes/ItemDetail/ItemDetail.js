import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext.js'
import { Link } from "react-router-dom";

 

const GoToCart = () => {
  return (
    <div>
      <Link className="btn btn-light m-5" to='/cart'>
        <h6>
          Ir al carrito
        </h6>
      </Link>
      <Link className="btn btn-light m-5" to={'/'}> <h6>Volver a la tienda</h6> </Link>
    </div>
  )
}


const ItemDetail = ({ id, name, price, img, stock, description}) => {
  const [goToCart, setGoToCart] = useState (false)
  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id, name, price, quantity
    }

    addItem(productToAdd)
    setGoToCart(true)

    
  }


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
          { stock === 0 ? <p>Sin Stock</p> : 
              !goToCart ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <GoToCart />}
                
          </footer>
          </div>
        </div>
      );
};

export default ItemDetail