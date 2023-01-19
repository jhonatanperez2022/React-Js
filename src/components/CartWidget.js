
import { useState } from "react";
import "./CartWidget.css";
import ModalCart from "./ModalCart";
import { UseCartContext } from "./context/CartContext";


const CartWidget = () => {
    const { count } = UseCartContext()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return( 
    <>
    <div className="navbar-cart">
                    <button onClick={handleShow}>
                   <i className="bi bi-cart2"></i>   
                   <p>{count}</p>          
                    </button>
    </div>
    <ModalCart show={show} handleClose={handleClose} />
    </>
    
    );
};

export default CartWidget;