import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* T-003: scrolled bg → dark (bg-gray-900/95) instead of white */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center font-black text-2xl tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">BL FITNESS</span>
          </a>

          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8 items-center">
              {/* T-003: link colors adapt to scroll state */}
              {['home', 'about', 'services', 'plans'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-semibold tracking-widest uppercase transition-colors ${isScrolled
                    ? 'text-gray-200 hover:text-orange-400'
                    : 'text-white hover:text-orange-400'
                    }`}
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
              {/* T-003: CTA → purple gradient instead of solid black */}
              <button onClick={() => scrollToSection('quiz')} className="bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-semibold px-5 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2 text-sm uppercase tracking-wider">
                <Zap size={16} aria-hidden="true" />
                <span>{t.nav.strategy}</span>
              </button>
            </nav>

            <div className="hidden md:flex ml-8 items-center gap-3 border-l pl-6 border-gray-700/50">
              <button
                onClick={() => setLang('en')}
                aria-label="Switch to English"
                className={`text-xl transition-all ${lang === 'en' ? 'grayscale-0 scale-110' : 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100'}`}
              >🇬🇧</button>
              <button
                onClick={() => setLang('sr')}
                aria-label="Prebaci na srpski"
                className={`text-xl transition-all ${lang === 'sr' ? 'grayscale-0 scale-110' : 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100'}`}
              >🇷🇸</button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setLang('en')} aria-label="Switch to English" className={`text-xl transition-all ${lang === 'en' ? 'grayscale-0' : 'grayscale opacity-50'}`}>🇬🇧</button>
                <button onClick={() => setLang('sr')} aria-label="Prebaci na srpski" className={`text-xl transition-all ${lang === 'sr' ? 'grayscale-0' : 'grayscale opacity-50'}`}>🇷🇸</button>
              </div>
              {/* T-016: aria-expanded + aria-controls + aria-label */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className={isScrolled ? 'text-white p-1' : 'text-gray-900 p-1'}
              >
                {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-gray-900/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-400 transition-colors text-2xl font-bold tracking-widest uppercase">{t.nav.home}</button>
        <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition-colors text-2xl font-bold tracking-widest uppercase">{t.nav.about}</button>
        <button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-400 transition-colors text-2xl font-bold tracking-widest uppercase">{t.nav.services}</button>
        <button onClick={() => scrollToSection('plans')} className="text-white hover:text-orange-400 transition-colors text-2xl font-bold tracking-widest uppercase">{t.nav.plans}</button>
        <button onClick={() => scrollToSection('quiz')} className="text-white hover:text-orange-400 transition-colors text-2xl font-bold tracking-widest uppercase">{t.nav.quiz}</button>
        <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-400 transition-colors text-2xl font-bold tracking-widest uppercase">{t.nav.contact}</button>
      </div>
    </>
  );
}
