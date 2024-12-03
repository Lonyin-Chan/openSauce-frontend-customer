import React from 'react';
import './Home.css';
import AlertComponent from '../components/Alert';

const Home= () => {
  return (
    <div className="bank-homepage">
      <header className="header">
        <h1>Welcome to Your Trusted Bank</h1>
        <p>Providing financial solutions for your future</p>
      </header>
      <AlertComponent/>
      <section className="hero">
        <h2>Empowering Your Financial Future</h2>
        <p>Explore our range of banking services tailored to your needs.</p>
        <button className="cta-button">Learn More</button>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are a customer-focused bank with a mission to provide exceptional banking services.</p>
      </section>
      <section id="services" className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Personal Banking</li>
          <li>Business Solutions</li>
          <li>Investment Advisory</li>
          <li>Loans and Mortgages</li>
          <li>Online Banking</li>
        </ul>
      </section>
      <section id="testimonials" className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "The customer service here is top-notch! I feel confident managing my finances with their support."
        </blockquote>
        <blockquote>
          "This bank has helped me plan for my future with their investment options and financial planning tools."
        </blockquote>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@yourtrustedbank.com</p>
        <p>Phone: +1 800-123-4567</p>
        <p>Visit us: 123 Bank Street, Cityville</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Your Trusted Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;