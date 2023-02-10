import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import Item from '../../components/Item'
import Ad from '../../components/Ad'
import './style.css'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  console.log(db);

  const [AdVisibility, setAdVisibility] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    const handleEsc = (event) => {
      setAdVisibility(false)
      window.removeEventListener("keydown", handleEsc);

      if (event.keyCode === 27) {
        console.log("will close");
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ... doc.data()
        }
        productosFirebase.push(product)
      });
      setProducts(productosFirebase)
    }

    getProducts();

    // fetch('https://fakestoreapi.com/products')
    //   .then(response => {
    //     console.log(response);
    //     return response.json()
    //   })
    //   .then(products => {
    //     if (categoryId) {
    //       const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
          
    //       setProducts(productosFiltradosPorCategoria)
    //     } else {
    //       setProducts(products)
    //     }
    //   })
    //   .catch((err) => {
    //     alert("Hubo un error")
    //   });
  }, [categoryId])



  const handleCloseAd = () => {
    setAdVisibility(false)

  }

  return (
    <div>
      <h1 className='saludoH1'>{greeting}</h1>
      <div className='containerCards'>
        <ItemList productos={products} />
        {
          AdVisibility === true
            ?
            <Ad>
              <h3>¡Aprovechá las ofertas de verano antes de que se acabe la promo!</h3>
              <button
                style={{
                  width: 100,
                  padding: 8,
                  border: '2px solid black'
                }}
                onClick={handleCloseAd}
              >Cerrar</button>
            </Ad>
            :
            null

        }
      </div>


    </div>
  )
}

export default ItemListContainer

