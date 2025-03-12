import { motion } from 'framer-motion';
import React from 'react';
import '../assets/styles/about.css';

const AboutPage = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Our eCommerce Platform</h1>
      </motion.div>

      {/* Who We Are */}
      <motion.section 
        className="about-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>ShopEasy</strong>, your go-to destination for a seamless online shopping experience. 
          Our platform is built to provide high-quality products, fast deliveries, and a customer-centric approach. 
          Whether you’re looking for electronics, fashion, home essentials, or beauty products, 
          we bring everything to your fingertips.
        </p>
      </motion.section>

      {/* Our Mission */}
      <motion.section 
        className="about-content"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Our Mission</h2>
        <p>
          At <strong>ShopEasy</strong>, we aim to revolutionize online shopping by making it more accessible, 
          convenient, and trustworthy. Our commitment is to provide:
        </p>
        <ul>
          <li>✅ A wide variety of high-quality products</li>
          <li>✅ Fast and reliable shipping services</li>
          <li>✅ Secure and easy payment methods</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="about-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2>Why Choose Us?</h2>
        <p>
          Our customers are at the heart of everything we do. Here’s why millions trust us:
        </p>
        <ul>
          <li>🛍️ <strong>Wide Product Range</strong> – From electronics to fashion, find everything in one place.</li>
          <li>🚀 <strong>Fast & Secure Delivery</strong> – Get your products delivered quickly with real-time tracking.</li>
          <li>💳 <strong>Multiple Payment Options</strong> – Choose from credit/debit cards, UPI, wallets, and cash on delivery.</li>
          <li>🔒 <strong>100% Secure Transactions</strong> – Your data is safe with our advanced encryption.</li>
        </ul>
      </motion.section>

      {/* Customer Satisfaction */}
      <motion.section 
        className="about-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2>Customer Satisfaction is Our Priority</h2>
        <p>
          With thousands of satisfied customers, we continue to push the boundaries of what’s possible in eCommerce. 
          Your trust is our biggest asset, and we strive every day to improve our services.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
