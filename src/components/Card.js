import React from 'react'
import Item from './Item';

const Card = ({ tipo }) => {

  return tipo.map((juego) => (
    <Item key={juego.id} juego={juego} />
  ))
}

export default Card