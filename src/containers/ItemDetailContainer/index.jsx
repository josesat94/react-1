import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import Item from '../../components/Item'
import './style.css'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  useEffect (()=> {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log (response);
        return response.json()
      })
      .then (json => {
        console.log(json)
        setDetail(json)
      })
      .catch((err) => {
        alert("Hubo un error")
      });
    }, [id])


  return (
    <div>
      <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer