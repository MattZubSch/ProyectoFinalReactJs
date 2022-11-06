import { useState ,createContext, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log(cart)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {

      setCart([...cart, productToAdd])
    } else {
      console.log("ya agregado")
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
  
    
    
    
    return (
        <CartContext.Provider value={ {cart, addItem, removeItem, totalQuantity } }>

            {children}
        </CartContext.Provider>
    )
}