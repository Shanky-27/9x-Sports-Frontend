"use client";

export default function MobileNav() {
  const toggleMobileNav = () => {
    const el = document.getElementById("mobileNav");
    if (el) el.classList.toggle("open");
  };

  return (
    <div className="mobile-nav" id="mobileNav">
      <button className="mobile-nav-close" onClick={toggleMobileNav}>
        &#10005;
      </button>

      <a href="#categories-section" onClick={toggleMobileNav}>Shop</a>
      <a href="#products-section" onClick={toggleMobileNav}>New Arrivals</a>
      <a href="#offers-section" onClick={toggleMobileNav}>Offers</a>
      <a href="#reviews-section" onClick={toggleMobileNav}>Reviews</a>
      <a href="#support-section" onClick={toggleMobileNav}>Support</a>
    </div>
  );
}