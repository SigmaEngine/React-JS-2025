import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../api/products'
import { useCart } from '../contexts/CartContext'


export default function ProductPage() {
const { id } = useParams()
const [product, setProduct] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const { addToCart } = useCart()


useEffect(() => {
setLoading(true)
fetchProductById(id)
.then(data => setProduct(data))
.catch(err => setError(err.message))
.finally(() => setLoading(false))
}, [id])


if (loading) return <p>Cargando...</p>
if (error) return <p>Error: {error}</p>
if (!product) return null


return (
<div style={{ display: 'flex', gap: 20 }}>
<img src={product.image} alt={product.title} style={{ width: 300, height: 300, objectFit: 'contain' }} />
<div>
<h2>{product.title}</h2>
<p>{product.description}</p>
<p><strong>${product.price}</strong></p>
<button onClick={() => addToCart(product)}>Agregar al carrito</button>
</div>
</div>
)
}