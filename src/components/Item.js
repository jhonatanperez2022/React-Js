import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ juego }) => {
  return (
    <div className='divJuego'>
            <img src={juego.imagen} />
            <h4>{juego.nickname}</h4>
            <p>{juego.description}</p>
            <Link to={`comprar/${juego.urlName}`}>
              COMPRAR
            </Link>
    </div>
  )
}

export default Item