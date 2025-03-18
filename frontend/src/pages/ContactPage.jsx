import { motion } from 'framer-motion';
import React from 'react';
import '../assets/styles/Contact.css';

const ContactPage = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="contact-hero"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Us</h1>
      </motion.div>

      {/* Contact Information */}
      <motion.section 
        className="contact-info"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Get in Touch</h2>
        <p>
          Have questions or need help? Reach out to our support team, and we’ll be happy to assist you!
        </p>
        <ul>
          <li>📞 <strong>Phone:</strong> +1 234 567 890</li>
          <li>📧 <strong>Email:</strong> support@shopeasy.com</li>
          <li>📍 <strong>Address:</strong> 123 Market Street, New York, USA</li>
          <li>⏰ <strong>Business Hours:</strong> Mon-Sat, 9 AM - 6 PM</li>
        </ul>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="contact-form"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.section>

      {/* Google Map Section */}
      <motion.section 
        className="contact-map"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2>Find Us Here</h2>
        <iframe 
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5617384030814!2d-74.00601568473807!3d40.71277517933088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a179f5f9b5f%3A0x5d8b6f2b8d61cb40!2sNew%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1632681777604!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;
