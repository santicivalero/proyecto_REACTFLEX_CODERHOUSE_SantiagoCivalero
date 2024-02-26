import { Item } from "../Item/Item"
import itemList from "./ItemList.module.css"




export const ItemList = ({products}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3">

        {products.map( product => <Item key={product.id} {...product}  />)}
    </div>
  )
}
