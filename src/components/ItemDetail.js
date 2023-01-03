import React from 'react'
import { useLocation, useParams } from "react-router-dom";


const ItemDetail = ({ producto }) => {

  // const { id } = useParams();
  // const type = useLocation().pathname.split("/")[1];
  // const items = producto[type];
  // const item = items.find((item) => item.id === id);
  
  return (
    <>
    <div className='divJuego'>
            <img src={producto.imagen} />
            <h4>{producto.nickname}</h4>
            <p>{producto.id}</p>
            <a>COMPRAR</a>
    </div>
    
    </>
  )
}

export default ItemDetail;