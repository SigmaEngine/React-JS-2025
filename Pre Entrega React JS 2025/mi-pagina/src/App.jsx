import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Login from './components/Login'
import Checkout from './components/Checkout'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Imágenes de categorías
import imgGT from './assets/gt.jpg'
import imgFormulas from './assets/formulas.jpg'
import imgRally from './assets/rally.jpg'
import imgStock from './assets/stock.jpg'

function Home() {
  return (
    <div className="app-hero">
      <div className="hero-content">
        <h1 className="hero-title">Tu tienda de automovilismo</h1>
        <p className="hero-sub">Velocidad, pasión y competencia — todo en un solo lugar</p>

        <div className="glass">
          <input
            type="text"
            placeholder="Buscar producto..."
            style={{
              padding: '10px 12px',
              borderRadius: '8px',
              border: 'none',
              marginRight: '8px',
            }}
          />
          <button className="btn-primary">Buscar</button>
        </div>
      </div>
    </div>
  )
}

function CategoriesSection() {
  return (
    <div style={{ padding: 20, backgroundColor: '#f4f4f4' }}>
      <h2 style={{ marginBottom: 15 }}>Categorías destacadas</h2>
      <div
        style={{
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
      >
        <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden' }}>
          <img src={imgGT} alt="Gran Turismo" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
          <div style={{ padding: 12 }}>
            <h3>Gran Turismo</h3>
            <p>Coches GT, endurance y prototipos.</p>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden' }}>
          <img src={imgFormulas} alt="Fórmulas" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
          <div style={{ padding: 12 }}>
            <h3>Fórmulas</h3>
            <p>Monoplazas y categorías de alta velocidad.</p>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden' }}>
          <img src={imgRally} alt="Rally" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
          <div style={{ padding: 12 }}>
            <h3>Rally</h3>
            <p>Off-road, WRC y desafíos extremos.</p>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden' }}>
          <img src={imgStock} alt="Stock Cars" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
          <div style={{ padding: 12 }}>
            <h3>Stock Cars</h3>
            <p>Turismos potentes y competición americana.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <a href="/products">
          <button>Ver productos</button>
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home con fondo y categorías */}
        <Route
          index
          element={
            <>
              <Home />
              <CategoriesSection />
            </>
          }
        />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}
