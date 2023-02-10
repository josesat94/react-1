import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.css'
import generateOrderObject from '../../services/generateOrderObject'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { async } from '@firebase/util'
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'

const Cart = () => {

  const { products, total, cleanCart } = useContext(Shop)

  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  const confirmPurchase = async () => {

    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre: "Juan",
        email: "juan@mmail.com",
        telefono: "1234567",
        cart: products,
        total: total()
      })

      setFormVis(true);

      console.log(order);

      //Almacenar la order en Firebase y con el ID autogenerado, mostramos un alert de confirmación de compra:
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()

      //Posteriormente actualizar el stock de los productos existentes:
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }




      alert("Orden confirmada con ID: " + docRef.id);

    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false);
    }
  }


  return (
    <>
      {
        products.length !== 0 ?
          <>
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Image</th>
                  <th scope="col">title</th>
                  <th scope="col">price</th>
                  <th scope="col">quantity</th>
                  <th scope="col">remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => {
                  return <TableRow key={product.id} product={product} />
                })}
              </tbody>
            </table>
            {
              loader ?
                <h2>Cargando...</h2>
                :
                <button onClick={confirmPurchase}>Confirm purchase</button>
            }
          </>
          :
          <>
            <h1>No hay productos en el carrito</h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </>
      }

      {formVis ?
        <form>
          <input placeholder='Ingrese su nombre' />
          <input placeholder='Ingrese su email' />
          <input placeholder='Ingrese su telefono' />
        </form>
        : null}
    </>
  )
}

export default Cart