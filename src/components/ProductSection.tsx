"use client";

import { useState } from "react";
const PRODUCTS = [
  {
    id: 1,
    name: "9X Speed FG Elite",
    brand: "9XSPORTS",
    price: "&#8377;8,999",
    orig: "&#8377;14,999",
    off: "40% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
    reviews: 128,
    badge: "best-seller",
    badgeType: "tag-gold",
    category: "boots",
    imgKey: "prod1",
  },
  {
    id: 2,
    name: "9X Speed FG Pro",
    brand: "9XSPORTS",
    price: "&#8377;9,499",
    orig: "&#8377;15,999",
    off: "41% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
    reviews: 94,
    badge: "new arrival",
    badgeType: "tag-blue",
    category: "boots",
    imgKey: "prod2",
  },
  {
    id: 3,
    name: "9X HyperFast HX V1",
    brand: "9XSPORTS",
    price: "&#8377;11,999",
    orig: "&#8377;18,999",
    off: "37% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
    reviews: 210,
    badge: "best-seller",
    badgeType: "tag-gold",
    category: "boots",
    imgKey: "prod3",
  },
  {
    id: 4,
    name: "9X HX V1 Pink Edition",
    brand: "9XSPORTS",
    price: "&#8377;10,499",
    orig: "&#8377;16,999",
    off: "38% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
    reviews: 347,
    badge: "limited",
    badgeType: "tag-red",
    category: "boots",
    imgKey: "prod4",
  },
  {
    id: 5,
    name: "9X Speed FG Back View",
    brand: "9XSPORTS",
    price: "&#8377;8,999",
    orig: "&#8377;13,999",
    off: "36% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9738;",
    reviews: 76,
    badge: "new arrival",
    badgeType: "tag-blue",
    category: "boots",
    imgKey: "prod5",
  },
  {
    id: 6,
    name: "9X Chrome Sole X",
    brand: "9XSPORTS",
    price: "&#8377;3,299",
    orig: "&#8377;4,999",
    off: "34% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
    reviews: 55,
    badge: "new arrival",
    badgeType: "tag-blue",
    category: "accessories",
    imgKey: "prod6",
  },
  {
    id: 7,
    name: "9X HX V1 Speed Shot",
    brand: "9XSPORTS",
    price: "&#8377;11,499",
    orig: "&#8377;17,999",
    off: "36% off",
    stars: "&#9733;&#9733;&#9733;&#9734;&#9734;",
    reviews: 88,
    badge: "best-seller",
    badgeType: "tag-gold",
    category: "boots",
    imgKey: "prod1",
  },
  {
    id: 8,
    name: "9X Speed FG Pair",
    brand: "9XSPORTS",
    price: "&#8377;7,499",
    orig: "&#8377;11,999",
    off: "38% off",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
    reviews: 62,
    badge: "limited",
    badgeType: "tag-red",
    category: "boots",
    imgKey: "prod2",
  },
];

const IMG: Record<string, string> = {
  prod1: "/hero.png",
  prod2: "/hero.png",
  prod3: "/hero.png",
  prod4: "/hero.png",
  prod5: "/hero.png",
  prod6: "/hero.png",
};
export default function ProductSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  const filterProducts = (cat: string) => {
    setActiveFilter(cat);
  };

  return (
    <section
      className="section"
      id="products-section"
      style={{ background: "var(--c-surface)" }}
    >
      <div className="container">
        <div className="section-header-flex reveal in">
          <div>
            <p className="eyebrow">Featured Collection</p>

            <h2
              className="display-md"
              style={{
                marginTop: 10,
                color: "var(--c-chrome-hi)",
              }}
            >
              Elite Arsenal
            </h2>
          </div>

          <div>
            <div
              id="product-filters"
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <button
                className={
                  activeFilter === "all"
                    ? "tag tag-blue active-filter"
                    : "tag"
                }
                style={
                  activeFilter === "all"
                    ? {
                        cursor: "pointer",
                        padding: "8px 16px",
                      }
                    : {
                        cursor: "pointer",
                        padding: "8px 16px",
                        background: "transparent",
                        color: "var(--c-text2)",
                        border: "1px solid var(--c-border)",
                      }
                }
                onClick={() => filterProducts("all")}
              >
                All
              </button>

              <button
                className={
                  activeFilter === "boots"
                    ? "tag tag-blue active-filter"
                    : "tag"
                }
                style={
                  activeFilter === "boots"
                    ? {
                        cursor: "pointer",
                        padding: "8px 16px",
                      }
                    : {
                        cursor: "pointer",
                        padding: "8px 16px",
                        background: "transparent",
                        color: "var(--c-text2)",
                        border: "1px solid var(--c-border)",
                      }
                }
                onClick={() => filterProducts("boots")}
              >
                Boots
              </button>

              <button
                className={
                  activeFilter === "balls"
                    ? "tag tag-blue active-filter"
                    : "tag"
                }
                style={
                  activeFilter === "balls"
                    ? {
                        cursor: "pointer",
                        padding: "8px 16px",
                      }
                    : {
                        cursor: "pointer",
                        padding: "8px 16px",
                        background: "transparent",
                        color: "var(--c-text2)",
                        border: "1px solid var(--c-border)",
                      }
                }
                onClick={() => filterProducts("balls")}
              >
                Balls
              </button>

              <button
                className={
                  activeFilter === "jerseys"
                    ? "tag tag-blue active-filter"
                    : "tag"
                }
                style={
                  activeFilter === "jerseys"
                    ? {
                        cursor: "pointer",
                        padding: "8px 16px",
                      }
                    : {
                        cursor: "pointer",
                        padding: "8px 16px",
                        background: "transparent",
                        color: "var(--c-text2)",
                        border: "1px solid var(--c-border)",
                      }
                }
                onClick={() => filterProducts("jerseys")}
              >
                Jerseys
              </button>

              <button
                className={
                  activeFilter === "gloves"
                    ? "tag tag-blue active-filter"
                    : "tag"
                }
                style={
                  activeFilter === "gloves"
                    ? {
                        cursor: "pointer",
                        padding: "8px 16px",
                      }
                    : {
                        cursor: "pointer",
                        padding: "8px 16px",
                        background: "transparent",
                        color: "var(--c-text2)",
                        border: "1px solid var(--c-border)",
                      }
                }
                onClick={() => filterProducts("gloves")}
              >
                Gloves
              </button>
            </div>
          </div>
        </div>

       {/* PRODUCTS GRID (renderProducts converted) */}
        <div className="products-grid reveal in" id="products-grid">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="product-card"
            >
              <div className="product-image">
                <div className="product-badge">
                  <span className={`tag ${p.badgeType}`}>
                    {p.badge}
                  </span>
                </div>

                <img
                  src={IMG[p.imgKey]}
                  alt={p.name}
                  loading="lazy"
                />

                <div className="product-quick">
                  <button
                    className="product-quick-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Add to cart", p.id);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="product-info">
                <div className="product-brand">
                  {p.brand}
                </div>

                <div className="product-name">
                  {p.name}
                </div>

                <div className="product-rating">
                  <span
                    className="stars"
                    dangerouslySetInnerHTML={{
                      __html: p.stars,
                    }}
                  />
                  <span className="rating-count">
                    ({p.reviews})
                  </span>
                </div>

                <div className="product-pricing">
                  <span
                    className="price-now"
                    dangerouslySetInnerHTML={{
                      __html: p.price,
                    }}
                  />
                  <span
                    className="price-was"
                    dangerouslySetInnerHTML={{
                      __html: p.orig,
                    }}
                  />
                  <span className="price-off">
                    {p.off}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}