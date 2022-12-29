import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { getProductById } from "./functions";
import axios from 'axios';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    let { id } = useParams();
    

  useEffect(() => {
    getProductById(id)
      .then((product) => setProduct(product))
      
  }, [id]);

    

  return (
    <>
        <ItemDetail key={product.id} product={product} />     
    </>
  )
}

export default ItemDetailContainer;