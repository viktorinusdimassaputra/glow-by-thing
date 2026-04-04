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
    <Reveal delay={delay} className="group relative rounded-3xl bg-white p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-peach/10 hover:-translate-y-2 border border-gray-100/50">
      {badge && (
        <div className={`absolute top-6 ${badge === 'New' ? 'left-6 bg-sage text-white' : 'right-6 bg-white/90 text-dusty'} z-10 backdrop-blur rounded-full px-4 py-1.5 text-xs font-bold shadow-sm`}>
          {badge}
        </div>
      )}
      <div className="aspect-square rounded-2xl mb-8 overflow-hidden relative bg-offwhite">
        <div className="absolute inset-0 bg-peach/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-white/90 backdrop-blur-md text-gray-900 border border-gray-100 font-semibold py-3 rounded-xl hover:bg-dusty hover:text-white hover:border-dusty transition shadow-lg">
            Quick Add
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">{category}</div>
      <h4 className="font-serif text-xl text-gray-800 leading-tight mb-2 truncate">{title}</h4>
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-lg text-dusty">{price}</span>
        <div className="flex text-yellow-400 text-sm">
          {rating} <span className="text-gray-400 ml-1 font-light text-xs"></span>
        </div>
      </div>
    </Reveal>
  );
}
