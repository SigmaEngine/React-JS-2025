// Componente Tarjeta.jsx
const Tarjeta = ({ titulo, descripcion, botonTexto, onClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '250px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button onClick={onClick}>{botonTexto}</button>
    </div>
  );
};

// Ejemplo de uso
function App() {
  return (
    <Tarjeta
      titulo="Oferta especial"
      descripcion="20% de descuento en todos los productos"
      botonTexto="Ver más"
      onClick={() => alert('Hiciste click en Ver más')}
    />
  );
}
