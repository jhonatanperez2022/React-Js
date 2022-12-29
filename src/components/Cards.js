import React from 'react';
import fifa22 from '../assets/img/fifa-22.avif';
import gta5 from '../assets/img/gtav.jpg';
import gow from '../assets/img/godofwar.jpg';
import thewitcher3 from '../assets/img/thewitcher3.jpg';
import cod4 from '../assets/img/codbo4.jpg';
import ufc4 from '../assets/img/ufc4.jpg';
import producto from '../producto.json';
import CardCat from './CardCat';
import CardPlat from './CardPlat';
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