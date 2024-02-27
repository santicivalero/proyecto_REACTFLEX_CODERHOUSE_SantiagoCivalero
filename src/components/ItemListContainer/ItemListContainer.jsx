import itemListContainer from './ItemListContainer.module.css'
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";



const ItemListContainer = ({greeting, message}) => {

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => { 

    setIsLoading(true); // Cada ves que se cargue nuestro componente vamos a setear en true el isLoading para que nos aparezca la carga
    getProducts()
      .then( resp => {
        // Verifico si existe una category en el parámetro
        if(category) {
          const productsFilter = resp.filter( product => product.category === category );
          setProducts(productsFilter)
        } else {
          // Si no existe una categoría en el parámetro seteamos todos los productos en el state products
          setProducts(resp);
        }
          setIsLoading(false);
      })

   }, [category] )

  return (
    <>
    { isLoading ? <Spinner /> : <ItemList products={products} /> }
    </>
  )







  // return (
  //   <div className={`row ${itemListContainer.itemListContainer}`}>
  //       <h1 className='row col-md-12 text-center'>{greeting}</h1>
  //       <p className='row col-md-12'>{message}</p>
  //   </div>
  // )
}

export default ItemListContainer