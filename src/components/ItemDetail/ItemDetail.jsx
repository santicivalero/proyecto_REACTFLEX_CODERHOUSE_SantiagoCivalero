import ItemCount from "../ItemCount/ItemCount";
import itemDetail from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";



const ItemDetail = ({ id, name, description, img, price, stock }) => {

  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = ( quantity ) => { 

    const item = {
      id,
      price,
      name,
      img,

    }
     
    addItem(item, quantity)
    setAddedToCart(true);

    if(quantity === 1) {
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        text: `Se ha agregado "${name}"`
      })
    } else {
      Swal.fire({
        icon: "success",
        title: "Productos agregados al carrito",
        text: `Se han agregado ${quantity} "${name}"`
      })
    }
    
   }

  return (
    <div className={`border m-2 ${itemDetail.card}`}>
      <div className="card ">
        <div className="card-body ">
          <h5 className={`card-title ${itemDetail.cardTitle}`}>{name}</h5>
          <img src={`/img/${img}`} alt="" width="300" height="300" />
          <p className={`card-text ${itemDetail.cardText}`}> {description} </p>
          <p className={`${itemDetail.cardPrice}`}>Precio: {price} </p>

          {addedToCart ? (
            <Link to="/cart">
              <div className={`${itemDetail.botonVerCarrito}`}>
              <button className="btn btn-outline-success">Ver carrito</button>
              </div>
            </Link>
          ) : (
            <>
              <ItemCount stock={stock} price={price} onAdd={onAdd} />
            </>
          )}
          <Link to="/">
          <button className="btn btn-outline-success">&lt;&lt;&lt; Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
