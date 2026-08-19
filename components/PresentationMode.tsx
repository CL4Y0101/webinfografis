"use client";
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function PresentationMode({ children, sectionIds }: { children: React.ReactNode, sectionIds: string[] }) {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSection((prev) => Math.min(prev + 1, sectionIds.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sectionIds.length]);

  useEffect(() => {
    const element = document.getElementById(sectionIds[currentSection]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection, sectionIds]);

  return (
    <div className="relative presentation-mode">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40 hidden md:flex">
        {sectionIds.map((id, idx) => (
          <button 
            key={id}
            onClick={() => setCurrentSection(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSection === idx ? 'bg-red-600 scale-150' : 'bg-slate-300'}`}
          />
        ))}
      </div>
      {children}
    </div>
  );
}