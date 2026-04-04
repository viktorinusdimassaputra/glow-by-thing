import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import Typewriter from "@/components/animations/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster">
      {/* Editorial Hero */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1920"
            alt="Editorial Skincare"
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-transparent to-transparent"></div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto mt-20">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-serif text-obsidian leading-[1.1] uppercase tracking-tighter">
              <Typewriter text="The Art of " speed={120} />
              <br/> 
              <Typewriter text="skin" speed={150} delay={1.5} className="lowercase font-light" />
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate mt-8 max-w-lg mx-auto font-light tracking-wide">
              Meticulously formulated. Clinically proven. Designed for the modern ritual.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="mt-12">
              <Link
                href="/shop"
                className="inline-block px-10 py-4 bg-obsidian text-alabaster uppercase tracking-widest text-sm hover:bg-slate transition-colors"
              >
                Discover Collection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Minimalism Features */}
      <section className="py-32 bg-alabaster">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal className="mb-24 flex flex-col md:flex-row justify-between items-end border-b hairline pb-8">
            <h2 className="text-4xl font-serif text-obsidian">Philosophy</h2>
            <p className="text-slate uppercase tracking-widest text-xs mt-4 md:mt-0">Less, but better.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Reveal delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-slate mb-4 block">01</span>
              <h3 className="text-xl font-serif mb-4 text-obsidian">Pure Efficacy</h3>
              <p className="font-light text-slate text-sm leading-loose">We strip away the unnecessary, leaving only potent, clinically-proven actives that deliver visible results.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="text-xs uppercase tracking-widest text-slate mb-4 block">02</span>
              <h3 className="text-xl font-serif mb-4 text-obsidian">Internal Balance</h3>
              <p className="font-light text-slate text-sm leading-loose">Topical care is half the equation. Our nutritional guides target skin health internally for a permanent glow.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <span className="text-xs uppercase tracking-widest text-slate mb-4 block">03</span>
              <h3 className="text-xl font-serif mb-4 text-obsidian">Conscious Luxury</h3>
              <p className="font-light text-slate text-sm leading-loose">Sustainability shouldn't compromise elegance. All packaging is post-consumer recycled and fully refillable.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Asymmetrical Editorial Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <Reveal className="md:col-span-5 md:col-start-2">
              <div className="aspect-[3/4] overflow-hidden bg-alabaster">
                <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Lab" />
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="md:col-span-4 md:pl-12">
              <span className="text-xs tracking-widest uppercase text-slate mb-6 block">Intelligence</span>
              <h2 className="text-4xl font-serif text-obsidian mb-6 leading-tight">The Skin Laboratory</h2>
              <p className="text-slate font-light leading-relaxed mb-8">
                Demystify your routine. Access our ingredient database to understand how to layer actives safely without damaging your barrier.
              </p>
              <Link href="/skinlab" className="border-b hairline pb-1 text-obsidian uppercase tracking-widest text-xs hover:text-slate transition-colors">
                Enter The Lab
              </Link>
            </Reveal>

          </div>
        </div>
      </section>

    </main>
  );
}
