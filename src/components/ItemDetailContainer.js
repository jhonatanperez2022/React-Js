import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { getProductById } from "./functions";
import axios from 'axios';


const ItemDetailContainer = ({ producto }) => { 


  const { id } = useParams();
  const { juegos, setJuegos } = useState([])

  const idNumber = parseInt( id );

  

  const getGameById = () => {
    const juegoObtenido = producto.find((juego) => juego.id === idNumber)

  return juegoObtenido
  }

  useEffect (() => {
    setJuegos(getGameById())
  }, [id])


  return (
    <>
        <ItemDetail producto={juegos} />     
    </>
  )
}

export default ItemDetailContainer;