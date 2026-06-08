"use client";

export default function Categories() {
  const filterAndScroll = (type: string) => {
    const el = document.getElementById("products-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="categories" id="categories-section">
      <div className="container section">
        <div className="section-header reveal in">
          <p className="eyebrow">Browse by category</p>
          <h2 className="display-md" style={{ marginTop: 10, color: "var(--c-chrome-hi)" }}>
            Shop the Range
          </h2>
        </div>
      </div>

      <div className="cat-grid reveal in">

        <div className="cat-item" onClick={() => filterAndScroll("boots")}>
          <img id="cat-img-1" src="/hero.png" alt="Football Boots" loading="lazy" />
          <div className="cat-item-content">
            <div className="cat-item-name">Speed FG</div>
            <div className="cat-item-count">9X Elite Collection</div>
          </div>
        </div>

        <div className="cat-item" onClick={() => filterAndScroll("boots")}>
          <img id="cat-img-2" src="/hero.png" alt="Football Boots" loading="lazy" />
          <div className="cat-item-content">
            <div className="cat-item-name">HyperFast</div>
            <div className="cat-item-count">9X Speed Series</div>
          </div>
        </div>

        <div className="cat-item" onClick={() => filterAndScroll("boots")}>
          <img id="cat-img-3" src="/hero.png" alt="Boots" loading="lazy" />
          <div className="cat-item-content">
            <div className="cat-item-name">HX V1</div>
            <div className="cat-item-count">9X Hyperfast Series</div>
          </div>
        </div>

        <div className="cat-item" onClick={() => filterAndScroll("boots")}>
          <img id="cat-img-4" src="/hero.png" alt="Boot Detail" loading="lazy" />
          <div className="cat-item-content">
            <div className="cat-item-name">HX V1 Rear</div>
            <div className="cat-item-count">Back View Collection</div>
          </div>
        </div>

        <div className="cat-item" onClick={() => filterAndScroll("accessories")}>
          <img id="cat-img-5" src="/hero.png" alt="Boot Side" loading="lazy" />
          <div className="cat-item-content">
            <div className="cat-item-name">Speed FG</div>
            <div className="cat-item-count">Pink & Chrome</div>
          </div>
        </div>

        <div className="cat-item" onClick={() => filterAndScroll("accessories")}>
          <img id="cat-img-6" src="/hero.png" alt="Boot Sole" loading="lazy" />
          <div className="cat-item-content">
            <div className="cat-item-name">Traction X</div>
            <div className="cat-item-count">Chrome Sole Series</div>
          </div>
        </div>

      </div>
    </section>
  );
}