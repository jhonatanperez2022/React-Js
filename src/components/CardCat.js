import React from 'react'
import { Link } from 'react-router-dom';

const CardCat = ({producto}) => {
    return (
    <div className='divJuego'>
            <img src={producto.imagen} />
            <h4>{producto.nickname}</h4>
            <p>{producto.description}</p>
            <Link to={`comprar/${producto.id}`}>
            <a>COMPRAR</a>
            </Link>
    </div>
    )  
}

export default CardCat;