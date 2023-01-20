import React from 'react'
import { UseCartContext } from './context/CartContext';
import productos from "../producto.json"


const ItemDetail = ({producto}) => {
  const { cart, setCart, count, setCount } = UseCartContext()
  

  const addProduct = (prodId) => {
    setCount(count + 1);

    const findGame = productos.find(juego => juego.id === prodId)
    const existInTheCart = cart.find(game => game.id === findGame.id)
    existInTheCart ? setCart([...cart, ...findGame.cantidad++]) : setCart([...cart, findGame])
    
    console.log(cart)
    
    
};

  

  return (
    <>
    <div className='divJuego-base'>
    <div className='divJuego-detallado'>
            <img src={producto.imagen} />
            <h4>{producto.nickname}</h4>
            <p>{producto.description}</p>
            <a onClick={() => addProduct(producto.id)}>COMPRAR</a>
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