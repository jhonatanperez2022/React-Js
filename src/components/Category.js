import React from 'react'
import Items from './Items'

const Category = ({ tipo, titulo }) => {

  return(
    <>
      {titulo}
      <div className='contenedorTipoJuegos'>
            {tipo.map((juego) => (
                <Items key={juego.id} juego={juego} />
            ))}
      </div>
    </>
    )
}

export default Category;