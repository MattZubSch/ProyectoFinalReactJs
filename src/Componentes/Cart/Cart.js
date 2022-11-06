import React from "react"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"



const Cart = () => {
    const { cart } = useContext (CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            {
                cart.map(prod => (
                    <div>{prod.name}</div>
                ))
            }
        </div>
    )
}

export default Cart