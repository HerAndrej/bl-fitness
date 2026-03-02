import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Results from '../components/Results';
import Plans from '../components/Plans';
import Quiz from '../components/Quiz';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StickyBar from '../components/StickyBar';

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Plans />
        <Quiz />
        {/* Phase 3 new sections */}
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {/* Floating elements */}
      <WhatsAppFloat />
      <StickyBar />
    </div>
  );
}
