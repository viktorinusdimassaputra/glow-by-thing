"use client";

import Reveal from "@/components/animations/Reveal";
import { products } from "@/lib/data";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen py-32 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-24 border-b hairline pb-8">
          <div>
            <h1 className="text-5xl font-serif text-white">The Collection</h1>
          </div>
          <p className="text-white/70 font-light mt-4 md:mt-0 uppercase tracking-widest text-xs">Curated Excellence</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.1} className="group flex flex-col">
              <Link href={`/shop/${product.id}`} className="aspect-[3/4] bg-white/5 overflow-hidden relative mb-6">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest bg-black text-white px-3 py-1">
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
              </Link>
              
              <div className="flex-1 flex flex-col">
                <span className="text-[10px] text-white/70 uppercase tracking-widest mb-2">{product.category}</span>
                <Link href={`/shop/${product.id}`}>
                  <h4 className="font-serif text-lg text-white leading-tight mb-2 group-hover:underline decoration-1 underline-offset-4">{product.name}</h4>
                </Link>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <span className="text-white/70">{product.formattedPrice}</span>
                  <button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    className="text-xs uppercase tracking-widest border-b hairline pb-1 hover:text-white hover:border-white/20 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
