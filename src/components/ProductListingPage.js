import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)} disabled={product.quantity > 0}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
