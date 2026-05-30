export default function AboutPage() {
  return (
    <div className="px-8 lg:px-20 py-20">
      
      <h1 className="text-5xl font-black mb-10">About 9X Sports</h1>

      <p className="text-gray-400 leading-8 max-w-3xl">
        9X Sports Private Limited is an Indian sports innovation company focused
        on building high-performance athletic gear for modern athletes.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="border border-white/10 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Founder</h2>
          <p className="text-gray-400 mt-4">Your Name Here</p>
        </div>

        <div className="border border-white/10 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Co-Founder</h2>
          <p className="text-gray-400 mt-4">Partner Name Here</p>
        </div>
      </div>
    </div>
  );
}