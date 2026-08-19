"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CountUp = ({ to, duration = 2, decimals = 0 }: { to: number, duration?: number, decimals?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration]);

  return <span>{count.toFixed(decimals)}</span>;
};

export default function DigitalShift() {
  const stats = [
    { value: 36.88, suffix: "%", label: "Pertumbuhan pembayaran digital Triwulan II 2026" },
    { value: 16.07, suffix: " Miliar", label: "Volume pembayaran digital" },
    { value: 100.12, suffix: "%", label: "Pertumbuhan transaksi QRIS YoY" }
  ];

  return (
    <section id="digital-shift" className="min-h-screen flex flex-col justify-center p-8 lg:p-24 bg-slate-50 border-b border-slate-200 relative">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-bold mb-24"
      >
        Indonesia is moving digital.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
            className="flex flex-col border-l-2 border-red-600 pl-6"
          >
            <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4 font-serif">
              <CountUp to={stat.value} decimals={stat.value % 1 !== 0 ? 2 : 0} />
              <span className="text-4xl text-red-600">{stat.suffix}</span>
            </div>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-12 lg:left-24 text-sm text-slate-400 flex items-center gap-2">
        <ExternalLink className="w-4 h-4" />
        <a href="https://www.instagram.com/p/Dbsek1gCgGe/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" className="hover:text-red-600 underline underline-offset-4">
          Sumber: IDX Channel
        </a>
      </div>
    </section>
  );
}