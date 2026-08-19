"use client";
import { ExternalLink } from 'lucide-react';

const sources = [
  { category: "BANK INDONESIA", title: "QRIS, Sistem Pembayaran Ritel", url: "https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/kanal-layanan/qris/default.aspx" },
  { category: "BANK INDONESIA", title: "Ruang Media - Siaran Pers", url: "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2716225.aspx" },
  { category: "IDX CHANNEL", title: "Pertumbuhan Pembayaran Digital", url: "https://www.instagram.com/p/Dbsek1gCgGe/?utm_source=ig_web_button_share_sheet" },
  { category: "IDX CHANNEL", title: "QRIS Antarnegara & LCT", url: "https://www.instagram.com/p/DZr4DGUCdOr/?img_index=6&igsh=MW83MzRqNGhjNXZ0aQ==&igsi=MW83MzRqNGhjNXZ0aQ==" },
  { category: "ACADEMIC SOURCES", title: "North, D. C. (1990), Institutions, Institutional Change and Economic Performance", url: "#" },
  { category: "ACADEMIC SOURCES", title: "Handayani, N. L. P. (2023), Optimalisasi Sistem Pembayaran QRIS", url: "#" },
  { category: "ACADEMIC SOURCES", title: "Mishkin, F. S. (2019), The Economics of Money, Banking, and Financial Markets", url: "#" },
  { category: "ACADEMIC SOURCES", title: "Mankiw, N. G., Macroeconomics", url: "#" },
  { category: "OTHER SOURCES", title: "Bloomberg Technoz - Transaksi LCT Naik", url: "https://www.bloombergtechnoz.com/detail-news/109881/kurangi-ketergantungan-dolar-bi-catat-transaksi-lct-naik-309/2" },
  { category: "OTHER SOURCES", title: "Investor.id - Mitigasi Pelemahan Rupiah", url: "https://investor.id/macroeconomy/440093/bi-perkuat-penerapan-lct-untuk-mitigasi-pelemahan-rupiah" },
  { category: "OTHER SOURCES", title: "BCA Sekuritas - LCT Perkuat Ekspor", url: "https://bcasekuritas.co.id/en/latest-news/news/indef-lct-hingga-perkuat-ekspor-untuk-mitigasi-dampak-pelemahan-kurs" },
];

export default function References() {
  const groupedSources = sources.reduce((acc, source) => {
    (acc[source.category] = acc[source.category] || []).push(source);
    return acc;
  }, {} as Record<string, typeof sources>);

  return (
    <section id="references" className="min-h-screen py-24 px-8 lg:px-24 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl font-bold mb-16 text-white">References.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Object.entries(groupedSources).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-6">
              <h3 className="text-red-500 font-bold text-sm tracking-widest uppercase border-b border-slate-800 pb-2">{category}</h3>
              <ul className="flex flex-col gap-4">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <div className="flex-1">
                      {item.url !== "#" ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                          <span className="text-sm leading-relaxed">{item.title}</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <span className="text-sm leading-relaxed text-slate-400">{item.title}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}