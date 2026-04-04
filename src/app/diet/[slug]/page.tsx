"use client";

import { useParams } from "next/navigation";
import { dietRecipes } from "@/lib/dietData";
import Reveal from "@/components/animations/Reveal";
import Link from "next/link";
import { ArrowLeft, Clock, Flame } from "lucide-react";
import { notFound } from "next/navigation";

export default function DietDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const recipe = dietRecipes.find((r) => r.id === slug);

  if (!recipe) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center bg-alabaster">
        <h1 className="text-3xl font-serif text-obsidian mb-4">Recipe Not Found</h1>
        <Link href="/diet" className="underline hover:text-slate">Return to Nutritional Guides</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-32 bg-alabaster">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <Link href="/diet" className="inline-flex items-center text-xs uppercase tracking-widest text-slate hover:text-obsidian transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diet
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-obsidian border hairline px-4 py-1 mb-6 inline-block">
              {recipe.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-obsidian leading-tight mb-8">
              {recipe.title}
            </h1>
            <p className="text-lg text-slate font-light leading-relaxed">
              {recipe.desc}
            </p>
            
            <div className="flex justify-center space-x-12 mt-10 border-y hairline py-6">
              <div className="flex items-center text-obsidian">
                <Clock className="w-5 h-5 mr-3 text-slate" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest text-slate">Prep Time</span>
                  <span className="font-serif block">{recipe.prepTime}</span>
                </div>
              </div>
              <div className="flex items-center text-obsidian border-l hairline pl-12">
                <Flame className="w-5 h-5 mr-3 text-slate" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest text-slate">Energy</span>
                  <span className="font-serif block">{recipe.calories}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full h-96 md:h-[500px] bg-white p-2 border hairline mb-20 shadow-sm">
          <div className="w-full h-full overflow-hidden bg-black/5 relative">
            <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {/* Ingredients */}
          <Reveal delay={0.2} className="md:col-span-4">
            <h3 className="text-2xl font-serif text-obsidian mb-6 border-b hairline pb-4">Ingredients</h3>
            <ul className="space-y-4">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start text-sm font-light text-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-obsidian mt-1.5 mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">{ing}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-white border hairline p-6">
              <h4 className="text-xs uppercase tracking-widest text-obsidian mb-3">Targeted Skin Benefit</h4>
              <p className="text-sm font-light text-slate italic leading-relaxed">"{recipe.benefits}"</p>
            </div>
          </Reveal>

          {/* Instructions */}
          <Reveal delay={0.3} className="md:col-span-8">
            <h3 className="text-2xl font-serif text-obsidian mb-6 border-b hairline pb-4">Ritual Instructions</h3>
            <div className="space-y-8">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex">
                  <span className="text-3xl font-serif text-slate/30 mr-6 w-8">{idx + 1}</span>
                  <p className="text-base text-obsidian font-light leading-relaxed pt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
