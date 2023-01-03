
import Cards from './Cards';
import { Link } from 'react-router-dom';

function ItemListContainer ({ producto }) {

    // const juegosPlat = producto.filter((juego)=> juego.tipo === "plataformas")
    // const juegosCat = producto.filter((juego)=> juego.tipo === "categorias")

    return <div>

        <div className="divEnlacesIlc">
        <Link to="/plataformas" className="buttons-navbar">
            Plataformas
        </Link>
        <Link to="/categorias" className="buttons-navbar">
            Categorias
        </Link>
        </div>
        
        <Cards/>

    </div>
}

export default ItemListContainer;