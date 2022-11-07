import React from "react"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "./cart.css"


const Cart = () => {
    const { cart, total, removeItem, totalQuantity } = useContext (CartContext)
    
    const handleRemove = (id) => {
        removeItem(id)
    }

    if (cart.length === 0) {
        return( 
           <div>
           <h1 className='mt-5'>El carrito esta vacio</h1>
           <Link className="btn btn-light m-5" to={'/'}> <h6 className='emptyCart'>Volver a la tienda</h6> </Link>
           </div>
        )
       }  

    return (
        <div>
            <h1>Carrito</h1>
            {
                cart.map(prod => (
                    <div className="container-fluid text-center">
                        <div className="row align-items-center row-cart">
                            <div className="col-md-4">
                                <h5>Producto</h5>
                                <h2>{prod.name}</h2>
                            </div>
                            <div className="col-md-2">
                                <h5>Precio</h5>
                                <h4>${prod.price}</h4>
                            </div>
                            <div className="col-md-2">
                                <h5>Cantidad</h5>
                                <h4>{prod.quantity}</h4>
                            </div>
                            <div className="col-md-2">
                                <div>
                                    <h5>Total</h5>
                                    <h2>${prod.quantity * prod.price}</h2>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button onClick={() => handleRemove(prod.id)} className="btn btn-danger m-5">Borrar Item</button>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
             <div className="container-fluid text-center">
                <div className="row align-items-center row-total">
                    <div className="col-md-6">
                        <h3>Total</h3>
                    </div>
                    <div className="col-md-2">
                        <div>
                        <h5>Cantidad de Productos</h5>
                        <h2>{totalQuantity}</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>${total}</h2>
                    </div>
                </div>
            </div>
            <div>
                <Link className="btn btn-primary m-5" to={'/checkout'}> <h6>Finalizar Compra</h6> </Link>
                <Link className="btn btn-light m-5" to={'/'}> <h6>Seguir Comprando</h6> </Link>
            </div>
        </div>
    )
}

export default Cart