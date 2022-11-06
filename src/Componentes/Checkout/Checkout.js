import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase/index"
import { useNavigate } from "react-router-dom"
import './Checkout.css'
import Swal from 'sweetalert2'


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext) 

    const navigate = useNavigate()
    
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ number, setNumber] = useState('')

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: number,
                    mail: email
                },
                items: cart,
                total: total
            } 
            
            const batch = writeBatch(db)

            const outOfStock = [] 

            const ids = cart.map(prod => prod.id)
            
            const productsRef = collection(db, 'products')
            
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if  (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()
                
                const Success = Swal.mixin({
                    showConfirmButton: false,
                    timer: 3000,
                })
                Success.fire({
                    title: "Orden Generada!",
                    text: `El ID de su orden es: ${orderAdded.id}`,
                    icon: 'success',
                })

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                
            } else {
                const Error = Swal.mixin({
                    showConfirmButton: false,
                    timer: 3000,
                })
                Error.fire({
                    title: "Error en la Compra",
                    text: "Uno de los productos no cuenta con Stock",
                    icon: 'error',
                })
            }
        } catch (error) {
            const Error = Swal.mixin({
                showConfirmButton: false,
                timer: 3000,
            })
            Error.fire({
                title: "Error en la Compra",
                text: "La Compra ha fallado. Lo sentimos :(",
                icon: 'error',
            })
        } finally {
            setLoading (false)
        }

        if(loading) { 
            return <h1>Generando orden...</h1>
        }

    }

    return (
        <div>
            <h1>Checkout</h1>
            <div className="row g-3 mt-5">
                <div className="col">
                <label className="form-label label">Nombre y Apellido</label>
                <input type="text" className="form-control inputLabel " placeholder="First name" aria-label="First name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div className="row g-3 mt-5">
                <div className="col">
                <label className="form-label label">Numero Telefonico</label>
                <input type="number" className="form-control inputLabel"  placeholder="Numero Telefonico" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="row g-3 mt-5">
                <div className="col">
                <label className="form-label label">Email</label>
                <input type="email" className="form-control inputLabel" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            </div>
            </div>
            <div>
                <button className="btn btn-primary m-5" onClick={createOrder}>Generar Orden</button>
            </div>
        </div>
    )

}

export default Checkout

