export default function TrackingPage() {
  return (
    <div className="px-8 lg:px-20 py-20">
      <h1 className="text-4xl font-black mb-6">Order Tracking</h1>

      <input
        placeholder="Enter Order ID"
        className="p-3 border border-white/10 bg-black w-full max-w-md"
      />

      <button className="mt-5 bg-yellow-400 text-black px-6 py-3 font-bold">
        Track Order
      </button>
    </div>
  );
}