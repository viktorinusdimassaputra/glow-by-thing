"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import Reveal from "@/components/animations/Reveal";
import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.id === slug);
  
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"ingredients" | "howToUse">("ingredients");

  if (!product) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center bg-transparent">
        <h1 className="text-3xl font-serif text-white mb-4">Product Not Found</h1>
        <Link href="/shop" className="underline hover:text-white/70">Return to Boutique</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link href="/shop" className="inline-flex items-center text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Boutique
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          <Reveal className="aspect-[3/4] bg-white/5 sticky top-32 overflow-hidden shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col pt-4 md:pt-12">
            <span className="text-xs tracking-widest uppercase text-white/70 mb-4">{product.category}</span>
            <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">{product.name}</h1>
            <p className="text-xl text-white/70 mb-8">{product.formattedPrice}</p>
            
            <p className="text-white/70 font-light leading-relaxed mb-12">
              {product.description}
            </p>

            <button
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="w-full py-5 uppercase tracking-widest text-sm mb-16"
              style={{ background: 'var(--color-accent-coral)', color: '#0b1220' }}
            >
              Add To Bag
            </button>

            {/* Accordion / Tabs */}
            <div className="border-t hairline pt-8">
              <div className="flex space-x-8 mb-6">
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`uppercase tracking-widest text-xs pb-2 border-b transition-colors ${activeTab === 'ingredients' ? 'border-[var(--color-gold)] text-white' : 'border-transparent text-white/70 hover:text-white'}`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab("howToUse")}
                  className={`uppercase tracking-widest text-xs pb-2 border-b transition-colors ${activeTab === 'howToUse' ? 'border-[var(--color-gold)] text-white' : 'border-transparent text-white/70 hover:text-white'}`}
                >
                  How To Use
                </button>
              </div>
              <div className="min-h-[100px]">
                {activeTab === "ingredients" ? (
                  <p className="font-light text-white/70 text-sm leading-relaxed">{product.ingredients}</p>
                ) : (
                  <p className="font-light text-white/70 text-sm leading-relaxed">{product.howToUse}</p>
                )}
              </div>
            </div>

          </Reveal>
        </div>
      </div>
    </main>
  );
}
