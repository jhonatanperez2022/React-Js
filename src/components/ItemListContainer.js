import Cards from './Cards';
import { Link } from 'react-router-dom';

function ItemListContainer () {

    return <>
                <div className="divEnlacesIlc">
                    <Link to="/plataformas" className="buttons-navbar">
                        Plataformas
                    </Link>
                    <Link to="/categorias" className="buttons-navbar">
                        Categorias
                    </Link>
                </div>
                
                <Cards/>
            </>
}

export default ItemListContainer;