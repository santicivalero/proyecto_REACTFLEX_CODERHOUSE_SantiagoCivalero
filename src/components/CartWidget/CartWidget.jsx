import cartWidget from './CartWidget.module.css'
import cart from '../../assets/cart-shopping-solid.svg'

const CartWidget = () => {
  return (
    <>
        <img className={cartWidget.cartWidget} src={cart} alt="cart-widget"/>
        0
    </>
  )
}

export default CartWidget
