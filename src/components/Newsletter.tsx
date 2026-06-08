"use client";

export default function Newsletter() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-inner">
        
        <div className="reveal in">
          <p className="eyebrow">Stay in the game</p>
          <h2 className="display-md" style={{ marginTop: "10px", color: "var(--c-chrome-hi)" }}>
            Early Access<br />to New Drops
          </h2>
          <p className="body-sm" style={{ marginTop: "16px", maxWidth: "360px" }}>
            Get exclusive deals, first access to limited releases, and football content. No spam, ever.
          </p>
        </div>

        <div className="reveal reveal-delay-1 in">
          <div className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email address"
            />
            <button className="newsletter-submit">Subscribe</button>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.12em",
              color: "var(--c-text3)",
              marginTop: "12px",
            }}
          >
            We respect your privacy. Unsubscribe any time.
          </p>
        </div>

      </div>
    </div>
  );
}