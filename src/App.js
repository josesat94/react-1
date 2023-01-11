
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
        <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
        <Route path='*' element= {<h2>Ruta no encontrada</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


