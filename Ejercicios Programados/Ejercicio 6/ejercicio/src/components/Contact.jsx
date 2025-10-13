function Contact() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Contacto</h2>
      <form>
        <div>
          <label>Nombre:</label><br />
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" placeholder="Tu correo" />
        </div>
        <div>
          <label>Mensaje:</label><br />
          <textarea placeholder="Escribí tu mensaje"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
