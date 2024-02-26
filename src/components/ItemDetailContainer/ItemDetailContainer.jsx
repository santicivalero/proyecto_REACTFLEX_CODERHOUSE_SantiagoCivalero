import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";




export const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 

    setIsLoading(true);
    getProduct(id) 
      .then( resp => { setItem(resp)
        
        setIsLoading(false);
      })

    

   }, [])

  return (
    <>
    {isLoading ? <Spinner /> : (item && <ItemDetail {...item} />)}
    </>
  )
}
