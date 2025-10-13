import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'


export default function ProductCard({ product }) {
const { addToCart } = useCart()
return (
<div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
<Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
<img src={product.image} alt={product.title} style={{ width: '100%', height: 150, objectFit: 'contain' }} />
<h4 style={{ fontSize: 14 }}>{product.title}</h4>
</Link>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
<strong>${product.price}</strong>
<button onClick={() => addToCart(product)}>Agregar</button>
</div>
</div>
)
}