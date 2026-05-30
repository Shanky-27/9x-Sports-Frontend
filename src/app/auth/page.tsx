export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-white/10 p-10 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-black mb-6">Login</h1>

        <input
          placeholder="Email"
          className="w-full p-3 bg-black border border-white/10 mb-4"
        />

        <input
          placeholder="Password"
          className="w-full p-3 bg-black border border-white/10 mb-6"
        />

        <button className="w-full bg-yellow-400 text-black py-3 font-bold rounded-xl">
          Sign In
        </button>
      </div>
    </div>
  );
}