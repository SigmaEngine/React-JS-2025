import React from 'react'
import { useCart } from '../contexts/CartContext'


export default function Cart() {
const { cart, removeFromCart, updateQty, total, clearCart } = useCart()


if (cart.length === 0) return <p>El carrito está vacío.</p>


return (
<div>
<h2>Carrito</h2>
<ul>
{cart.map(item => (
<li key={item.id} style={{ marginBottom: 12 }}>
<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
<div style={{ flex: 1 }}>{item.title}</div>
<div>
<input type="number" value={item.qty} min={1} onChange={(e) => updateQty(item.id, Number(e.target.value))} style={{ width: 60 }} />
</div>
<div>${(item.price * item.qty).toFixed(2)}</div>
<button onClick={() => removeFromCart(item.id)}>Eliminar</button>
</div>
</li>
))}
</ul>


<div style={{ marginTop: 20 }}>
<strong>Total: ${total.toFixed(2)}</strong>
</div>


<div style={{ marginTop: 12 }}>
<button onClick={() => alert('Simular compra')}>Comprar</button>
<button onClick={clearCart} style={{ marginLeft: 8 }}>Vaciar carrito</button>
</div>
</div>
)
}