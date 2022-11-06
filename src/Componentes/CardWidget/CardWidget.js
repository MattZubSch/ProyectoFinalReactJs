import cart from "./assets/cart.png"
import "./CardWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CardWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to={'/cart'}>
            <div className="widget">
                <img className="cart" src={cart} alt="Cart"/>
            </div>
            <div>
                <sup>
                    {totalQuantity}
                </sup>
            </div>
        </Link>
        
    )   
}

export default CardWidget