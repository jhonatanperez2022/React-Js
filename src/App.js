
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom'
import Contactos from './components/Contactos';
import producto from './producto.json';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';




function App() {

  const juegosPlat = producto.filter((juego)=> juego.tipo === "plataformas")
  const juegosCat = producto.filter((juego)=> juego.tipo === "categorias")

  return (
    
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="/comprar/:urlName" element={<ItemDetailContainer producto={producto} /> } />
          <Route path="/plataformas" element={<Category tipo={juegosPlat} titulo={<h1 className="elTitulo"> Plataformas</h1>} />} />
          <Route path="/categorias" element={<Category tipo={juegosCat} titulo={<h1 className="elTitulo"> Categorias</h1>} />} />
          <Route path="/categorias/comprar/:urlName" element={<ItemDetailContainer producto={producto} /> } />
          <Route path="/plataformas/comprar/:urlName" element={<ItemDetailContainer producto={producto} /> } />
          <Route path="*" element={<h1 className='error404'>404 Not Found</h1>} />
      </Routes>
    </div>
    
  );
}

export default App;
