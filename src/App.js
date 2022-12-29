
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom'
import Categorias from './components/Categorias';
import Plataformas from './components/Plataformas';
import Contactos from './components/Contactos';
import producto from './producto.json';
import CardSelected from './components/CardSelected';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';




function App() {
  
  const { plataformas, categorias } = producto;

  return (
    
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="comprar/:id" element={<ItemDetailContainer /> } />
          <Route path="/plataformas" element={<Category tipo={plataformas} titulo={<h1 className="elTitulo"> Plataformas</h1>} />} />
          <Route path="/categorias" element={<Category tipo={categorias} titulo={<h1 className="elTitulo"> Categorias</h1>} />} />
          <Route path="*" element={<h1 className='error404'>404 Not Found</h1>} />
      </Routes>
    </div>
    
  );
}

export default App;
