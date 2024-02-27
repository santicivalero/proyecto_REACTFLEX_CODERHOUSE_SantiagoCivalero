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

    setIsLoading(true);
    getProducts()
      .then( resp => {
        if(category) {
          const productsFilter = resp.filter( product => product.category === category );
          setProducts(productsFilter)
        } else {
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
}

export default ItemListContainer