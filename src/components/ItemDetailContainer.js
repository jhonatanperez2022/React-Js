import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';



const ItemDetailContainer = ({ producto }) => { 


  const { urlName } = useParams();
  const [ juegos, setJuegos ] = useState({})

  

  const getGameByName = () => {
    const juegoObtenido = producto.find((juego) => juego.urlName === urlName)

  return juegoObtenido
  }

  useEffect (() => {
    setJuegos(getGameByName())
  }, [urlName])

  return (
    <>
        <ItemDetail producto={juegos} />     
    </>
  )
}

export default ItemDetailContainer;