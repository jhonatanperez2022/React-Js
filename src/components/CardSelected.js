import React from 'react'
import { useParams } from 'react-router-dom'
import CardPlat from './CardPlat'
import Item from './Item'
import Card from './Card'

const CardSelected = ({ producto }) => {
    
     const { cardId }= useParams()
     const juegoSeleccionado = producto.find ((juego) => juego.id === cardId)
  return (
    <div>
        <Item juego={juegoSeleccionado} />
        
    </div>
  )
}

export default CardSelected