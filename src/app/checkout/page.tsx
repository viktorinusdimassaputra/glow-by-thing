"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Reveal from "@/components/animations/Reveal";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [success, setSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccess(true);
      clearCart();
    }, 1500);
  };

  if (success) {
    return (
      <main className="min-h-screen pt-32 bg-transparent flex flex-col items-center justify-center text-center">
        <Reveal className="max-w-md mx-auto p-12 bg-white/5 flex flex-col items-center shadow-2xl">
          <CheckCircle className="w-16 h-16 text-white/70 mb-6" />
          <h1 className="text-3xl font-serif text-white mb-4">Order Placed</h1>
          <p className="text-white/70 font-light mb-8">Thank you for your purchase. We will softly package your ritual and email you the tracking details.</p>
          <Link href="/shop" className="text-xs uppercase tracking-widest border-b hairline pb-1 hover:text-white transition-colors">
            Return to Boutique
          </Link>
        </Reveal>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <h1 className="text-4xl font-serif text-white mb-12 border-b hairline pb-6">Secure Checkout</h1>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <Reveal delay={0.1} className="flex-1">
            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-4">Shipping Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input required placeholder="First Name" className="col-span-1 p-4 bg-white/5 border border-transparent focus:border-white/20 outline-none text-sm transition-colors" />
                  <input required placeholder="Last Name" className="col-span-1 p-4 bg-white/5 border border-transparent focus:border-white/20 outline-none text-sm transition-colors" />
                  <input required type="email" placeholder="Email Address" className="col-span-2 p-4 bg-white/5 border border-transparent focus:border-white/20 outline-none text-sm transition-colors" />
                  <input required placeholder="Address" className="col-span-2 p-4 bg-white/5 border border-transparent focus:border-white/20 outline-none text-sm transition-colors" />
                  <input required placeholder="City" className="col-span-1 p-4 bg-white/5 border border-transparent focus:border-white/20 outline-none text-sm transition-colors" />
                  <input required placeholder="Postal Code" className="col-span-1 p-4 bg-white/5 border border-transparent focus:border-white/20 outline-none text-sm transition-colors" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4">Payment (Offline)</h3>
                <div className="p-4 bg-white/5 border border-transparent text-sm text-white/70">
                  Cash on Delivery / Manual Bank Transfer
                </div>
              </div>
            </form>
          </Reveal>

          {/* Outline */}
          <Reveal delay={0.2} className="w-full lg:w-96">
            <div className="bg-white/5 p-8">
              <h3 className="font-serif text-xl mb-6 border-b hairline pb-4 text-white">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-white/70">{item.name} <span className="opacity-50">x{item.quantity}</span></span>
                    <span>Rp {(item.price * item.quantity).toLocaleString("id-ID")}</span>
                  </div>
                ))}
              </div>
              <div className="border-t hairline pt-4 flex justify-between items-center font-medium">
                <span>Total</span>
                <span>Rp {cartTotal.toLocaleString("id-ID")}</span>
              </div>
              
              <button
                type="submit"
                form="checkout-form"
                disabled={cart.length === 0}
                className="w-full py-4 uppercase tracking-widest text-xs mt-8 disabled:opacity-50"
                style={{ background: 'var(--color-gold)', color: 'black' }}
              >
                Place Order
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
