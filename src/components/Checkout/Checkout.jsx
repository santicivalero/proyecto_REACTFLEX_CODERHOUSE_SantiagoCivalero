import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import checkout from "./Checkout.module.css"
import Swal from "sweetalert2";

export const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      total,
      date: serverTimestamp(), // Método de firebase par guardar la fecha
    };

    // Agregar la orden de compra en la base de datos
    const order = await addDoc(collection(db, "orders"), newOrder);

    // Vaciar formulario
    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });


    // Vaciar el carrito
    clearCart();

    // Setear el orderId
    setOrderId(order.id);

    Swal.fire({
      title: `Su ID de orden de compra es: ${order.id}`,
      text: "¡Gracias!",
      icon: "info"
    });

  };

  if(orderId) {
    return <h3 className={checkout.idCompra}>Su ID de orden de compra es {orderId} </h3>
  }

  return (
    <div className={`container align-content-center ${checkout.checkoutContainer}`}>
    <div className={`row d-flex justify-content-center m-5 card col-md-12 ${checkout.checkout}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input type="text" className="form-control" value={formCheckout.name} onChange={handleName} />
        <label htmlFor="">Teléfono:</label>
        <input type="text" className="form-control" value={formCheckout.phone} onChange={handlePhone} />
        <label htmlFor="">Email:</label>
        <input type="email" className="form-control" value={formCheckout.email} onChange={handleEmail} />
        <input type="submit" className="mt-3 btn btn-success mb-3" value="Terminar la compra" />
      </form>
    </div>
    </div>
  );
};
