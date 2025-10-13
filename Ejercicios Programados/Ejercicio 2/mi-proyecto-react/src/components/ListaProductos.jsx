// Componente ListaProductos.jsx
const ListaProductos = ({ productos }) => {
  return (
    <ol>
      {productos.map((producto, index) => (
        <li key={index}>{producto}</li>
      ))}
    </ol>
  );
};

// Ejemplo de uso
const productos = ['Manzanas', 'Peras', 'Naranjas'];

function App() {
  return <ListaProductos productos={productos} />;
}
