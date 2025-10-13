import React from 'react'

export default function Checkout() {
  const user = JSON.parse(localStorage.getItem('mi_ecommerce_user'))

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>
      <p>Usuario actual: <strong>{user?.name}</strong></p>
      <p>Simulación del proceso de compra. 🚀</p>
      <button
        onClick={() => {
          localStorage.removeItem('mi_ecommerce_user')
          alert('Sesión cerrada')
          window.location.href = '/'
        }}
      >
        Cerrar sesión
      </button>
    </div>
  )
}
