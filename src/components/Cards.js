import React from 'react';

import producto from '../producto.json';

import Card from './Card';

const Cards = () => {

    const { categorias, plataformas } = producto;

    return (
        //plataformas

    <div>
        <div className='seccionPlat'>
        {/* <h1>Plataformas</h1>
        <h2>¡ Su plataforma favorita !</h2> */}
        <div className='contenedorJuegos'>
    <Card tipo={plataformas} />    
        </div>
        </div>
        
        <div className='seccionCat'>
        {/* <h1>Categorias</h1>
        <h2>¡ De la categoria que guste !</h2> */}
        <div className='contenedorJuegos'>
            <Card tipo={categorias} />
        </div>
        </div>
    </div>
    
    
    )
}

export default Cards