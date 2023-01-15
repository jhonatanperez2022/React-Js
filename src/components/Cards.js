import React from 'react';

import producto from '../producto.json';

import Card from './Card';

const Cards = () => {

    return (
    <div>
        <div className='seccionPlat'>
            <div className='contenedorJuegos'>
                <Card tipo={producto} />    
            </div>
        </div>
    </div>
    
    
    )
}

export default Cards