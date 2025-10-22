import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutHackathon } from './components/AboutHackathon';
import { PathsSection } from './components/PathsSection';
import { GallerySection } from './components/GallerySection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { SectionDivider } from './components/SectionDivider';
import { JourneySection } from './components/JourneySection';
import { PrizesSection } from './components/PrizesSection';
import { PartnersSection } from './components/PartnersSection';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <Hero />
        <AboutHackathon />
        <PathsSection />
        <ObjectivesSection />
        <JourneySection />
        <GallerySection />
        <PrizesSection />
        <PartnersSection />
      </main>
      <Toaster position="top-center" dir="rtl" richColors />
    </div>
  );
}