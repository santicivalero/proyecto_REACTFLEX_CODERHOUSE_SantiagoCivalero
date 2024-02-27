import ItemCount from "../ItemCount/ItemCount";
import itemDetail from "./ItemDetail.module.css";

const ItemDetail = ({ name, description, img, price, stock }) => {

  return (
    <div className={`border m-2 ${itemDetail.card}`}>
      <div className="card ">
        <div className="card-body ">
          <h5 className={`card-title ${itemDetail.cardTitle}`}>{name}</h5>
          <img src={`/img/${img}`} alt="" width="300" height="300" />
          <p className={`card-text ${itemDetail.cardText}`}> {description} </p>
          <p className={`${itemDetail.cardPrice}`}>Precio: {price} </p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
