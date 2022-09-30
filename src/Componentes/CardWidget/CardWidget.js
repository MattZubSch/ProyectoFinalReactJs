import cart from "./assets/cart.png"
import "./CardWidget.css"

const CardWidget = () => {
    return (
        <div>
            <img className="cart" src={cart} alt="Cart"/>
        </div>
    )   
}

export default CardWidget