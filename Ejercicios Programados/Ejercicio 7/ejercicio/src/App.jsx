import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/carrito"
            element={
              <ProtectedRoute>
                <Carrito />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

