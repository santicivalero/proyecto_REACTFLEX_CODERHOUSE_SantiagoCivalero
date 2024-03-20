import cartWidget from './CartWidget.module.css'
import cart from '../../assets/cart-shopping-solid.svg'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
        <img className={cartWidget.cartWidget} src={cart} alt="cart-widget"/>
        <span className={cartWidget.totalItems}> {totalItems} </span>
        
    </>
  )
}

export default CartWidget
