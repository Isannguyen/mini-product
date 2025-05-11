import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to AnNguyen Store</h1>
          <p>Your one-stop shop for the best products.</p>
          <Link className="cta-button" to="/products">Shop Now</Link>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src="https://media.istockphoto.com/id/1924543698/photo/male-sales-assistant-or-customer-sorting-and-looking-at-jeans-in-fashion-store.jpg?s=612x612&w=0&k=20&c=qLyVM-B2lDbdhQa6CwqTAmRAA0CcSxYjfkjdUfDLzyQ=" alt="Clothes" />
            <p>Clothes</p>
          </div>

          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Yi9lZgLUu8ZPoBCW_MIGnJTKYKS14DaV4w&s" alt="Jeweleries" />
            <p>Jeweleries</p>
          </div>
          
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5inERhmsOp_LfY1x1mf9-p0YYoGm1Kh1hYw&s" alt="Electronics" />
            <p>Electrnoics</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>At AnNguyen Store, we offer the best products for your daily needs. Whether you're shopping for electronics, clothes, or accessories, we have something for everyone.</p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  );
};

export default HomePage;
