import React from 'react'
import { useLocation, useParams } from "react-router-dom";


const ItemDetail = ({ producto }) => {

  // const { id } = useParams();
  // const type = useLocation().pathname.split("/")[1];
  // const items = producto[type];
  // const item = items.find((item) => item.id === id);
  
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