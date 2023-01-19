
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UseCartContext } from './context/CartContext';
import JuegosCart from './JuegosCart';

function ModalCart({ show, handleClose }) {
  const { cart } = UseCartContext();

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        {cart.map((juego) => {
          return (
            <JuegosCart key={juego.id} game={juego} />
          )
        })}
          
        </Modal.Body>
        <Modal.Footer>
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