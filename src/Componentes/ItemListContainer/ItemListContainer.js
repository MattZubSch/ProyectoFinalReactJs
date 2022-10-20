import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../asynMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams() 
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
          .then((response) => {
            setProducts(response);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [categoryId]);
    
    // console.log(products)
    // const productsMapped = products.map(prod => <li>{prod.name}</li>)
    // console.log(productsMapped)
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="contItemList">
            <h1>Listado de Productos</h1>
            {/* {products.map(prod => <li key={prod.id}>{prod.name}</li>)} */}
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer