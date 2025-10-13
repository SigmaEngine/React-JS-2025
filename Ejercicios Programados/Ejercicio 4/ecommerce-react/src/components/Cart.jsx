function Cart({ cart, emptyCart }) {
  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos seleccionados</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <p key={index}>{item.name} - ${item.price}</p>
          ))}
          <button onClick={emptyCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
}
export default Cart;
