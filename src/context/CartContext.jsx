import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const CartContext = createContext(null);

// Creamos el provider
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);

  // Función para guardar el carrito en localStorage
  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  // Función para cargar el carrito desde localStorage al cargar el componente
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const addItem = (item, quantity) => {
    // Copia del cart
    const cartCopy = [...cart];
    // Verificamos si el item ya se encuentra en el carrito
    const index = cartCopy.findIndex((product) => product.id === item.id);

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal = cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      // Si da -1 es por que el producto no se encuentra en el carrito

      // Armamos el objeto del item para guardar en el cart
      const newItem = {
        ...item,
        quantity,
        subTotal: item.price * quantity,
      };

      // Hacemos una copia del cart actual y agregamos el nuevo item
      setCart([...cart, newItem]);

      // Después de actualizar el carrito, guardar en localStorage
    saveCartToLocalStorage([...cartCopy, newItem]);
    }

    
  };

  const removeItem = (id) => {
    // Quitar un producto del carrito

    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);

    // Después de actualizar el carrito, guardar en localStorage
    saveCartToLocalStorage(cartFilter);
  };

  const clearCart = () => {
    // Limpiar el carrito
    setCart([]);

    // Después de limpiar el carrito, borrar el localStorage
    localStorage.removeItem("cart");
  };

  const handleTotalItems = () => { 
    const newTotalItems = cart.reduce( (acum, item) => acum + item.quantity, 0 );
    setTotalItems(newTotalItems);

   }

   const handleTotal = () => { 
      const newTotal = cart.reduce((acum, item) => acum + item.price * item.quantity, 0);
      setTotal(newTotal);
    }

   useEffect( () => { 
    handleTotalItems();
    handleTotal();
    }, [cart] )

  const objectValues = {
    cart,
    total,
    totalItems,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={objectValues}> {children} </CartContext.Provider>;
};
