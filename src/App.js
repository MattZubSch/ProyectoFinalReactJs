import React from "react";
import "./App.css"; 
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a Meldent"}/>
    </div>

  )
}


export default App;