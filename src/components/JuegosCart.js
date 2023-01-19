import React from 'react'

const JuegosCart = ({key, game}) => {
    
  return (
    <div className='divCartJuegos'>
        <h5>{game.name}</h5>
        <p>{game.cantidad}</p> 
    </div>
  )
}

export default JuegosCart;