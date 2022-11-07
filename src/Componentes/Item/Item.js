import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, img, name, price}) => {
    return (
        <div className="contIndividual">
            <img src={img} alt={name} className="imgProd" />
            <h1>{name}</h1>                
            <h3>${price}</h3>
            <Link to={`/detail/${id}`} className="btnDetalle">Ver Detalle</Link>
        </div>
    )


}

export default Item