import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import Item from '../../components/Item'
import './style.css'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const { id } = useParams()

  useEffect(() => {

    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getProduct();





    // fetch(`https://fakestoreapi.com/products/${id}`)
    //   .then(response => {
    //     console.log(response);
    //     return response.json()
    //   })
    //   .then(json => {
    //     console.log(json)
    //     setDetail(json)
    //   })
    //   .catch((err) => {
    //     alert("Hubo un error")
    //   });
  }, [id])


  return (
    <div>
      {
        Object.keys(detail).length === 0
          ? <h4>Cargando...</h4>
          : <ItemDetail detail={detail} />
      }
    </div>
  )
}

export default ItemDetailContainer