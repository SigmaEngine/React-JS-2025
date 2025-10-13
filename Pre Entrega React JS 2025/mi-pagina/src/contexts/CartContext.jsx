import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const clearCart = () => setCart([])
  const updateQty = (id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQty, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
