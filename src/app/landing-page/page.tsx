import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CoberturaConsultiva from './components/CoberturaConsultiva';
import OtrosServicios from './components/OtrosServicios';
import TablaComparativa from './components/TablaComparativa';
import LeadForm from './components/LeadForm';
import HeritageSection from './components/HeritageSection';
import FooterSection from './components/FooterSection';

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <NavBar />
      <HeroSection />
      <CoberturaConsultiva />
      <OtrosServicios />
      <TablaComparativa />
      <LeadForm />
      <HeritageSection />
      <FooterSection />
    </main>
  );
}