import React, { useState } from 'react'
import { UseCartContext } from '../context/CartContext'
import { db } from '../../FireBase/firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'

const CompraFinal = () => {
    const { cart, sumaTotal, vaciarCart } = UseCartContext()
    
    //sweet alert
    
    const alertCompra = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra exitosa!',
            showConfirmButton: false,
            timer: 2500
            })
    }
    
    //guardando datos del form
    
    const initialValue = {
        name: "",
        email: ""
    }
    
    const [ user, setUser ] = useState(initialValue)
    
    const catchInputs = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    }
    
    const saveData = async (e) => {
        e.preventDefault();
        console.log(user);
        setUser({...initialValue})
    }
    
    
    //datos del carrito para el firebase
    
    const order = {
        user,
        items: cart.map(producto => ({ id: producto.id, name: producto.name, price: producto.precio, quantity: producto.cantidad})),
        total: sumaTotal
    }
    
    const issueOrder = () => {
        const orderCollection = collection(db, "order");
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))
    }
    
    return (
    <div className='compraFinal'>
        <h1>
            Detalle del carrito
        </h1>
        <div className='compraFinal-Table'>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Suma</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map(juego => (
                        <tr key={juego.id}>
                            <td>{juego.name}</td>
                            <td>{juego.cantidad}</td>
                            <td>{juego.precio * juego.cantidad} USD </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        <h3>Total a pagar: <span className='compraFinal-Span'>{sumaTotal} USD</span></h3>
        <div className='tableForm'>
            <h2>Complete el formulario para finalizar su compra</h2>
        <form onSubmit={saveData}>
            <div className='tableForm-div'>
            <div className='tableForm-Datos'>
                <label for="name"> Nombre y Apellido</label>
                <input id="name" type="text" name="name" placeholder='Nombre y Apellido' onChange={catchInputs} value={user.name}/>
            </div>
            <div className='tableForm-Datos'>
                <label for="email"> Email </label>
                <input id="email" type="email" name="email" placeholder='email' onChange={catchInputs} value={user.email}/>
            </div>
            </div>
        <button onClick={() => {
            issueOrder()
            vaciarCart()
            alertCompra()
        }}>Finalizar compra</button>
        </form>
        </div>
    </div>
    
  )
}

export default CompraFinal