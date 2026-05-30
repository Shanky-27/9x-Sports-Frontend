import ProductCard from "@/src/components/ProductGrid";

const products = [
  {
    id: 1,
    name: "Phantom Elite Studs",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Velocity Runner X",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 3,
    name: "Street Predator Pro",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
  },
];

export default function ProductsPage() {
  return (
    <div className="px-8 lg:px-20 py-20">
      <h1 className="text-5xl font-black mb-10">All Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} />
        ))}
      </div>
    </div>
  );
}