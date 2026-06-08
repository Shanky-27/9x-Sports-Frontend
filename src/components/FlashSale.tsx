"use client";

export default function FlashSale() {

function copyCode() {
  navigator.clipboard?.writeText("9XELITE").catch(() => {});

  const btn = document.querySelector(".promo-copy-btn");

  if (!btn) return;

  btn.textContent = "✓ Copied!";

  setTimeout(() => {
    btn.textContent = "Copy Code";
  }, 2000);
}

  return (
    <section className="flash-section" id="offers-section">
      <div className="container">

        <div className="flash-card reveal in">

          {/* LEFT */}
          <div className="flash-left">

            <div className="flash-eyebrow">
              <span className="tag tag-red">● Live Sale</span>
            </div>

            <h2 className="flash-title">
              Up to <span>40%</span><br />Off Boots
            </h2>

            <p className="flash-desc">
              For a limited time, grab premium 9X Sports boots at our biggest discount of the season.
            </p>

            <div className="promo-display">
              <div className="promo-code-val">9XELITE</div>

              <button className="promo-copy-btn" onClick={copyCode}>
                Copy Code
              </button>
            </div>

            <a href="#products-section" className="btn-primary">
              <span>Shop Sale</span>
              <svg className="btn-arrow" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

          </div>

          {/* RIGHT */}
          <div className="flash-right">

            <p className="flash-small" style={{ marginBottom: "12px" }}>
              Sale ends in
            </p>

            <div className="countdown-grid">
              <div className="cd-block">
                <div className="cd-num" id="cd-h">08</div>
                <div className="cd-label">HRS</div>
              </div>

              <div className="cd-block">
                <div className="cd-num" id="cd-m">43</div>
                <div className="cd-label">MIN</div>
              </div>

              <div className="cd-block">
                <div className="cd-num" id="cd-s">21</div>
                <div className="cd-label">SEC</div>
              </div>
            </div>

            <p className="flash-small" style={{ marginTop: "16px", textAlign: "center" }}>
              *Selected items. T&C apply.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}