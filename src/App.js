
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom'
import Categorias from './components/Categorias';
import Plataformas from './components/Plataformas';
import Contactos from './components/Contactos';





function App() {
  
  

  return (
    
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      
      <Routes>
          <Route path="/" element={<ItemListContainer greeting={'¡ Bienvenidos !'}/>} />
      </Routes>
      
      <Routes>
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/plataformas" element={<Plataformas />} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="*" element={<h1 className='error404'>404 Not Found</h1>} />
        </Routes>
    </div>
    
  );
}

export default App;
