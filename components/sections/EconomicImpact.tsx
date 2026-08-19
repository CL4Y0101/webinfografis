"use client";
import { motion } from 'framer-motion';
import { Store, User, ExternalLink } from 'lucide-react';

export default function EconomicImpact() {
  return (
    <section id="economic-impact" className="min-h-screen py-24 px-8 lg:px-24 bg-slate-50 border-b border-slate-200 flex flex-col justify-center relative">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900"
      >
        One system. Two sides.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Store className="w-32 h-32" /></div>
          <h3 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-6">Pelaku Usaha</h3>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" /><p className="text-slate-700 text-lg leading-relaxed">Mempermudah menerima pembayaran digital</p></li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" /><p className="text-slate-700 text-lg leading-relaxed">Mempercepat transaksi</p></li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" /><p className="text-slate-700 text-lg leading-relaxed">Membantu pencatatan dan rekonsiliasi transaksi</p></li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" /><p className="text-slate-700 text-lg leading-relaxed">Meningkatkan efisiensi pengelolaan usaha</p></li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-sm hover:shadow-xl text-white transition-all">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><User className="w-32 h-32" /></div>
          <h3 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-6">Konsumen</h3>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" /><p className="text-slate-300 text-lg leading-relaxed">Pembayaran lebih praktis</p></li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" /><p className="text-slate-300 text-lg leading-relaxed">Tidak perlu membawa uang tunai</p></li>
            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" /><p className="text-slate-300 text-lg leading-relaxed">Dapat menggunakan berbagai aplikasi pembayaran yang terhubung dengan QRIS</p></li>
          </ul>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-12 lg:right-24 text-sm text-slate-400 flex items-center gap-2">
        <ExternalLink className="w-4 h-4" />
        <a href="https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/kanal-layanan/qris/default.aspx" target="_blank" rel="noreferrer" className="hover:text-red-600 underline underline-offset-4">
          Sumber: Bank Indonesia
        </a>
      </div>
    </section>
  );
}