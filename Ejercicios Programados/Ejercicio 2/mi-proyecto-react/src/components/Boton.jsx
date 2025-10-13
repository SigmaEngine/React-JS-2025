// Componente Boton.jsx
const Boton = ({ texto, onClick, color = "blue" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {texto}
    </button>
  );
};
function App() {
  return (
    <div>
      <Boton texto="Guardar" color="green" onClick={() => alert('Guardado')} />
      <Boton texto="Eliminar" color="red" onClick={() => alert('Eliminado')} />
      <Boton texto="Cancelar" color="gray" onClick={() => alert('Cancelado')} />
    </div>
  );
}

