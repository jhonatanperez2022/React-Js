
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      <div className='div_ilc'>
        <ItemListContainer greeting={'¡ Bienvenidos !'}/>
      </div>
    </div>
  );
}

export default App;
