// EquipoTalentoLab.jsx
function EquipoTalentoLab({ equipo }) {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {equipo.map((miembro, index) => (
        <div 
          key={index} 
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "8px",
            textAlign: "center",
            width: "150px"
          }}
        >
          <img 
            src={miembro.imagen} 
            alt={miembro.nombre} 
            style={{ borderRadius: "50%" }} 
          />
          <h3>{miembro.nombre}</h3>
          <p>{miembro.rol}</p>
        </div>
      ))}
    </div>
  );
}

export default EquipoTalentoLab;
