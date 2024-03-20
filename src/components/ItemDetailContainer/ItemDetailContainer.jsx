import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";




const ItemDetailContainer = () => {

  // const { id } = useParams();
  // const [item, setItem] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => { 

  //   setIsLoading(true);
  //   getProduct(id) 
  //     .then( resp => { setItem(resp)
        
  //       setIsLoading(false);
  //     })

  //  }, [])

  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductDB = (id) => { 
    // Referencia a nuestro producto
    const productRef = doc( db, "products", id );

    
    getDoc(productRef)
      .then( response => {
          const product = {
            id: response.id,
            ...response.data()
          }
          setItem(product);
          setIsLoading(false);
      } )

   }

  useEffect(() => { 

    setIsLoading(true);
    getProductDB(id);

   }, [])

  return (
    <>
    {isLoading ? <Spinner /> : (item && <ItemDetail {...item} />)}
    </>
  )
}

export default ItemDetailContainer;
