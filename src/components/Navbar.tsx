"use client";

import Link from "next/link";

export default function Navbar() {
  const toggleMobileNav = () => {
    const el = document.getElementById("mobileNav");
    if (el) el.classList.toggle("open");
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-inner">

        {/* Logo */}
        <a href="#">
          <img className="nav-logo-img" alt="Logo" src="/logo.png" />
        </a>

        {/* Links */}
        <ul className="nav-links">
          <li><Link href="#categories-section">Shop</Link></li>
          <li><Link href="#products-section">New Arrivals</Link></li>
          <li><Link href="#offers-section">Offers</Link></li>
          <li><Link href="#reviews-section">Reviews</Link></li>
          <li><Link href="#support-section">Support</Link></li>
        </ul>

        {/* Right buttons */}
        <div className="nav-right">

        <button className="nav-btn" title="Search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></button>
     

          <button className="nav-btn" title="Wishlist">
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>

          <button
            className="nav-btn"
            title="Cart"
            style={{ position: "relative" }}
          >
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>

            <span className="cart-count" id="cart-count">0</span>
          </button>

          <button className="btn-cta-sm">Sign In</button>

          {/* FIX: function reference (NO BUG NOW) */}
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={toggleMobileNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </nav>
  );
}