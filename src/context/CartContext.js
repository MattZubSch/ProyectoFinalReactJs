import { useState ,createContext, useEffect } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal]= useState(0)

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    const Error = Swal.mixin({
      showConfirmButton: false,
      timer: 3000,
  })

    useEffect(()=>{
      const getTotal = () => {
        let accu = 0
    
        cart.forEach(prod => {
            accu += prod.quantity * prod.price  
        })
    
        return accu
    }
      const total = getTotal()
      setTotal(total)
    },[cart])

    useEffect(() => {
      const totalQty = getQuantity()
      setTotalQuantity(totalQty)
  }, [cart])

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {

      setCart([...cart, productToAdd])

      
      
      Toast.fire({
        icon: 'success',
        title: 'Producto Agregado al Carrito!'
      })
    } else {
      Error.fire({
        title: "No se Agrego el Producto",
        text: "El producto ya fue agregado al carrito",
        icon: 'error',
    })
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter(prod => prod.id !== id)
    setCart(cartWithoutProduct)
  }
  
  const getQuantity = () => {
    let accu = 0

    cart.forEach(prod => {
        accu += prod.quantity
    })

    return accu
  }

  const clearCart = () => {
    setCart([]);
  };
  
    
    
    
    return (
        <CartContext.Provider value={ {cart, addItem, removeItem, totalQuantity, clearCart, total } }>

            {children}
        </CartContext.Provider>
    )
}