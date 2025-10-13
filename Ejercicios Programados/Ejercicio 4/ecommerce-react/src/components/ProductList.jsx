function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Productos disponibles</h2>
      {products.map((p) => (
        <div key={p.id}>
          <p>{p.name} - ${p.price}</p>
          <button onClick={() => addToCart(p)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
