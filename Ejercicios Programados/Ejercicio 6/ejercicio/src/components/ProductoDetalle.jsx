import { useParams, Link } from 'react-router-dom'
import { productos } from '../data/productos'

function ProductoDetalle() {
  const { id } = useParams()
  const producto = productos.find(p => p.id === Number(id))

  if (!producto) return <p>Producto no encontrado.</p>

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <Link to="/">Volver a productos</Link>
    </div>
  )
}

export default ProductoDetalle
