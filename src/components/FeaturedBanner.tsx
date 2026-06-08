"use client";

export default function FeaturedBanner() {
  return (
    <section className="section-sm reveal in">
      <div className="feat-banner">

        <img
          id="feat-img"
          src="/hero.png"
          alt="9X Sports Speed Collection"
          loading="lazy"
        />

        <div className="feat-banner-overlay"></div>
        <div className="feat-banner-glow"></div>

        <div className="feat-banner-content">
          <p className="eyebrow">New Season — 2025</p>

          <h2 className="feat-banner-title">
            The <em>New</em><br />
            Season<br />
            Collection
          </h2>

          <p className="body-sm" style={{ marginBottom: 24, maxWidth: 340 }}>
            Engineered for speed. Designed to dominate. The next generation of Indian football starts here.
          </p>

          <a href="#products-section" className="btn-primary">
            <span>Explore Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}