import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams() 

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId 
          ? query(collection(db, 'products'), where('category', '==', categoryId))
          : collection(db, 'products')

        getDocs(collectionRef).then((response) => {
          console.log(response)
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            console.log(data)

            return { id: doc.id, ...data }
          })
          console.log(productsAdapted)
          setProducts(productsAdapted)
      
            
          })
          .finally(() => {
            setLoading(false);
          });
      }, [categoryId]);
    

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="contItemList">
            <h1>Listado de Productos</h1>
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer
