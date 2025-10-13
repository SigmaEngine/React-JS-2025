import EquipoTalentoLab from "./components/EquipoTalentoLab";
import TarjetaProyecto from "./components/TarjetaProyecto";
import './App.css'

function App() {
  const equipo = [
  { nombre: "Silvia", rol: "Product Owner", imagen: "https://via.placeholder.com/100" },
  { nombre: "Luis", rol: "Diseñador UX/UI", imagen: "https://via.placeholder.com/100" },
  { nombre: "Matías", rol: "Desarrollador", imagen: "https://via.placeholder.com/100" },
  { nombre: "Sabrina", rol: "Desarrolladora", imagen: "https://via.placeholder.com/100" },
];
  return (
    <div>
      <h1>Equipo Talento Lab</h1>
      <EquipoTalentoLab equipo={equipo} />

      <h1>Proyecto Destacado</h1>
      <TarjetaProyecto 
        titulo="Plataforma de Gestión" 
        descripcion="Una herramienta para optimizar la gestión de equipos." 
        botonTexto="Explorar proyecto" 
      />
    </div>
  );
}

export default App;
