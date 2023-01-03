import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({ juego }) => {
  return (
    <div className='divJuego-tipo'>
            <img src={juego.imagen} />
            <h4>{juego.nickname}</h4>
            <p>{juego.description}</p>
            <Link to={`comprar/${juego.urlName}`}>
            <a>COMPRAR</a>
            </Link>
    </div>
  )
}

export default Items