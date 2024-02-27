import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";



function App() {
  return (
    // <>
    //   <NavBar />
    //   <ItemListContainer greeting="¡Bienvenidos!" message="Sitio en construcción" />
    // </>
    <BrowserRouter>
    <NavBar />
    
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:category" element={<ItemListContainer />} />
    
    <Route path="/item/:id" element={<ItemDetailContainer />} />
  </Routes>
    
</BrowserRouter>
  )
}

export default App
