"use client";

import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const routineSteps = [
  {
    id: "calming-micellar-water",
    name: "Calming Micellar Water",
    category: "Step 01 — Cleanse (Oil)",
    image: "/glow_micellar_water.png",
    tagline: "Pure skin starts here",
    description: "An ultra-gentle, non-rinse micellar water infused with cucumber extract and organic rosewater. Effortlessly melts waterproof makeup, sunscreen, and daily pollutants while calming sensitive skin.",
    keyActive: "Cucumber Extract & Rosewater"
  },
  {
    id: "cloud-silk-cleanser",
    name: "Cloud Silk Hydrating Wash",
    category: "Step 02 — Cleanse (Water)",
    image: "/glow_facial_wash.png",
    tagline: "Deep wash, zero dryness",
    description: "A silky, low-pH hydrating cleanser that transforms into a cloud-like micro-foam. Formulated with oat amino acids and ceramides to deeply cleanse without stripping moisture.",
    keyActive: "Oat Amino Acids & Ceramides"
  },
  {
    id: "hydrating-milk-toner",
    name: "Hydrating Milk Toner",
    category: "Step 03 — Tone & Prep",
    image: "/glow_hydrating_toner.png",
    tagline: "Instant hydration flood",
    description: "A skin-cushioning milky toner that floods dehydrated skin with instant moisture. Infused with beta-glucan and triple hyaluronic acid to refine skin texture and optimize active absorption.",
    keyActive: "Beta-Glucan & Panthenol"
  },
  {
    id: "luminous-c-essence",
    name: "Luminous C 15% Essence",
    category: "Step 04 — Treat & Brighten",
    image: "/glow_coll_serum.png",
    tagline: "Fades spots, ignites glow",
    description: "A potent 15% L-Ascorbic Acid serum stabilized with Ferulic Acid and Vitamin E. Rapidly fades stubborn hyperpigmentation, brightens skin tone, and provides robust daily environmental defense.",
    keyActive: "15% Vitamin C & Ferulic Acid"
  },
  {
    id: "dewy-glow-barrier-cream",
    name: "Dewy Glow Barrier Cream",
    category: "Step 05 — Hydrate & Seal",
    image: "/glow_coll_cream.png",
    tagline: "48-Hour lock-in moisture",
    description: "Our signature whipped cream moisturizer that locks in hydration for 48 hours without feeling heavy. Formulated with squalane, niacinamide, and triple ceramides to restore skin barriers.",
    keyActive: "Squalane & Niacinamide & Ceramides"
  },
  {
    id: "glow-shield-spf",
    name: "Glow Shield SPF 50 PA++++",
    category: "Step 6 — Protect & Prime",
    image: "/glow_sunscreen.png",
    tagline: "Invisible shield, glowing primer",
    description: "An invisible, weightless hybrid sunscreen that leaves zero white cast. Acts as a glowing, grip-primer under makeup while providing maximum UV protection against aging rays.",
    keyActive: "Broad Spectrum Filters & Hyaluronic Acid"
  }
];

const productCluster = [
  {
    id: "calming-micellar-water",
    name: "Calming Micellar Water",
    image: "/glow_micellar_water.png",
    position: "left-[5%] md:left-[8%] top-[10%] md:top-[8%]",
    rotate: -10,
    size: "w-32 sm:w-44 md:w-56 lg:w-64",
    delay: 0.1
  },
  {
    id: "cloud-silk-cleanser",
    name: "Cloud Silk Hydrating Wash",
    image: "/glow_facial_wash.png",
    position: "right-[5%] md:right-[8%] top-[12%] md:top-[10%]",
    rotate: 8,
    size: "w-28 sm:w-40 md:w-48 lg:w-56",
    delay: 0.2
  },
  {
    id: "hydrating-milk-toner",
    name: "Hydrating Milk Toner",
    image: "/glow_hydrating_toner.png",
    position: "left-[12%] md:left-[15%] bottom-[5%] md:bottom-[2%]",
    rotate: -5,
    size: "w-32 sm:w-44 md:w-52 lg:w-60",
    delay: 0.3
  },
  {
    id: "luminous-c-essence",
    name: "Luminous C 15% Essence",
    image: "/glow_coll_serum.png",
    position: "right-[10%] md:right-[14%] bottom-[8%] md:bottom-[5%]",
    rotate: 6,
    size: "w-28 sm:w-40 md:w-48 lg:w-56",
    delay: 0.4
  },
  {
    id: "dewy-glow-barrier-cream",
    name: "Dewy Glow Barrier Cream",
    image: "/glow_coll_cream.png",
    position: "left-[-2%] md:left-[1%] top-[45%] md:top-[38%]",
    rotate: -12,
    size: "w-32 sm:w-44 md:w-52 lg:w-60",
    delay: 0.5
  },
  {
    id: "glow-shield-spf",
    name: "Glow Shield SPF 50 PA++++",
    image: "/glow_sunscreen.png",
    position: "right-[-2%] md:right-[1%] top-[48%] md:top-[42%]",
    rotate: 12,
    size: "w-28 sm:w-36 md:w-44 lg:w-52",
    delay: 0.6
  }
];

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Radiant Hero Section - Organic Product Cluster Overlap Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
        {/* Subtle decorative dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 pointer-events-none"></div>
        
        {/* Ambient glow in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-3xl pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)' }}></div>

        {/* 1. Clustered Organic Product Backdrop (Berkumpul, Agak Burem, Image Gede) */}
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto select-none overflow-hidden">
          {productCluster.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.85, rotate: item.rotate }}
              animate={{ opacity: 1, scale: 1, rotate: item.rotate }}
              transition={{ 
                type: "spring",
                stiffness: 45,
                damping: 15,
                delay: item.delay 
              }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 30,
                transition: { duration: 0.4 }
              }}
              className={`absolute ${item.position} ${item.size} aspect-[3/4] flex flex-col items-center justify-center cursor-pointer pointer-events-auto group`}
            >
              {/* Overlay Link to Product Shop Details */}
              <Link href={`/shop/${item.id}`} className="absolute inset-0 z-20" />

              {/* Floating Breathing Animation */}
              <motion.div
                animate={{
                  y: [0, idx % 2 === 0 ? 8 : -8, 0]
                }}
                transition={{
                  duration: 6 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full flex flex-col items-center justify-center relative"
              >
                {/* Large Product Bottle Image (Agak Burem / Slightly Blurred by default, clear on hover) */}
                <div className="w-full h-full flex items-center justify-center transition-all duration-[800ms] filter blur-[3.5px] opacity-[0.22] group-hover:blur-0 group-hover:opacity-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                  />
                </div>

                {/* Floating tooltip/label on hover */}
                <div className="absolute -bottom-2 bg-black/60 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md z-30 font-bold">
                  {item.name.split(' ').slice(1).join(' ') || item.name}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 2. Centered Luxury Typography Overlay (Menimpah Produk - Card Removed) */}
        <div className="relative z-20 container mx-auto px-6 max-w-3xl flex flex-col items-center text-center pointer-events-none">
            <div className="pointer-events-auto space-y-8 text-center flex flex-col items-center max-w-xl md:max-w-2xl">
            <Reveal delay={0.0}>
              <div className="flex justify-center">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white font-bold bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full inline-block border border-white/10 shadow-sm">
                  Innovation in Dermatology
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.05] uppercase tracking-tighter text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Luminous <br />
                <span className="italic font-light opacity-85">Essence</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="flex justify-center">
                <p className="text-xs md:text-sm text-white/70 max-w-sm md:max-w-md font-light leading-relaxed tracking-wide">
                  Bespoke skincare solutions designed to synchronize with your skin's biology. Pure. Potent. Permanent.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto group relative px-10 py-4 overflow-hidden rounded-full transition-all duration-500 text-center bg-[var(--color-gold)] text-black"
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold">Discover Routine</span>
                  <motion.div 
                    className="absolute inset-0 bg-black/0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  />
                </Link>
                <Link
                  href="/skinlab"
                  className="w-full sm:w-auto group flex items-center justify-center space-x-3 text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:opacity-60 transition py-4 px-4"
                >
                  <span>The Skin Lab</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center space-y-2 opacity-30">
          <span className="text-[8px] uppercase tracking-widest font-medium text-white/60">Scroll to explore</span>
          <div className="w-[1px] h-8 bg-white/20 origin-top animate-pulse" />
        </div>
      </section>

      {/* Philosophy Section - Staggered & Clean */}
      <section className="py-40 bg-[var(--color-cream)] text-black border-y border-black/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            {/* Single Clean Skincare Package Set (1 Gambar Tunggal Paket Skincare) */}
            <Reveal>
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-xl border border-black/10 bg-black/5 group cursor-pointer">
                {/* Global Click Link to shop the set */}
                <Link href="/shop" className="absolute inset-0 z-20" />
                <img 
                  src="/paket-skincare-master.png" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out" 
                  alt="Glow by Thing Complete Skincare Set" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl"></div>
              </div>
            </Reveal>
            
            <div className="space-y-16">
              <Reveal>
                <div className="inline-block px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest text-black bg-[var(--color-gold-light)]">
                  Our Philosophy
                </div>
                <h2 className="text-5xl font-serif text-black mt-6 leading-tight">Beyond the <br/><span className="italic">surface.</span></h2>
              </Reveal>

              <div className="grid gap-12">
                {[
                  { title: "Cellular Intelligence", desc: "Formulated with bio-compatible molecules that penetrate the dermis for lasting repair." },
                  { title: "Ethical Luxury", desc: "100% vegan, cruelty-free, and housed in hand-blown glass intended for reuse." },
                ].map((item, idx) => (
                  <Reveal key={idx} delay={0.2 + idx * 0.1}>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black mb-4 flex items-center">
                      <span className="w-8 h-[1px] bg-black/20 mr-4"></span>
                      {item.title}
                    </h3>
                    <p className="text-black/70 font-light leading-relaxed pl-12 text-sm italic">
                      "{item.desc}"
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Glow Section - High Impact */}
      <section className="py-40 bg-[var(--color-brown)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal className="text-center mb-24">
            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-serif text-white/5 uppercase tracking-tighter absolute left-1/2 -translate-x-1/2 -top-12 z-0 whitespace-nowrap select-none">
                Radiance Reimagined
              </h2>
              <h3 className="relative z-10 text-4xl font-serif text-white">Curated Collections</h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {routineSteps.map((item, idx) => (
              <Reveal key={item.id} delay={(idx + 1) * 0.1} yOffset={50}>
                <Link href={`/shop/${item.id}`} className="group block relative aspect-square overflow-hidden rounded-xl bg-gray-50 shadow-md transition-shadow hover:shadow-xl duration-500">
                  <img 
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-65 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Step Badge */}
                  <span className="absolute top-6 left-6 z-10 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full shadow-sm">
                    {item.category.split(' — ')[0]}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-transform duration-500">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-[var(--color-gold)]">
                      {item.category.split(' — ')[1]?.split(' (')[0] || "Treat"}
                    </p>
                    <h4 className="text-2xl font-serif text-white transition-colors duration-300">{item.name}</h4>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white/60 mt-4 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                      Shop Product <ArrowRight className="w-3 h-3 ml-2" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
