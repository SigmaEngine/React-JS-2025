import { Link } from "react-router-dom";
import { productos } from "../data/productos";

export default function Productos() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="productos-grid">
        {productos.map((p) => (
          <div key={p.id} className="producto-card">
            <h3>{p.nombre}</h3>
            <p>Precio: ${p.precio}</p>
            <Link to={`/productos/${p.id}`} className="btn">Ver Detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}


