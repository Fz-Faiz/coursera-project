import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart) || []; // Fallback to empty array
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Plantify</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          <span>{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
