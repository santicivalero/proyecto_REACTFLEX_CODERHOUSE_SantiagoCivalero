import Item from "../Item/Item";
import itemList from "./ItemList.module.css";

const ItemList = ({ products }) => {
  // Ordena los productos por el nombre antes de renderizar
  products.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={`row row-cols-1 row-cols-md-4 mt-4 ${itemList.itemList}`}>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
