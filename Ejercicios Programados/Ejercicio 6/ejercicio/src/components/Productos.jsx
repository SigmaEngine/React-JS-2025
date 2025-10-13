import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productos } from '../data/productos'

function Productos() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(productos)
      } catch {
        setError("Error al cargar los productos.")
      } finally {
        setLoading(false)
      }
    }, 1000)
  }, [])

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Productos</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {data.map(prod => (
          <div key={prod.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
            <Link to={`/producto/${prod.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productos
