"use client";
import { motion } from 'framer-motion';
import { QrCode, ExternalLink } from 'lucide-react';

export default function WhatIsQris() {
  return (
    <section id="what-is-qris" className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
      <div className="bg-slate-900 flex items-center justify-center p-12 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}
          className="relative z-10"
        >
          <QrCode className="w-48 h-48 text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2]" />
          <div className="w-64 h-64 border border-white/20 p-4 grid grid-cols-2 gap-2 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-2xl">
            <div className="bg-white/10 rounded-tl-xl rounded-br-xl"></div>
            <div className="bg-red-600/80 rounded-tr-xl rounded-bl-xl"></div>
            <div className="bg-white/10 rounded-tr-xl rounded-bl-xl"></div>
            <div className="bg-white/10 rounded-tl-xl rounded-br-xl"></div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col justify-center p-12 lg:p-24 bg-white relative">
        <h2 className="font-serif text-4xl font-bold mb-8">What is QRIS?</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          QRIS (Quick Response Code Indonesian Standard) merupakan standar pembayaran berbasis QR yang dikembangkan Bank Indonesia untuk menyatukan berbagai layanan pembayaran digital. Standardisasi ini membuat transaksi menjadi lebih cepat, mudah, murah, aman, dan andal.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          {["cepat", "mudah", "murah", "aman", "andal"].map((word, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
              className="px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-semibold text-sm uppercase tracking-wide border border-slate-200"
            >
              {word}
            </motion.span>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-12 lg:left-24 text-sm text-slate-400 flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          <a href="https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/kanal-layanan/qris/default.aspx" target="_blank" rel="noreferrer" className="hover:text-red-600 underline underline-offset-4">
            Sumber: Bank Indonesia
          </a>
        </div>
      </div>
    </section>
  );
}