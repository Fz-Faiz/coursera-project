import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, setQuantity } from '../redux/cartSlice.js';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(setQuantity({ id: product.id, quantity: product.quantity + 1 }));
  };

  const handleDecrease = (product) => {
    dispatch(setQuantity({ id: product.id, quantity: product.quantity - 1 }));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => handleIncrease(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleDecrease(item)}>-</button>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default ShoppingCartPage;
