import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se aagregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

    console.log(detail)
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={detail.image} className="card-img-top" alt="Producto en venta" />
            <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <p className="card-text"> {detail.price} </p>
                <p className="card-text"> {detail.description} </p>
                <p className="card-text"> {detail.category} </p>
                {
                    quantity === 0 ?
                        <ItemCount
                            stock={detail.stock}
                            initial={1}
                            onAdd={onAdd}
                        />
                        :
                        <button className='btn btn-primary p-2'>
                            <Link to="/cart">
                                Ir al carrito
                            </Link>
                            
                        </button>

                }
            </div>
        </div>

    )
}

export default ItemDetail