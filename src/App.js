
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom'
import Categorias from './components/Categorias';
import Plataformas from './components/Plataformas';
import Contactos from './components/Contactos';
import data from './Data'





function App() {
  
  

  return (
    
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="*" element={<h1 className='error404'>404 Not Found</h1>} />
      </Routes>
    </div>
    
  );
}

export default App;
