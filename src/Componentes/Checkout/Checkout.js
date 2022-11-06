import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../services/firebase/index"

const Checkout = () => {
    const { cart, total } = useContext(CartContext) 
    
    const createOrder = () => {
        const objOrder = {
    
           
           buyer: {
               name: 'Matias',
               phone: '3512400981',
               mail: 'matias@gmail.com'
            },
            items: cart,
            total: total
        } 

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(response => {
            console.log(response.id)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar Orden</button>
        </div>
    )

}

export default Checkout

