import { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />
      )}

      <Cart cart={cart} />
    </div>
  );
}

export default App;
