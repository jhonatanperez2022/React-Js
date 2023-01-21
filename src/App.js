import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom'
import Contactos from './components/Contactos';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import CompraFinal from './components/CompraFinal/CompraFinal';
import { UseCartContext } from './components/context/CartContext';


function App() {
  
  const { games } = UseCartContext();
  
  //filtrando los juegos (categoria o plataformas)
  
  const juegosPlat = games.filter((juego)=> juego.tipo === "plataformas")
  const juegosCat = games.filter((juego)=> juego.tipo === "categorias")
  
  return (
    <>
      <div className="App">
        
        <NavBar/>
        
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/contactos" element={<Contactos/>} />
            <Route path="/comprar/:urlName" element={<ItemDetailContainer producto={games} /> } />
            <Route path="/plataformas" element={<Category tipo={juegosPlat} titulo={<h1 className="elTitulo"> Plataformas</h1>} />} />
            <Route path="/categorias" element={<Category tipo={juegosCat} titulo={<h1 className="elTitulo"> Categorias</h1>} />} />
            <Route path="/categorias/comprar/:urlName" element={<ItemDetailContainer producto={games} /> } />
            <Route path="/plataformas/comprar/:urlName" element={<ItemDetailContainer producto={games} /> } />
            <Route path='/su-compra' element={ <CompraFinal/> } />
            <Route path="*" element={<h1 className='error404'>404 Not Found</h1>} />
        </Routes>
        
        <Footer/>
      </div>
    </>
  );
}

export default App;
