import Plataformas from './Plataformas';
import Categorias from './Categorias';

function ItemListContainer ({greeting}) {
    return <div>
        {/* <div className='div_ilc'>
            <h1>{greeting}</h1>
        </div> */}
        
        <Plataformas/>
        <Categorias/>
        
        
    </div>
}

export default ItemListContainer;