import React from 'react'


const ItemDetail = ({ product }) => {
  return (
    <>
    <div className='divJuego'>
            <img src={product.imagen} />
            <h4>{product.nickname}</h4>
            <p>{product.description}</p>
            <a>COMPRAR</a>
    </div>
    </>
  )
}

export default ItemDetail