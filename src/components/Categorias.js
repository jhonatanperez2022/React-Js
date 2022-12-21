import React from 'react'
import fifa22 from '../assets/img/fifa-22.avif'
import gta5 from '../assets/img/gtav.jpg'
import gow from '../assets/img/godofwar.jpg'




const Categorias = function () {
  
  return (
    <div className='seccionCat'>
      <h1>Categorias</h1>
        <h2>De la categoria que guste!</h2>
        <div className='contenedorJuegos'>
          <h3>Deporte</h3>
          <div className='divJuego'>
            <img src={fifa22} />
            <h4>Fifa 22</h4>
            <a>COMPRAR</a>
          </div>
          
          
          
          <h3>Accion</h3>
          <div className='divJuego'>
            <img src={gta5} />
            <h4>Gta 5</h4>
            <a>COMPRAR</a>
          </div>

          

          <h3>Aventuras</h3>
          <div className='divJuego'>
            <img src={gow} />
            <h4>God of war</h4>
            <a>COMPRAR</a>
          </div>

          

        </div>

      </div>
  )
  
}

export default Categorias