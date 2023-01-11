import React from 'react'

const ItemDetail = ({ detail }) => {
    console.log(detail)
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={detail.image} class="card-img-top" alt= "Producto en venta" />
            <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <p className="card-text"> {detail.price} </p>
                <p className="card-text"> {detail.description} </p>
                <p className="card-text"> {detail.category} </p>
            </div>
        </div>

    )
}

export default ItemDetail