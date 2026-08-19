"use client";
import { motion } from 'framer-motion';
import { Globe, ArrowRight, ExternalLink } from 'lucide-react';

export default function CrossBorder() {
  return (
    <section id="cross-border" className="min-h-screen py-24 px-8 lg:px-24 bg-white flex flex-col justify-center items-center border-b border-slate-100 relative">
      <div className="max-w-4xl text-center mb-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl md:text-5xl font-bold mb-8 text-slate-900">
          From local payments to cross-border connectivity.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-xl text-slate-600 leading-relaxed">
          QRIS tidak hanya digunakan untuk transaksi domestik, tetapi juga dikembangkan melalui konektivitas pembayaran lintas negara. QRIS Antarnegara mempermudah masyarakat dan pelaku usaha melakukan pembayaran di negara mitra dengan sistem pembayaran yang lebih praktis.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-4xl">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="w-32 h-32 rounded-full bg-red-50 border border-red-200 flex flex-col items-center justify-center shadow-lg">
          <span className="font-bold text-red-700 text-lg">Indonesia</span>
        </motion.div>
        <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: 100, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden md:flex items-center text-slate-300">
          <div className="h-px bg-slate-300 w-full"></div><ArrowRight className="w-6 h-6 flex-shrink-0 -ml-2 text-slate-400" />
        </motion.div>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="w-32 h-32 rounded-full bg-slate-50 border border-slate-200 flex flex-col items-center justify-center shadow-lg">
          <span className="font-bold text-slate-700 text-lg text-center leading-tight">Negara<br/>Mitra</span>
        </motion.div>
        <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: 100, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.8 }} className="hidden md:flex items-center text-slate-300">
          <div className="h-px bg-slate-300 w-full"></div><ArrowRight className="w-6 h-6 flex-shrink-0 -ml-2 text-slate-400" />
        </motion.div>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} className="w-32 h-32 rounded-full bg-slate-900 border border-slate-800 flex flex-col items-center justify-center shadow-lg text-white">
          <Globe className="w-6 h-6 mb-2 text-red-500" /><span className="font-semibold text-xs tracking-wider uppercase text-center">Payment<br/>Network</span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 flex items-center gap-2">
        <ExternalLink className="w-4 h-4" />
        <a href="https://www.instagram.com/p/DZr4DGUCdOr/?img_index=6&igsh=MW83MzRqNGhjNXZ0aQ==&igsi=MW83MzRqNGhjNXZ0aQ==" target="_blank" rel="noreferrer" className="hover:text-red-600 underline underline-offset-4">
          Sumber: IDX Channel
        </a>
      </div>
    </section>
  );
}