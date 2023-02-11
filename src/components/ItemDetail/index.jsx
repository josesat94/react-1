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
        <div className='cartContainerGeneral'>
            <div className='containerImg'>
                <img src={detail.image} className="imgCard" alt="Producto en venta" />
            </div>
            <div className="cardBody">
                <div className="card" style={{ width: '18rem' }}>
                <h2 className="">{detail.title}</h2>
                <p className="precio"> ${detail.price} </p>
                <p className=""> {detail.description} </p>
                <p className=""> {detail.category} </p>
        </div>
        
                {
                    quantity === 0 ?
                        <ItemCount
                            stock={detail.stock}
                            initial={1}
                            onAdd={onAdd}
                        />
                        :
                        <button className='btn btn-primary p-2'>
                            <Link className='goCart' to="/cart">
                                Go cart
                            </Link>
                            
                        </button>

                }
            </div>
        </div>

    )
}

export default ItemDetail