"use client";

export default function DualBanners() {
  return (
    <section className="section-sm reveal in">
      <div className="dual-banners">

        <div className="mini-banner">
          <img
            id="mini-banner-1"
            src="/hero.png"
            alt="9X Speed FG"
            loading="lazy"
          />

          <div className="mini-banner-overlay"></div>

          <div className="mini-banner-content">
            <p className="eyebrow">Limited Stock</p>
            <h3 className="mini-banner-name">
              Speed FG<br />Collection
            </h3>

            <a href="#products-section" className="mini-banner-link">
              Shop Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mini-banner">
          <img
            id="mini-banner-2"
            src="/hero.png"
            alt="9X HyperFast"
            loading="lazy"
          />

          <div className="mini-banner-overlay"></div>

          <div className="mini-banner-content">
            <p className="eyebrow">New Arrivals</p>
            <h3 className="mini-banner-name">
              HyperFast<br />HX Series
            </h3>

            <a href="#products-section" className="mini-banner-link">
              Shop Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}