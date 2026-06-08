"use client";

const toggleFaq = (el: HTMLButtonElement) => {
  const item = el.parentElement;
  if (!item) return;
  item.classList.toggle("open");
};

export default function FAQ() {
  return (
    <section className="faq-section section" id="support-section">
      <div className="container">
        
        <div className="section-header reveal in">
          <p className="eyebrow">Support</p>
          <h2
            className="display-md"
            style={{ marginTop: "10px", color: "var(--c-chrome-hi)" }}
          >
            Help Centre
          </h2>
        </div>

        <div className="faq-grid">

          <div className="faq-list reveal in">

            <div className="faq-item">
              <button className="faq-question" onClick={(e) => toggleFaq(e.currentTarget)}>
                How long does delivery take?
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                Express 24-hour delivery is available across major Indian cities. For other locations, expect 2–3 business days. All orders placed before 3PM are dispatched the same day.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={(e) => toggleFaq(e.currentTarget)}>
                Are all products 100% authentic?
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                Yes, absolutely. Every product is sourced directly from official distributors with verified partnerships.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={(e) => toggleFaq(e.currentTarget)}>
                What is the return & exchange policy?
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                7-day return policy for unused items. Free size exchanges within 48 hours.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={(e) => toggleFaq(e.currentTarget)}>
                How do I track my order?
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                You get WhatsApp tracking link after dispatch. You can also check My Account.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={(e) => toggleFaq(e.currentTarget)}>
                Is Cash on Delivery available?
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                Yes, COD available up to ₹5000 across India.
              </div>
            </div>

          </div>

          <div className="faq-contact-card reveal reveal-delay-2 in">
            <p className="eyebrow">Get in touch</p>
            <h3>Still need help?</h3>

            <p className="body-sm" style={{ marginTop: "8px" }}>
              Support team available 7 days a week, 9AM–9PM IST.
            </p>

            <div className="contact-options">

              <div className="contact-option">
                <div className="contact-icon">💬</div>
                <div>
                  <div className="contact-label">WhatsApp</div>
                  <div className="contact-sub">Fastest response</div>
                </div>
              </div>

              <div className="contact-option">
                <div className="contact-icon">📧</div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-sub">support@9xsports.in</div>
                </div>
              </div>

              <div className="contact-option">
                <div className="contact-icon">📸</div>
                <div>
                  <div className="contact-label">Instagram</div>
                  <div className="contact-sub">@9xsportsofficial</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}