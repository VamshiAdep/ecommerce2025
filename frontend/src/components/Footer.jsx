import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Back to Top Section */}
      <div style={styles.backToTop}>
        <a href="#top" style={styles.link}>Back to top</a>
      </div>

      {/* Footer Links */}
      <div style={styles.container}>
        <div style={styles.row}>
          {/* Get to Know Us */}
          <div style={styles.column}>
            <h5 style={styles.heading}>Get to Know Us</h5>
            <ul style={styles.list}>
              <li><Link to="/about" style={styles.link}>About Us</Link></li>
              <li><Link to="/careers" style={styles.link}>Careers</Link></li>
              <li><Link to="/press" style={styles.link}>Press Releases</Link></li>
              <li><Link to="/amazon-cares" style={styles.link}>Amazon Cares</Link></li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div style={styles.column}>
            <h5 style={styles.heading}>Connect with Us</h5>
            <ul style={styles.list}>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div style={styles.column}>
            <h5 style={styles.heading}>Make Money with Us</h5>
            <ul style={styles.list}>
              <li><Link to="/sell-on-mern" style={styles.link}>Sell on MERN Shop</Link></li>
              <li><Link to="/affiliate" style={styles.link}>Affiliate Program</Link></li>
              <li><Link to="/advertise" style={styles.link}>Advertise Your Products</Link></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div style={styles.column}>
            <h5 style={styles.heading}>Let Us Help You</h5>
            <ul style={styles.list}>
              <li><Link to="/account" style={styles.link}>Your Account</Link></li>
              <li><Link to="/shipping" style={styles.link}>Shipping Rates</Link></li>
              <li><Link to="/returns" style={styles.link}>Returns & Replacements</Link></li>
              <li><Link to="/customer-service" style={styles.link}>Customer Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={styles.bottomBar}>
        <small>Ecommerce Shop &copy; {currentYear} - All Rights Reserved</small>
      </div>
    </footer>
  );
};

// Styles (Inline CSS)
const styles = {
  footer: {
    backgroundColor: "#232f3e",
    color: "white",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  backToTop: {
    textAlign: "center",
    backgroundColor: "#37475a",
    padding: "10px",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px 10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  column: {
    width: "23%",
    minWidth: "200px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "5px",
  },
  bottomBar: {
    textAlign: "center",
    backgroundColor: "#131a22",
    padding: "15px",
  },
};

export default Footer;
