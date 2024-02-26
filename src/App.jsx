import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    // <>
    //   <NavBar />
    //   <ItemListContainer greeting="¡Bienvenidos!" message="Sitio en construcción" />
    // </>
    <BrowserRouter>
    <NavBar />
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:category" element={<ItemListContainer />} />
    
    <Route path="/item/:id" element={<ItemDetailContainer />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
