"use client";
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';

export default function LocalCurrency() {
  const benefits = [
    "Mengurangi ketergantungan terhadap mata uang pihak ketiga",
    "Meningkatkan efisiensi transaksi",
    "Memitigasi risiko yang berasal dari volatilitas nilai tukar"
  ];

  return (
    <section id="lct" className="min-h-screen py-24 px-8 lg:px-24 bg-white flex flex-col justify-center items-center">
      <motion.h2 
        initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
        className="text-[10rem] md:text-[14rem] font-bold font-serif leading-none tracking-tighter text-slate-900"
      >
        LCT
      </motion.h2>
      <p className="text-2xl text-red-600 font-semibold mb-12 uppercase tracking-widest">Local Currency Transaction</p>

      <div className="max-w-4xl text-center mb-16">
        <p className="text-xl text-slate-600 leading-relaxed">
          Transaksi bilateral dilakukan menggunakan mata uang lokal masing-masing negara, sehingga ketergantungan terhadap mata uang pihak ketiga dapat dikurangi.
        </p>
      </div>

      <div className="w-full max-w-3xl flex items-center justify-between bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-16 relative overflow-hidden">
        <div className="text-center z-10">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 mx-auto mb-4 font-bold text-lg">Country A</div>
          <span className="text-sm font-semibold text-slate-500 uppercase">Local Currency</span>
        </div>
        
        <div className="flex-1 px-8 flex justify-center z-10">
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
            <ArrowRightLeft className="w-5 h-5 text-red-600" />
            <span className="font-medium text-slate-700">Transaction</span>
          </div>
        </div>

        <div className="text-center z-10">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 mx-auto mb-4 font-bold text-lg">Country B</div>
          <span className="text-sm font-semibold text-slate-500 uppercase">Local Currency</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {benefits.map((benefit, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
            className="p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-red-100 transition-all bg-white"
          >
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-600 font-bold text-sm">{idx + 1}</span>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}