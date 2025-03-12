import React from "react";

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
          <div style={styles.column}>
            <h5 style={styles.heading}>Get to Know Us</h5>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>About Us</a></li>
              <li><a href="#" style={styles.link}>Careers</a></li>
              <li><a href="#" style={styles.link}>Press Releases</a></li>
              <li><a href="#" style={styles.link}>Amazon Cares</a></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h5 style={styles.heading}>Connect with Us</h5>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Facebook</a></li>
              <li><a href="#" style={styles.link}>Twitter</a></li>
              <li><a href="#" style={styles.link}>Instagram</a></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h5 style={styles.heading}>Make Money with Us</h5>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Sell on MERN Shop</a></li>
              <li><a href="#" style={styles.link}>Affiliate Program</a></li>
              <li><a href="#" style={styles.link}>Advertise Your Products</a></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h5 style={styles.heading}>Let Us Help You</h5>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Your Account</a></li>
              <li><a href="#" style={styles.link}>Shipping Rates</a></li>
              <li><a href="#" style={styles.link}>Returns & Replacements</a></li>
              <li><a href="#" style={styles.link}>Customer Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={styles.bottomBar}>
        <small>MERN Shop &copy; {currentYear} - All Rights Reserved</small>
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
