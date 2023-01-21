import { createContext, useContext, useState } from "react";


const GlobalContext = createContext();
const UseCartContext = () => useContext(GlobalContext)



const CartContext = (props) => {

const [cart, setCart] = useState([]);
const [count, setCount] = useState(0);
const [games, setGames] = useState([])



// funcion para agregar productos al carrito

const addProduct = (prodId) => {
    setCount(count + 1);
    const findGame = games.find(juego => juego.id === prodId)
    const existInTheCart = cart.find(game => game.id === findGame.id)
    
    if(existInTheCart){
        const findGameAux = {...findGame, cantidad: existInTheCart.cantidad+1}
        const cartAux = cart.filter(game => game.id !== findGame.id)
        setCart([...cartAux, findGameAux])
        
    } else {
        setCart([...cart, findGame])
        
    }
    
};



//funcion para eliminar productos del carrito

const deleteGame = (id) => {
    const gameInCart = games.find(juego => juego.id === id)
    const gameInCartExist = cart.find(juego => juego.id === gameInCart.id) 
    
    if(gameInCartExist.cantidad === 1){
        setCart(cart.filter(juego => juego.id !== gameInCartExist.id))
        setCount(count - 1)
        
    }
    else{
        const deleteGameAux = {...gameInCart, cantidad: gameInCartExist.cantidad-1}
        const newCartAux = cart.filter(game => game.id !== gameInCart.id)
        setCart([...newCartAux, deleteGameAux])
        setCount(count - 1)
        
    }
}



//funcion para vaciar el carrito

const vaciarCart = () => {
    setCart([])
    setCount(0)
}



//calculando la suma total del carrito

const sumaTotal = cart.reduce((acc,juego) => acc + juego.precio * juego.cantidad ,0)

return (
    <>
        <GlobalContext.Provider value={{
            cart,
            setCart,
            count,
            setCount,
            addProduct,
            deleteGame,
            sumaTotal,
            vaciarCart,
            setGames,
            games
        }}>
            {props.children}
        </GlobalContext.Provider>
    </>
    )
}

export { UseCartContext, CartContext };