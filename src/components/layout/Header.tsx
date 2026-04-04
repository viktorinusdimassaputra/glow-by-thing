"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import CartDrawer from "../ui/CartDrawer";

export default function Header() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Skin Lab", path: "/skinlab" },
    { name: "Diet", path: "/diet" },
  ];

  return (
    <>
      <header className="fixed w-full top-0 z-40 glass h-20 transition-all flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -ml-2 text-obsidian"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors hover:text-obsidian ${
                  pathname.startsWith(link.path) ? "text-obsidian border-b border-obsidian" : "text-slate"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-serif tracking-widest text-obsidian absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 transition text-center">
            GLOW BY THING
          </Link>

          {/* Actions */}
          <div className="flex items-center space-x-6 ml-auto">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-obsidian hover:opacity-70 transition flex items-center"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-obsidian text-alabaster text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-30 transform transition-transform duration-300 ease-in-out md:hidden ${ 
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl uppercase tracking-widest font-medium transition-colors hover:text-obsidian ${
                pathname.startsWith(link.path) ? "text-obsidian" : "text-slate"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <CartDrawer />
    </>
  );
}
