import React from 'react'
import { UseCartContext } from '../context/CartContext'
import { db } from '../../FireBase/firebase-config'
import { addDoc, collection } from 'firebase/firestore'

const CompraFinal = () => {
    const { cart, sumaTotal, vaciarCart } = UseCartContext()
    
    
    const order = {
        buyer: {
            name: "jhonatan",
            email: "jhona@gmail.com"
        },
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
        <table>
            <thead>
                <tr>
                    <th>
                        <label for="name"> Nombre y Apellido</label>
                    </th>
                    <th>
                        <label for="email"> Email </label>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input id="name" type="text" name="name" placeholder='Nombre y Apellido' />
                    </td>
                    <td>
                        <input id="email" type="email" name="email" placeholder='email' />
                    </td>
                </tr>
            </tbody>
        </table>
        <button onClick={() => {
            issueOrder()
            vaciarCart()
        }}>Finalizar compra</button>
        </div>
    </div>
    
  )
}

export default CompraFinal