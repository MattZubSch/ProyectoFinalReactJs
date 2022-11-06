import Item from "../Item/Item"

const ItemList = ({products}) => {
   //listar

   //map transforma los productos en componentes

   return (
    <div class="container text-center">
        <div class="row row-cols-3">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    </div>
   )
}

export default ItemList