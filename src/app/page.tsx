'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, User } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Phantom Elite Studs',
    price: '₹3,499',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Velocity Runner X',
    price: '₹4,999',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Street Predator Pro',
    price: '₹2,999',
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-24 h-auto object-contain"
          />

          <h1 className="text-3xl font-black tracking-widest">
            9XSPORTS
          </h1>
        </div>

        <div className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Founders</a>
        </div>

        <div className="flex gap-5">
          <ShoppingCart />
          <User />
        </div>
      </nav>

      {/* Hero */}
      <section className="grid lg:grid-cols-2 items-center px-8 lg:px-20 py-24 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="uppercase tracking-[8px] text-yellow-400 mb-5">
            Elite Sportswear
          </p>

          <h1 className="text-7xl lg:text-8xl font-black leading-none mb-8">
            DOMINATE
            <br />
            EVERY
            <br />
            GAME.
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-10 max-w-xl">
            Premium sports shoes, football studs and athletic gear
            built for champions.
          </p>

          <div className="flex gap-5 flex-wrap">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold">
              SHOP NOW
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full">
              EXPLORE
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-yellow-400 blur-[140px] opacity-20 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
            alt="shoe"
            className="relative w-full"
          />
        </motion.div>
      </section>

      {/* Products */}
      <section className="px-8 lg:px-20 py-24">
        <div className="mb-14">
          <p className="uppercase tracking-[5px] text-yellow-400 mb-3">
            Trending Collection
          </p>

          <h2 className="text-5xl font-black">
            BEST SELLERS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={product.id}
              className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">
                  {product.name}
                </h3>

                <p className="text-yellow-400 text-3xl font-black mb-6">
                  {product.price}
                </p>

                <button className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold">
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}