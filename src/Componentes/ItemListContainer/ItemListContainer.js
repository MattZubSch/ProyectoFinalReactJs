import { useState, useEffect } from "react"
import { getProducts } from "../asynMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    
    // console.log(products)
    // const productsMapped = products.map(prod => <li>{prod.name}</li>)
    // console.log(productsMapped)
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Listado de Productos</h1>
            {/* {products.map(prod => <li key={prod.id}>{prod.name}</li>)} */}
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer