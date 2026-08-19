import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import DigitalShift from '@/components/sections/DigitalShift';
import WhatIsQris from '@/components/sections/WhatIsQris';
import EconomicImpact from '@/components/sections/EconomicImpact';
import EconomicTheory from '@/components/sections/EconomicTheory';
import CrossBorder from '@/components/sections/CrossBorder';
import LocalCurrency from '@/components/sections/LocalCurrency';
import Resilience from '@/components/sections/Resilience';
import PresentationMode from '@/components/PresentationMode';

// 'references' dihapus dari daftar
const sectionIds = [
  'hero',
  'digital-shift',
  'what-is-qris',
  'economic-impact',
  'economic-theory',
  'cross-border',
  'lct',
  'resilience'
];

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <PresentationMode sectionIds={sectionIds}>
        <Hero />
        <DigitalShift />
        <WhatIsQris />
        <EconomicImpact />
        <EconomicTheory />
        <CrossBorder />
        <LocalCurrency />
        <Resilience />
      </PresentationMode>
    </main>
  );
}