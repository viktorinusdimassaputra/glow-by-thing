"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "../ui/CartDrawer";

export default function Header() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Skin Lab", path: "/skinlab" },
    { name: "Diet", path: "/diet" },
  ];

  return (
    <>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-40 transition-all duration-500 flex items-center ${
          isScrolled ? "h-16 glass shadow-sm" : "h-24 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 grid grid-cols-3 items-center">
          {/* Left: Nav Links */}
          <nav className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium items-center">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`group relative py-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -ml-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center: Logo */}
          <Link 
            href="/" 
            className="flex items-center justify-center space-x-3 hover:opacity-80 transition-all duration-500 justify-self-center"
          >
            <span className="inline-block text-[10px] sm:text-xs md:text-sm font-serif tracking-[0.25em] text-white uppercase whitespace-nowrap">
              Glow <span className="font-light italic opacity-60">by</span> Thing
            </span>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4 md:space-x-6 justify-self-end">
            <button className="hidden md:block p-2 text-white hover:opacity-60 transition">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:opacity-60 transition flex items-center"
            >
              <ShoppingBag className="w-4 h-4" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-[var(--color-gold)] text-black text-[8px] w-4 h-4 flex items-center justify-center rounded-full leading-none font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[100] md:hidden flex flex-col items-center h-screen gap-8 px-8 py-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center w-full mb-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-serif tracking-[0.25em] text-white uppercase hover:opacity-80 transition">
                Glow <span className="italic font-light opacity-60">by</span> Thing
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Menu Links */}
            <nav className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-4xl font-serif tracking-wider transition-all hover:scale-105 duration-300 relative group ${
                    pathname.startsWith(link.path) ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[var(--color-gold)] transition-all duration-300 ${
                      pathname.startsWith(link.path) ? "w-1/2" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </Link>
              ))}
            </nav>
            

          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  );
}

