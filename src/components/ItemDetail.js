import React from 'react'
import { UseCartContext } from './context/CartContext';



const ItemDetail = ({producto}) => {
  const { addProduct } = UseCartContext()
  
  return (
    <>
    <div className='divJuego-base'>
        <div className='divJuego-detallado'>
            <img src={producto.imagen} alt={producto.name} />
            <h4>{producto.nickname}</h4>
            <p>{producto.description}</p>
            <button onClick={() => addProduct(producto.id)}>COMPRAR</button>
        </div>
        <div className='juegoTematica'>
            <p>{producto.precio} USD</p>
            <h5>{producto.tematica}</h5>
        </div>
    </div>
    </>
  )
}

export default ItemDetail;