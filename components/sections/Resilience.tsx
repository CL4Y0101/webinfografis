"use client";
import { motion } from 'framer-motion';
import { ShieldAlert, ExternalLink } from 'lucide-react';

export default function Resilience() {
  const sources = [
    { name: "Bank Indonesia", url: "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2716225.aspx" },
    { name: "IDX Channel", url: "https://www.instagram.com/p/DZr4DGUCdOr/?img_index=6&igsh=MW83MzRqNGhjNXZ0aQ==&igsi=MW83MzRqNGhjNXZ0aQ==" },
    { name: "Bloomberg Technoz", url: "https://www.bloombergtechnoz.com/detail-news/109881/kurangi-ketergantungan-dolar-bi-catat-transaksi-lct-naik-309/2" },
    { name: "Investor.id", url: "https://investor.id/macroeconomy/440093/bi-perkuat-penerapan-lct-untuk-mitigasi-pelemahan-rupiah" },
    { name: "BCA Sekuritas", url: "https://bcasekuritas.co.id/en/latest-news/news/indef-lct-hingga-perkuat-ekspor-untuk-mitigasi-dampak-pelemahan-kurs" }
  ];

  return (
    <section id="resilience" className="min-h-screen py-24 px-8 lg:px-24 bg-slate-950 text-white flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl text-center z-10 mb-24">
        <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-8 opacity-80" />
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-10 leading-tight">
          Resilience in an uncertain world.
        </h2>
        <div className="text-xl text-slate-300 leading-relaxed space-y-6 max-w-3xl mx-auto font-light">
          <p>Konektivitas pembayaran lintas negara dan penggunaan mata uang lokal membantu menjaga kelancaran transaksi bilateral ketika perekonomian menghadapi ketidakpastian global.</p>
          <p>Diversifikasi mekanisme pembayaran juga dapat membantu mengurangi ketergantungan dan memitigasi risiko nilai tukar.</p>
        </div>
      </motion.div>

      <div className="absolute bottom-8 w-full px-12 z-10">
        <div className="flex flex-col items-center border-t border-white/10 pt-6">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">Sumber Referensi LCT & Resiliensi:</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {sources.map((src, idx) => (
              <a key={idx} href={src.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4">
                <ExternalLink className="w-3 h-3" /> {src.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}