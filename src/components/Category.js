import React from 'react'
import Items from './Items'

const Category = ({ tipo, titulo }) => {

  return(
    <>
      <h1>{titulo}</h1>
      {tipo.map((juego) => (
        
        <Items key={juego.id} juego={juego} />
        
      ))}
      </>
    )
}

export default Category;