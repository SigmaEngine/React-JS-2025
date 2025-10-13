import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import ProductoDetalle from './components/ProductoDetalle'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

