"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[rgba(59,34,16,0.96)] shadow-2xl z-50 flex flex-col border-l border-white/10"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[rgba(59,34,16,0.95)]">
              <h2 className="font-serif text-2xl text-[var(--color-gold)]">Your Bag</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-[rgba(255,255,255,0.08)] rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/80">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-40 text-[var(--color-gold)]" />
                  <p>Your bag is mysteriously empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover bg-white/5"
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-medium text-white line-clamp-1">{item.name}</h4>
                        <p className="text-white/70 text-sm">Rp {item.price.toLocaleString("id-ID")}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border hairline rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-black/5"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-black/5"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-white/70 underline hover:text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t hairline bg-white/5">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">Rp {cartTotal.toLocaleString("id-ID")}</span>
                </div>
                <p className="text-xs text-white/70 mb-6">Shipping & taxes calculated at checkout.</p>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full text-center py-4 font-medium uppercase tracking-widest text-sm"
                  style={{ background: 'var(--color-accent-coral)', color: '#0b1220' }}
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
