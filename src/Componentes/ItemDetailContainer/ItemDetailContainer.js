import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../asynMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
 
    const { productId } = useParams()


    useEffect(() => {
        getProductById(productId)
          .then((response) => {
            setProduct(response);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [productId]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return(
        <div> 
            <ItemDetail key={product.id} {...product} />
        </div>
    )
}

export default ItemDetailContainer;