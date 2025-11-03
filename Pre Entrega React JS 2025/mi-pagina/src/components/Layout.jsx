import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div>
      style={{
    backgroundImage: `url('/src/assets/fondo.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  }}
  {children}
      <Navbar />
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', borderTop: '1px solid #ddd', padding: 10 }}>
        © Automovilismo del bueno
      </footer>
    </div>
  )
}
