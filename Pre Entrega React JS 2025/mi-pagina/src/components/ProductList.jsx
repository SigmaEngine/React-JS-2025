import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../api/products'
import ProductCard from './ProductCard'


export default function ProductList() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
fetchProducts()
.then(data => setProducts(data))
.catch(err => setError(err.message))
.finally(() => setLoading(false))
}, [])


if (loading) return <p>Cargando productos...</p>
if (error) return <p>Error: {error}</p>


return (
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
{products.map(p => (
<ProductCard key={p.id} product={p} />
))}
</div>
)
}