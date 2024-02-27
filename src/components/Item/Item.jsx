import { Link } from "react-router-dom";
import item from "./Item.module.css"

const Item = ({ id, name, img, description }) => {
  
  const limitText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  // Llama a limitText para limitar la descripción antes de renderizar el componente
  const limitedDescription = limitText(description, 88); // Puedes ajustar el número máximo de caracteres aquí



  return (
    <div className="mt-4">
      <div className={`card mb-4 ${item.card}`}>
        <div className="card-body">
          <h5 className={`card-title ${item.cardTitle}`}>{name}</h5>
          <img src={`/img/${img}`} alt="" width="200" height="200" />
          <p className={`card-text ${item.cardText}`}> {limitedDescription} </p>
          <Link to={`/item/${id}`} >
            <button className={`btn btn-outline-success ${item.botonDetalles}`}>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;