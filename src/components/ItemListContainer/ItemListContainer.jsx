import itemListContainer from './ItemListContainer.module.css'

const ItemListContainer = ({greeting, message}) => {
  return (
    <div className={`row ${itemListContainer.itemListContainer}`}>
        <h1 className='row col-md-12 text-center'>{greeting}</h1>
        <p className='row col-md-12'>{message}</p>
    </div>
  )
}

export default ItemListContainer