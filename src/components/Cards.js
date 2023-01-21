import React, { useEffect } from 'react';
import Card from './Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../FireBase/firebase-config';
import { UseCartContext } from './context/CartContext';

const Cards = () => {
    
    const { games, setGames} = UseCartContext()
    
    //Extrayendo los datos de la FireBae
    
    const productsCollectionRef = collection(db, "productos")
    
    const getProducts = async () => {
    const data =  await getDocs(productsCollectionRef)
    setGames(data.docs.map(juego => ({...juego.data(), id: juego.id})));
    }
    
    useEffect(() => {
    getProducts();
    }, []);
    
    
    return (
    <div>
        <div className='seccionPlat'>
            <div className='contenedorJuegos'>
                <Card tipo={games} />    
            </div>
        </div>
    </div>
    )
}

export default Cards