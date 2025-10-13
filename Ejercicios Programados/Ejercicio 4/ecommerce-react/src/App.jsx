import { useState } from "react";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header />
      <Nav />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
      <Footer />
    </>
  );
}

export default App;
