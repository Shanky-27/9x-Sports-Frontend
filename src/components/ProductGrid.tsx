import AddToCartButton from "./AddToCartButton";

const products = [
  { id: 1, name: "Phantom Elite", price: "₹3499" },
  { id: 2, name: "Velocity Runner", price: "₹4999" },
  { id: 3, name: "Street Predator", price: "₹2999" },
];

export default function ProductGrid() {
  return (
    <section className="px-8 lg:px-20 py-20">
      <h2 className="text-4xl font-black mb-10">Best Sellers</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="border border-white/10 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-yellow-400 text-2xl my-4">{p.price}</p>

            <AddToCartButton />
          </div>
        ))}
      </div>
    </section>
  );
}