"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Plus, Minus, Library } from 'lucide-react';

export default function EconomicTheory() {
  const theories = [
    {
      id: "01", title: "Transaction Cost Theory", author: "Douglass C. North (1990)",
      description: "Pertukaran ekonomi memiliki biaya transaksi yang muncul karena adanya informasi, ketidakpastian, dan proses pertukaran. QRIS membantu membuat proses pembayaran lebih sederhana, cepat, dan terdokumentasi sehingga dapat menekan waktu dan biaya transaksi."
    },
    {
      id: "02", title: "Financial Inclusion", author: "Handayani, N. L. P. (2023) - DOI: 10.61132/nuansa.v1i3.752",
      description: "QRIS memperluas akses masyarakat dan pelaku usaha terhadap pembayaran digital melalui berbagai aplikasi perbankan dan dompet digital. Kemudahan akses tersebut dapat meningkatkan partisipasi masyarakat dalam sistem keuangan sehingga mendorong inklusi keuangan."
    },
    {
      id: "03", title: "Velocity of Money", author: "Mishkin, F. S. (2019)",
      description: "Velocity of money menggambarkan kecepatan peredaran uang dalam mendukung transaksi ekonomi. QRIS tidak menciptakan uang baru, tetapi mempermudah dan mempercepat perpindahan dana antar pelaku ekonomi, sehingga transaksi dapat berlangsung lebih lancar."
    },
    {
      id: "04", title: "Endogenous Growth Theory", author: "Mankiw, N. G., Macroeconomics.",
      description: "Teori pertumbuhan endogen menjelaskan pentingnya teknologi, pengetahuan, dan inovasi dalam mendorong produktivitas dan pertumbuhan ekonomi jangka panjang. Sebagai bagian dari digitalisasi pembayaran, QRIS mendukung penggunaan teknologi dalam aktivitas ekonomi dan meningkatkan efisiensi transaksi."
    }
  ];

  const [activeTheory, setActiveTheory] = useState<string | null>(theories[0].id);

  return (
    <section id="economic-theory" className="min-h-screen py-24 px-8 lg:px-24 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 border-b border-slate-800 pb-8">
          QRIS, viewed through economics.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4 z-10">
            {theories.map((theory) => (
              <button
                key={theory.id}
                onClick={() => setActiveTheory(activeTheory === theory.id ? null : theory.id)}
                className={`text-left p-6 rounded-lg transition-all duration-300 border ${
                  activeTheory === theory.id ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-serif text-red-500">{theory.id}</span>
                    <h3 className="text-xl font-medium tracking-wide uppercase">{theory.title}</h3>
                  </div>
                  {activeTheory === theory.id ? <Minus className="w-5 h-5 text-slate-400" /> : <Plus className="w-5 h-5 text-slate-400" />}
                </div>
              </button>
            ))}
          </div>

          <div className="relative min-h-[400px] bg-slate-800/50 rounded-2xl p-12 border border-slate-700 backdrop-blur-sm z-10">
            <AnimatePresence mode="wait">
              {activeTheory && (
                <motion.div
                  key={activeTheory}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <BookOpen className="w-8 h-8 text-red-500 mb-8" />
                  <h4 className="text-2xl font-serif font-bold mb-6">
                    {theories.find(t => t.id === activeTheory)?.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-lg mb-8 flex-grow">
                    {theories.find(t => t.id === activeTheory)?.description}
                  </p>
                  <div className="pt-6 border-t border-slate-700 text-sm text-slate-400 uppercase tracking-wider">
                    Sumber: {theories.find(t => t.id === activeTheory)?.author}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-12 lg:left-24 text-sm text-slate-500 flex items-center gap-2">
        <Library className="w-4 h-4" />
        <span>Referensi Akademik Berdasarkan Literatur</span>
      </div>
    </section>
  );
}