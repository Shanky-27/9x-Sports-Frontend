"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
      
      <div className="font-black text-2xl tracking-widest">
        9XSPORTS
      </div>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tracking">Tracking</Link>
        <Link href="/auth">Login</Link>
      </div>

      <div className="flex gap-5">
        <ShoppingCart />
        <User />
      </div>
    </nav>
  );
}