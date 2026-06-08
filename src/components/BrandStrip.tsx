"use client";

export default function BrandStrip() {
  return (
    <div
      className="brand-strip"
      style={{
        background: "var(--c-surface)",
        borderTop: "1px solid var(--c-border)",
        borderBottom: "1px solid var(--c-border)",
      }}
    >
      <div className="container">

        <p
          className="eyebrow"
          style={{ textAlign: "center", marginBottom: "28px" }}
        >
          Official Brand Partners
        </p>

        <div className="brand-strip-inner">
          <span className="brand-logo">Nike</span>
          <span className="brand-logo">Adidas</span>
          <span className="brand-logo">Puma</span>
          <span className="brand-logo">New Balance</span>
          <span className="brand-logo">Umbro</span>
          <span className="brand-logo">Under Armour</span>
        </div>

      </div>
    </div>
  );
}