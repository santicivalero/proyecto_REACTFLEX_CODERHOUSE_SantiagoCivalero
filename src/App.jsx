import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ErrorNotFound from "./components/ErrorNotFound/ErrorNotFound";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App
