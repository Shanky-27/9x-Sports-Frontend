"use client";

export default function ProcessStrip() {
  return (
    <section className="process-strip section-sm">
      <div className="container">

        <div className="process-grid reveal in">

          <div className="process-item">
            <div className="process-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="process-title">100% Authentic</div>
            <p className="process-desc">
              All gear sourced directly from official brand distributors. Every item verified and genuine.
            </p>
          </div>

          <div className="process-item">
            <div className="process-icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="process-title">Express Delivery</div>
            <p className="process-desc">
              24-hour dispatch across major Indian cities. Track your order live via WhatsApp updates.
            </p>
          </div>

          <div className="process-item">
            <div className="process-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
            </div>
            <div className="process-title">Easy Returns</div>
            <p className="process-desc">
              7-day no-questions-asked returns and free size exchanges processed within 48 hours.
            </p>
          </div>

          <div className="process-item">
            <div className="process-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <div className="process-title">Secure Payments</div>
            <p className="process-desc">
              SSL-encrypted checkout. UPI, cards, and COD. Your payment data is never stored.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}