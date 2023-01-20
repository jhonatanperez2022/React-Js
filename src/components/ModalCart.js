
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UseCartContext } from './context/CartContext';


function ModalCart({ show, handleClose }) {
  const { cart } = UseCartContext();

  const sumaTotal = cart.reduce((acc,juego) => acc + juego.precio * juego.cantidad ,0)

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        {cart.map(juego => (
          <div key={juego.id} className='divCartJuegos'>
              <img src={juego.imagen} alt={juego.name} className="cartImg"/>
              <div className='divCartJuegos-Text'>
                  <h5>{juego.name}</h5>
                  <p>Cantidad: {juego.cantidad}</p>
                  <p>Suma: {juego.cantidad * juego.precio} USD</p>
              </div>
          </div>
        ))}
        
          
        </Modal.Body>
        <Modal.Footer>
          <div className='modal-footer__total'>
            <p>TOTAL: {sumaTotal} USD</p>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;