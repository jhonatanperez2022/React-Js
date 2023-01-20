import { createContext, useContext, useState } from "react";
import productos from "../../producto.json"


const GlobalContext = createContext();
const UseCartContext = () => useContext(GlobalContext)


const CartContext = (props) => {

const [ cart, setCart] = useState([]);
const [count, setCount] = useState(0);



 
// const isInCart = (id) => cart.find(juego => juego.id === id) ? true : false;


return (
    <>
        <GlobalContext.Provider value={{
            cart,
            setCart,
            count,
            setCount
            
        }}>
            {props.children}
        </GlobalContext.Provider>
    </>
    )
}

export { UseCartContext, CartContext };