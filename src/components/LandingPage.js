import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="background.jpg" alt="background" />
      <h1>Welcome to the Plant Store</h1>
      <p>Your one-stop shop for beautiful plants</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
