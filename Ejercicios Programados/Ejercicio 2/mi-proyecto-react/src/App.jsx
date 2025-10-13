import './App.css'
import ListaProductos from "./components/ListaProductos";
import Tarjeta from "./components/Tarjeta";
import Boton from "./components/Boton";

function App() {
  const productos = ['Manzanas', 'Peras', 'Naranjas'];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Productos</h2>
      <ListaProductos productos={productos} />

      <h2>Tarjeta de Oferta</h2>
      <Tarjeta
        titulo="Oferta especial"
        descripcion="20% de descuento en todos los productos"
        botonTexto="Ver más"
        onClick={() => alert("Hiciste click en Ver más")}
      />

      <h2>Botones de Acciones</h2>
      <Boton texto="Guardar" color="green" onClick={() => alert("Guardado")} />
      <Boton texto="Eliminar" color="red" onClick={() => alert("Eliminado")} />
      <Boton texto="Cancelar" color="gray" onClick={() => alert("Cancelado")} />
    </div>
  );
}

export default App;
