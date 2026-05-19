import Reveal from "../animations/Reveal";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  rating: string;
  badge?: string;
  delay?: number;
}

export default function ProductCard({ image, category, title, price, rating, badge, delay = 0 }: ProductCardProps) {
  return (
    <Reveal delay={delay} className="group relative rounded-3xl bg-white/5 p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-white/10">
      {badge && (
        <div className={`absolute top-6 ${badge === 'New' ? 'left-6 bg-[var(--color-accent-teal)] text-white' : 'right-6 bg-white/10 text-white'} z-10 backdrop-blur rounded-full px-4 py-1.5 text-xs font-bold shadow-sm`}>
          {badge}
        </div>
      )}
      <div className="aspect-square rounded-2xl mb-8 overflow-hidden relative bg-white/10">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-glow-coral) 0%, transparent 60%)' }} />
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full font-semibold py-3 rounded-xl transition shadow-lg" style={{ background: 'var(--color-accent-gold)', color: '#0b1220' }}>
            Quick Add
          </button>
        </div>
      </div>
      <div className="text-xs text-white/70 uppercase tracking-widest mb-2 font-medium">{category}</div>
      <h4 className="font-serif text-xl text-white leading-tight mb-2 truncate">{title}</h4>
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-lg text-[var(--color-accent-gold)]">{price}</span>
        <div className="flex text-yellow-400 text-sm">
          {rating} <span className="text-white/70 ml-1 font-light text-xs"></span>
        </div>
      </div>
    </Reveal>
  );
}
