export default function Features() {
  const features = [
    "Fast Delivery",
    "Secure Payments",
    "Premium Quality",
    "24/7 Support",
  ];

  return (
    <section className="bg-[#090d14] py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 border border-white/10">
        {features.map((item) => (
          <div
            key={item}
            className="border-r border-white/10 p-10"
          >
            <h3 className="text-2xl font-bold uppercase">
              {item}
            </h3>

            <p className="mt-3 text-gray-400">
              Premium shopping experience.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}