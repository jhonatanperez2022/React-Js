import React from 'react'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'
import facebook from '../assets/icons/facebook.png'



const Contactos = () => {
  return (
    <div className='seccionContacto'>
        <h1>Contactos</h1>
        <h2>Por cualquier consulta</h2>
        <div className='divContacto'>
        <p>Nuestras redes sociales</p>
        <div className='contactoRedes'>
          <a><img src={instagram} /></a>
          <a><img src={twitter} /></a>
          <a><img src={facebook} /></a>
        </div>
        </div>
      </div>
  );
}

export default Contactos