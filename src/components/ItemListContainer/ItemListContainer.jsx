import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from '../ItemList/ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const {categoryId} = useParams()

    useEffect (() => {
      const urlAllCategory = 'https://dummyjson.com/products'
      const urlByCategory = `https://dummyjson.com/products/category/${categoryId}`

      fetch(categoryId ? urlByCategory : urlAllCategory)
        .then(res => res.json())
        .then(res => setItems(res.products))
        .catch(error => console.error("Error al obtener productos:", error));
    }, [categoryId])

  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
