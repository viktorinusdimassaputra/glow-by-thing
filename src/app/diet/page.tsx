"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { dietRecipes } from "@/lib/dietData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner", "Beverage", "Snacks"];
const ITEMS_PER_PAGE = 6;

export default function Diet() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Simulate network fetching when filter or page changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeCategory, currentPage]);

  // Derived state
  const filteredRecipes = activeCategory === "All" 
    ? dietRecipes 
    : dietRecipes.filter(r => r.type === activeCategory);
    
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset pagination on filter
  };

  return (
    <main className="min-h-screen py-32 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 border-b hairline pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/70 mb-4 block">Holistic Nutrition</span>
            <h1 className="text-4xl md:text-5xl font-serif text-white">Inner Glow Diet</h1>
          </div>
          <p className="text-white/70 font-light mt-4 md:mt-0 text-sm max-w-sm text-right">
            Nourish your skin from the inside out with our antioxidant-rich, anti-inflammatory meal protocols.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1} className="mb-12 flex flex-wrap gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest border hairline transition-colors ${
                  activeCategory === cat 
                    ? "bg-[var(--color-brown)] text-white border-[var(--color-brown)]" 
                    : "bg-transparent text-white/70 hover:border-white/20 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Grid / Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 min-h-[600px]">
          {loading ? (
            // Skeleton Loaders
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white/5 border hairline p-4 animate-pulse">
                <div className="w-full h-56 bg-black/10 mb-6"></div>
                <div className="w-1/3 h-3 bg-black/10 mb-4"></div>
                <div className="w-3/4 h-6 bg-black/10 mb-4"></div>
                <div className="w-full h-16 bg-black/10"></div>
              </div>
            ))
          ) : currentItems.length > 0 ? (
            currentItems.map((recipe, idx) => (
              <Reveal key={recipe.id} delay={idx * 0.1}>
                <Link href={`/diet/${recipe.id}`} className="group block bg-white/5 border hairline p-4 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                  <div className="w-full h-56 overflow-hidden mb-6 relative">
                     <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest bg-white/5 text-white px-3 py-1 shadow-sm">
                      {recipe.type}
                    </span>
                    <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-3 group-hover:underline decoration-1 underline-offset-4">{recipe.title}</h4>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6 flex-1 line-clamp-3">
                    {recipe.desc}
                  </p>
                  <div className="border-t hairline pt-4 flex justify-between text-xs text-white/70 uppercase tracking-widest pb-1">
                    <span>{recipe.prepTime}</span>
                    <span className="text-white hover:text-white/70">Read Recipe &rarr;</span>
                  </div>
                </Link>
              </Reveal>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-white/70 font-light">
              No recipes found for this category.
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <Reveal className="flex justify-center items-center space-x-6 border-t hairline pt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:hover:text-white/70 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2 text-xs font-serif text-white/70">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center border hairline transition-colors ${
                      currentPage === page ? "bg-[var(--color-brown)] text-white border-[var(--color-brown)]" : "hover:border-white/20"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-white/70 hover:text-white disabled:opacity-30 disabled:hover:text-white/70 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </Reveal>
        )}
      </div>
    </main>
  );
}
