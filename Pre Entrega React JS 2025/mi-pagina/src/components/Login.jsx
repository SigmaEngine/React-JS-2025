import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Simula un login exitoso
    localStorage.setItem('mi_ecommerce_user', JSON.stringify({ name: 'Usuario' }))
    navigate('/checkout')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Iniciar sesión</h2>
      <p>Simulación de login (sin backend).</p>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}
