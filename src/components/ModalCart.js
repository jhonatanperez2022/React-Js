
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UseCartContext } from './context/CartContext';
import { RiDeleteBin5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom';



function ModalCart({ show, handleClose }) {
  
  const { cart, deleteGame, vaciarCart, sumaTotal } = UseCartContext();
  
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cart.map(juego => (
          <div key={juego.id} className='divCartJuegos'>
              <div className='divCartJuegos-Img'>
                  <img src={juego.imagen} alt={juego.name} className="cartImg"/>
              </div>
              <div className='divCartJuegos-Text'>
                  <h5>{juego.name}</h5>
                  <p>Cantidad: {juego.cantidad}</p>
                  <p>Suma: {juego.cantidad * juego.precio} USD</p>
              </div>
              <div className='divCartJuegos-Delete'>
                  <button onClick={() => deleteGame(juego.id)}> <RiDeleteBin5Fill className="deleteFromCart" alt="eliminar juego"/> </button>
              </div>
          </div>
        ))}
          
          
        </Modal.Body>
        
        <Modal.Footer>
          <div className='modal-footer__total'>
            <p>TOTAL: {sumaTotal} USD</p>
          </div>
          
          <button className='modal-footer__vaciar' onClick={vaciarCart}>
            Vaciar
          </button>
          
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
          <Link to={`su-compra`} className='modal-footer__finalizar' onClick={() => {
            handleClose()
          }}>
            <p>
              Detalle del carrito
            </p>
          </Link>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;