// TarjetaProyecto.jsx
function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      maxWidth: "300px"
    }}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button style={{ padding: "8px 12px", cursor: "pointer" }}>
        {botonTexto}
      </button>
    </div>
  );
}

export default TarjetaProyecto;
