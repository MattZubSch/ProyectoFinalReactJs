import cart from "./assets/cart.png"
import "./CardWidget.css"

const CardWidget = () => {
    return (
        <div>
            
            <div className="widget">
                <img className="cart" src={cart} alt="Cart"/>
            </div>
            <div>
                <sup>0</sup>
            </div>
        </div>
        
    )   
}

export default CardWidget