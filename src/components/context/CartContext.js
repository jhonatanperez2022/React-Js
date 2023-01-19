import { createContext, useContext, useState } from "react";



const GlobalContext = createContext();
const UseCartContext = () => useContext(GlobalContext)


const CartContext = (props) => {

const [ cart, setCart] = useState([{}]);
const [count, setCount] = useState(0);



 


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