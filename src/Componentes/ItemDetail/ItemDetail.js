import Counter from "../ItemCount/ItemCount";
import "./ItemDetail.css"
 
 const ItemDetail = ({ id, name, price, category, img, stock, description}) => {
    const handleOnAdd = () => {
        console.log("Agregado al carrito!");
      };
    return (
        <div className="ItemDetail">
            <div className="itemDetailContIzq">
                <h2 className="ItemDetail-Title">{name}</h2>
                <img src={img} alt={name} height={500} width={500} />
            </div>
            <div className="itemDetailContDer">
                <p className="descrip">{description}</p>
                <p className="precio">Precio: ${price}</p>
                <Counter onAdd={handleOnAdd} stock={stock} />
          </div>
        </div>
      );
    };

export default ItemDetail