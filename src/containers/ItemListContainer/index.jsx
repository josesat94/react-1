import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import Item from '../../components/Item'
import './style.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
  console.log(categoryId)

  useEffect (()=> {

    fetch('https://fakestoreapi.com/products')
      .then(response => {
        console.log (response);
        return response.json()
      })
      .then (products => {
        if (categoryId) {
          const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
          console.log(productosFiltradosPorCategoria)
          setProducts(productosFiltradosPorCategoria)
        } else {
          setProducts(products)
        }
      })
      .catch((err) => {
        alert("Hubo un error")
      });
    }, [categoryId])

    console.log(products)


  return (
    <div>
      <h1 className='saludoH1'>{greeting}</h1>
      <div className='containerCards'>
        <ItemList productos={products}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer

