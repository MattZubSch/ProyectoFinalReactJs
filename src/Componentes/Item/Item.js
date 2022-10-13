import "./Item.css"

const Item = ({img, name, price}) => {
    return (
        <div className="contIndividual">
            <img src={img} alt={name} className="imgProd" />
            <h1>{name}</h1>                
            <h3>{price}</h3>
        </div>
    )

}

export default Item