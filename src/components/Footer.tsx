"use client";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">

          <img
            className="footer-logo-img"
            src="/logo.png"
            alt="9X Sports"
          />

          <p>
            India’s premier destination for authentic elite football equipment.
            Empowering players since 2024.
          </p>

          <div className="social-row">
            {/*<a href="#" className="social-link" title="Instagram">IG</a>
            <a href="#" className="social-link" title="Facebook">FB</a>
            <a href="#" className="social-link" title="YouTube">YT</a>
            <a href="#" className="social-link" title="Twitter / X">X</a> */}
          
<a href="#" className="social-link" title="Instagram">
  <FaInstagram />
</a>

<a href="#" className="social-link" title="Facebook">
  <FaFacebookF />
</a>

<a href="#" className="social-link" title="YouTube">
  <FaYoutube />
</a>
          </div>

        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Football Boots</a></li>
            {/* <li><a href="#">Footballs</a></li>
            <li><a href="#">Jerseys & Kits</a></li>
            <li><a href="#">GK Gloves</a></li>
            <li><a href="#">Shin Guards</a></li>
            <li><a href="#">Accessories</a></li> */}
          </ul>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Track Order</a></li>
            {/* <li><a href="#">Returns & Exchanges</a></li> */}
            <li><a href="#">Sizing Guide</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            {/* <li><a href="#">Authenticity Guarantee</a></li>
            <li><a href="#">Brand Partners</a></li>
            <li><a href="#">Careers</a></li> */}
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 9XSPORTS. All rights reserved.</p>
        <p>Designed for champions who demand the best.</p>
      </div>

    </footer>
  );
}