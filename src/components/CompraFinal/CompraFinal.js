import React from 'react'
import { UseCartContext } from '../context/CartContext'

const CompraFinal = () => {
    const { cart, sumaTotal } = UseCartContext()
    
    return (
    <div className='compraFinal'>
        <h1>
            COMPRA FINAL
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
        
    </div>
    
  )
}

export default CompraFinal