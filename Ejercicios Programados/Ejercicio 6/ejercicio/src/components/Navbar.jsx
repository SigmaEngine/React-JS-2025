import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#222', color: 'white' }}>
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre nosotros</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  )
}

export default Navbar
