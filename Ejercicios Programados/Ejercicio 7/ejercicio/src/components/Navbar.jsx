import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Inicio</Link> | <Link to="/productos">Productos</Link> |{" "}
      <Link to="/carrito">Carrito</Link> | <Link to="/admin">Admin</Link> |{" "}
      <Link to="/login">Login</Link>
      {isAuthenticated && (
        <>
          {" "}
          | <button onClick={logout} style={{ cursor: "pointer" }}>Salir</button>
        </>
      )}
    </nav>
  );
}

