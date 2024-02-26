import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  
  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={`/img/${img}`} alt="" width="200" height="200" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`} >
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
