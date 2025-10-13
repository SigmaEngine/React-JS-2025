import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'


export default function Navbar() {
const { cart } = useCart()
const count = cart.reduce((s, p) => s + p.qty, 0)


return (
<nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #ddd' }}>
<NavLink to="/">Home</NavLink>
<NavLink to="/products">Productos</NavLink>
<NavLink to="/cart">Carrito ({count})</NavLink>
<NavLink to="/checkout">Checkout</NavLink>
<NavLink to="/login">Login</NavLink>
</nav>
)
}