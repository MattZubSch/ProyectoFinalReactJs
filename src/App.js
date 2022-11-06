import React, { createContext } from "react";
import "./App.css"; 
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Componentes/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./Componentes/Checkout/Checkout";

export const MyContext = createContext(0)


function App() {
  

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>  
        </BrowserRouter>  
      </CartProvider>
    </div>
  )
}


export default App;