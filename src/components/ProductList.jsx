import ProductCard from "./ProductCard";

/* 🔥 REQUIRED BY TESTS */
export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
];

function ProductList({ products, addToCart }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
}

export default ProductList;
