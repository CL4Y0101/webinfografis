"use client";
import { useState, useEffect } from 'react';

const links = [
  { id: 'hero', label: 'Start' },
  { id: 'digital-shift', label: 'Shift' },
  { id: 'economic-impact', label: 'Impact' },
  { id: 'economic-theory', label: 'Economics' },
  { id: 'cross-border', label: 'Cross-Border' },
  { id: 'lct', label: 'LCT' },
  { id: 'resilience', label: 'Resilience' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Deteksi section aktif
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 px-8 py-4 flex justify-between items-center text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 text-slate-500 py-3 shadow-sm' : 'bg-transparent text-slate-500'
    }`}>
      <div className="text-slate-900 font-bold">QRIS Report</div>
      <div className="hidden lg:flex gap-6">
        {links.filter(link => link.id !== 'hero').map((link) => (
          <button
            key={link.id}
            onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`transition-colors duration-300 ${activeSection === link.id ? 'text-red-600' : 'hover:text-slate-900'}`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}