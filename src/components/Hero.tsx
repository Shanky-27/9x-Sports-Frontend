export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-media">
        <img
          id="hero-img"
          src="/hero.png"
          alt="9X Sports Elite Football Boot"
        />
      </div>
  <div className="hero-overlay"></div>
  <div className="hero-overlay-right"></div>
  <div className="hero-ambient"></div>
  <div className="hero-horizon"></div>
  <div className="hero-content container">
    <div className="hero-eyebrow"><div className="hero-eyebrow-line"></div><span className="eyebrow">India's Premier Football Equipment Store</span></div>
    <div className="hero-title"><h1 className="display-xl"><span className="line-1">Dominate</span><span className="line-2">The Pitch</span></h1></div>
    <p className="body-lg hero-desc">Professional-grade football gear engineered for players who refuse to settle. Authentic products. Unmatched performance.</p>
    <div className="hero-actions">
      <a href="#products-section" className="btn-primary"><span>Shop Collection</span><svg className="btn-arrow" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      <a href="#offers-section" className="btn-ghost">Flash Sale</a>
    </div>
    <div className="hero-stats">
      <div><div className="hero-stat-val">5,000+</div><div className="hero-stat-label">Players equipped</div></div>
      <div><div className="hero-stat-val">98%</div><div className="hero-stat-label">Satisfaction rate</div></div>
      <div><div className="hero-stat-val">24hr</div><div className="hero-stat-label">Express delivery</div></div>
    </div>
  </div>
    </section>
  );
}