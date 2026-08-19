"use client";
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative p-8 border-b border-slate-100">
      <div className="max-w-4xl w-full text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-xs text-slate-500 mb-8 font-semibold"
        >
          Digital Economy • QRIS • Indonesia
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-slate-900"
        >
          QRIS & TRANSFORMASI EKONOMI DIGITAL
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Bagaimana standardisasi pembayaran digital mengubah cara masyarakat dan pelaku usaha bertransaksi.
        </motion.p>

        {/* DIUBAH MENJADI motion.a DAN DITAMBAHKAN href="#digital-shift" */}
        <motion.a 
          href="#digital-shift"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-red-600 transition-colors"
        >
          <span className="text-sm font-medium uppercase tracking-wider">Mulai Presentasi</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}