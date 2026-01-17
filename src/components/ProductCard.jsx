function ProductCard({ product, addToCart }) {
  return (
    <li>
      <span>{product.name}</span>
      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
