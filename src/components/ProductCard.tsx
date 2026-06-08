import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="group bg-[#090d14]">
      <div className="relative overflow-hidden">
        <Image
          src="/product1.jpg"
          alt=""
          width={500}
          height={600}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button className="absolute bottom-4 left-4 right-4 translate-y-20 bg-gradient-to-r from-blue-600 to-purple-600 py-3 uppercase transition group-hover:translate-y-0">
          Quick Add
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Nike
        </p>

        <h3 className="mt-2 text-2xl font-bold uppercase">
          Mercurial Elite
        </h3>

        <div className="mt-3 flex gap-3">
          <span className="text-3xl font-black">₹7,999</span>
          <span className="text-gray-500 line-through">
            ₹9,999
          </span>
        </div>
      </div>
    </div>
  );
}