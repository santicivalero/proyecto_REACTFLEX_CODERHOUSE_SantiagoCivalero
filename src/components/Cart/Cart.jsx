import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import cartCss from './Cartcss.module.css'
import perroCarrito from "/dog-shopping-cart.webp"

export const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);

  const handleDeleteItem = (item) => { 
    

    Swal.fire({
      icon: "question",
      title: `¿Estás seguro de que deseas eliminar ${item.name} del carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
      
    }).then( resp => {
      if(resp.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          icon: "success",
          title: "Producto eliminado"
        })
      }
    })

   }

   const handleClearCart = (item) => { 
    

    Swal.fire({
      icon: "question",
      title: `¿Estás seguro de que deseas vaciar el carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
      
    }).then( resp => {
      if(resp.isConfirmed) {
        clearCart()
        Swal.fire({
          icon: "success",
          title: "Carrito vaciado"
        })
      }
    })

   }

  return (
    <div className={cartCss.cart}>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className={` p-3 card  ${cartCss.cartItem}`}>
            <p key={item.id}>Nombre: {item.name} </p>
            <p>Cantidad: {item.quantity} </p>
            <p>Precio Unitario: {item.price} </p>
            <p>Subtotal: ${item.subTotal}</p>
            <div>
              <button className="btn btn-danger" onClick={() => handleDeleteItem(item)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {total > 0 ? (
          <>
            <h4>Total ${total} </h4>
            <div className={cartCss.botones}>
            <button className="btn btn-outline-success" onClick={handleClearCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="ms-2 btn btn-success">Comprar</button>
            </Link>
            </div>
          </>
        ) : (
          <>
            <h4 className={cartCss.carritoVacio} >Carrito vacío</h4>
            <img className={cartCss.perroCarrito} src={perroCarrito} alt="" />
          </>
        )}
      </div>
    </div>
  );
};
