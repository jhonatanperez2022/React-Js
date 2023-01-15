import React from 'react'


const ItemDetail = ({ producto }) => {
  
  return (
    <>
    <div className='divJuego-base'>
    <div className='divJuego-detallado'>
            <img src={producto.imagen} />
            <h4>{producto.nickname}</h4>
            <p>{producto.description}</p>
            <a>COMPRAR</a>
    </div>
    <div className='juegoTematica'>
      <p>{producto.precio}</p>
      <h5>{producto.tematica}</h5>
    </div>
    </div>
    
    </>
  )
}

export default ItemDetail;