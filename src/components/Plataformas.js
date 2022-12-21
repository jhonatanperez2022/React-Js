import React from 'react'
import thewitcher3 from '../assets/img/thewitcher3.jpg'
import cod4 from '../assets/img/codbo4.jpg'
import ufc4 from '../assets/img/ufc4.jpg'


const Plataformas = () => {
  return (
    <div className='seccionPlat'>
      <h1>Plataformas</h1>
        <h2>Su plataforma favorita!</h2>
        <div className='contenedorJuegos'>
          <h3>PC</h3>
          <div className='divJuego'>
            <img src={thewitcher3} />
            <h4>The Witcher 3</h4>
            <a>COMPRAR</a>
          </div>
          <h3>Play Station</h3>
          <div className='divJuego'>
            <img src={cod4} />
            <h4>COD BO4</h4>
            <a>COMPRAR</a>
          </div>
          <h3>XBOX</h3>
          <div className='divJuego'>
            <img src={ufc4} />
            <h4>UFC 4</h4>
            <a>COMPRAR</a>
          </div>
        </div>
      </div>
  );
}

export default Plataformas