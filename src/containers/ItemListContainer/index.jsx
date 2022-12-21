import React from 'react'
import './style.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className='saludoH1'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer

