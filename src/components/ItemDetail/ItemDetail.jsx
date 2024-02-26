import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={`/img/${img}`} alt="" width="300" height="300" />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  );
};
