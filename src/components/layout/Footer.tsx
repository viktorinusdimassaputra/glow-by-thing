import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-white/10 pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/70 mb-8 font-bold">
              The Manifest
            </h3>
            <p className="text-2xl font-serif text-white italic leading-relaxed max-w-md">
              Synchronizing modern rituals with biological intelligence. 
                <span className="block mt-4 text-sm font-sans not-italic font-light text-white/70">
                Empowering your natural radiance through clinically proven formulations and holistic wellness.
              </span>
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Shop Collection", "Skin Lab Analysis", "Nutritional Guides", "The Archive"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-8">
              Stay Connected
            </h4>
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">TikTok</Link>
              <Link href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">YouTube</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-500">
            <span className="text-xl md:text-2xl font-serif tracking-[0.25em] text-white uppercase">
              Glow <span className="italic font-light opacity-60">by</span> Thing
            </span>
          </Link>
          <p className="text-[10px] tracking-widest text-white/70 uppercase font-medium">
            &copy; 2026 GLOW BY THING. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Decorative Glow Point */}
      <div className="absolute bottom-0 right-0 w-96 h-96 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)' }}></div>
    </footer>
  );
}
