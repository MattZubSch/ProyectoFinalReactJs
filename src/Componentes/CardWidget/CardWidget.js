import cart from "./assets/cart.svg"
import "./CardWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CardWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <div className="widget">
            <div>
                <p className="cart-count">
                    {totalQuantity}
                </p>
            </div>
            <Link to={'/cart'}>
                <div>
                    <img className="cart" src={cart} alt="Cart"/>
                </div>
            </Link>
        </div>
        
    )   
}

export default CardWidget