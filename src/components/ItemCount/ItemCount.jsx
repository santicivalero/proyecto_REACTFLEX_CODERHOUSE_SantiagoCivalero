import { useState } from "react";

const ItemCount = ({ stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="flex-column justify-content-center align-content-center pb-3">
      <div>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-outline-success mt-2" >Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;