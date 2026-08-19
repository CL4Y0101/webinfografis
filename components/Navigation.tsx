"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'hero', label: 'Start' },
  { id: 'digital-shift', label: 'Shift' },
  { id: 'economic-impact', label: 'Impact' },
  { id: 'economic-theory', label: 'Economics' },
  { id: 'cross-border', label: 'Cross-Border' },
  { id: 'lct', label: 'LCT' },
  { id: 'resilience', label: 'Resilience' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Tutup menu mobile setelah diklik
  };

  return (
    <>
      {/* NAVBAR ATAS */}
      <nav className={`fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 text-slate-500 py-4 shadow-sm' : 'bg-transparent text-slate-500'
      }`}>
        <div className="text-slate-900 font-bold z-50">QRIS Report</div>
        
        {/* MENU DESKTOP (Sembunyi di Mobile) */}
        <div className="hidden lg:flex gap-6 z-50">
          {links.filter(link => link.id !== 'hero').map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`transition-colors duration-300 ${activeSection === link.id ? 'text-red-600' : 'hover:text-slate-900'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* TOMBOL HAMBURGER MOBILE (Sembunyi di Desktop) */}
        <button 
          className="lg:hidden z-50 p-2 -mr-2 text-slate-900 hover:text-red-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* MENU MOBILE DROP-DOWN FULL SCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-24 pb-8 px-8 flex flex-col gap-8 lg:hidden border-b border-slate-100 shadow-2xl overflow-y-auto h-screen"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-left text-2xl font-serif font-bold tracking-wide transition-colors duration-300 border-b border-slate-200 pb-4 ${
                  activeSection === link.id ? 'text-red-600' : 'text-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}