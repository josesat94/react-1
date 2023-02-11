import React from 'react'
import './style.css'

const TableRow = ({product}) => {
    return (
        <tr className='tablaCart'>
            <th className='idTabla' scope="row"> {product.id} </th>
            <td><img className='imgTabla' src={product.image} alt="table-row"></img></td>
            <td className='titleTabla'> {product.title} </td>
            <td> {product.price} </td>
            <td className='titleTabla'>{product.quantity}</td>
            <td><button>Remove</button></td>
        </tr>
    )
}

export default TableRow