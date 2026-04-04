"use client";

import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { Search } from "lucide-react";
import { ingredientsDatabase } from "@/lib/data";

export default function SkinLab() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(ingredientsDatabase);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (val.trim() === "") {
      setResults(ingredientsDatabase);
      return;
    }
    const q = val.toLowerCase();
    const matches = ingredientsDatabase.filter(
      (ing) => ing.name.toLowerCase().includes(q) || ing.aka.toLowerCase().includes(q) || ing.benefits.toLowerCase().includes(q)
    );
    setResults(matches);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-alabaster">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-slate mb-4 block">
            Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-6">
            The Skin Laboratory
          </h1>
          <p className="text-slate font-light text-lg max-w-2xl mx-auto">
            Demystify your routine. Search our clinically curated ingredient database to understand safety profiles and optimal layering.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative z-20 mb-16">
          <div className="relative group shadow-sm hover:shadow-md transition-shadow">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for ingredients, benefits, or problems (e.g., Niacinamide, Acne, Redness)..."
              className="w-full bg-white px-8 py-6 rounded-none outline-none border border-transparent focus:border-obsidian transition-colors text-obsidian placeholder-slate"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-slate">
              <Search className="w-5 h-5" />
            </div>
          </div>
        </Reveal>

        <div className="space-y-6 relative z-10 min-h-[400px]">
          {results && results.length === 0 && (
            <Reveal className="text-center p-12 bg-white">
              <p className="text-slate font-light">No exact match found in our primary database for <span className="font-medium text-obsidian">"{query}"</span>.</p>
            </Reveal>
          )}

          {results && results.map((ing, idx) => (
            <Reveal key={ing.name} delay={idx * 0.1} className="bg-white p-8 border border-transparent hover:border-gray-200 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-obsidian mb-1">{ing.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-slate">AKA: {ing.aka}</span>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-alabaster text-xs uppercase tracking-widest font-medium border hairline">
                  {ing.status}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t hairline">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-obsidian mb-3">Primary Benefits</h4>
                  <p className="font-light text-slate text-sm leading-relaxed">{ing.benefits}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-sage mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-sage mr-2"></span> Pairs Well With
                    </h4>
                    <p className="font-light text-slate text-sm">{ing.pairsWith}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-dusty mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-dusty mr-2"></span> Do Not Mix With
                    </h4>
                    <p className="font-light text-slate text-sm">{ing.doNotMix}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
