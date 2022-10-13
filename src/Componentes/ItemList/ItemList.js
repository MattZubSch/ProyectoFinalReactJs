import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
   //listar

   //map transforma los productos en componentes

   return (
    <div className="contPrincipal">
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
   )
}

export default ItemList