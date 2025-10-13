import { useParams } from "react-router-dom";
import { productos } from "../data/productos";

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: Excelente producto para simuladores.</p>
    </div>
  );
}

