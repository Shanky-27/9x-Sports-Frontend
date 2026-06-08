"use client";

export default function Testimonials() {
  return (
    <section className="testimonials section" id="reviews-section">
      <div className="container">

        <div className="section-header reveal in">
          <p className="eyebrow">Verified reviews</p>
          <h2
            className="display-md"
            style={{ marginTop: "10px", color: "var(--c-chrome-hi)" }}
          >
            What Players Say
          </h2>
        </div>

        <div className="testimonials-grid reveal in">

          {/* CARD 1 */}
          <div className="testimonial-card">
            <div className="t-rating">★★★★★</div>

            <p className="t-text">
              Absolutely world-class boots. The quality rivals anything from Europe.
              Delivery was faster than expected. 9XSPORTS is the only place I shop now.
            </p>

            <div className="t-author">
              <div className="t-avatar-placeholder">R</div>
              <div>
                <div className="t-name">Rohan Sharma</div>
                <div className="t-role">Amateur Striker · Mumbai</div>
              </div>
              <span className="t-verified">✓ Verified</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="testimonial-card">
            <div className="t-rating">★★★★★</div>

            <p className="t-text">
              Got goalkeeper gloves for my son’s academy tryouts. Premium grip and quality.
              Packaging also feels top tier. Will order again.
            </p>

            <div className="t-author">
              <div
                className="t-avatar-placeholder"
                style={{
                  background: "rgba(154,61,232,0.12)",
                  borderColor: "rgba(154,61,232,0.22)",
                  color: "#c47fff",
                }}
              >
                A
              </div>

              <div>
                <div className="t-name">Arjun Mehta</div>
                <div className="t-role">Football Parent · Delhi</div>
              </div>

              <span className="t-verified">✓ Verified</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="testimonial-card">
            <div className="t-rating">★★★★★</div>

            <p className="t-text">
              India jersey arrived in just 12 hours. Fabric quality is premium and authentic.
              Best online football store experience so far.
            </p>

            <div className="t-author">
              <div
                className="t-avatar-placeholder"
                style={{
                  background: "rgba(200,169,110,0.1)",
                  borderColor: "rgba(200,169,110,0.2)",
                  color: "var(--c-gold)",
                }}
              >
                P
              </div>

              <div>
                <div className="t-name">Priya Singh</div>
                <div className="t-role">Club Player · Bengaluru</div>
              </div>

              <span className="t-verified">✓ Verified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}