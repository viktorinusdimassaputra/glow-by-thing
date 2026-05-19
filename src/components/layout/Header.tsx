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
          <nav className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`group relative transition-colors hover:text-white ${
                  pathname.startsWith(link.path) ? "text-white" : "text-white/70"
                }`}
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"
                  animate={{ width: pathname.startsWith(link.path) ? "100%" : "0%" }}
                />
              </Link>
            ))}
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
            <span className="hidden sm:inline-block text-xs md:text-sm font-serif tracking-[0.25em] text-white uppercase">
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
            className="fixed inset-0 bg-white/5 z-50 md:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif tracking-widest text-sm text-white/70">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-serif transition-colors hover:translate-x-2 duration-300 ${
                    pathname.startsWith(link.path) ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.name}
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

