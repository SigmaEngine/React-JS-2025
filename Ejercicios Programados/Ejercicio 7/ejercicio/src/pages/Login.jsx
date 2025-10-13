import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      {isAuthenticated ? (
        <>
          <p>Sesión iniciada ✅</p>
          <button onClick={logout} className="btn">Cerrar sesión</button>
        </>
      ) : (
        <>
          <p>No estás autenticado.</p>
          <button onClick={login} className="btn">Iniciar sesión</button>
        </>
      )}
    </div>
  );
}
