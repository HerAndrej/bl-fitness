import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center justify-center md:justify-start font-black text-2xl tracking-tighter text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">BL FITNESS</span>
            </a>
            <p className="text-gray-400 mt-4 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a href="https://www.instagram.com/b.lila.fitness" target="_blank" rel="noreferrer" aria-label="Follow BL FITNESS on Instagram" className="text-gray-500 hover:text-sky-500 transition-colors">
                <Instagram size={24} aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@b-lilafitness" target="_blank" rel="noreferrer" aria-label="BL FITNESS on YouTube" className="text-gray-500 hover:text-red-500 transition-colors">
                <Youtube size={24} aria-hidden="true" />
              </a>
              <a href="https://wa.me/971588258315" target="_blank" rel="noreferrer" aria-label="Chat with BL FITNESS on WhatsApp" className="text-gray-500 hover:text-green-500 transition-colors">
                <MessageCircle size={24} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase">QUICK LINKS</h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">{t.nav.services}</button>
              <button onClick={() => scrollToSection('plans')} className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">{t.nav.plans}</button>
              <button onClick={() => scrollToSection('results')} className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">{t.results.title2}</button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase">LEGAL & INFO</h4>
            <nav className="space-y-3">
              <button className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">TERMS OF SERVICE</button>
              <button className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">DISCLAIMER</button>
              <button className="text-gray-400 hover:text-orange-500 transition-colors block text-sm uppercase">PRIVACY POLICY</button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase">CONTACT</h4>
            <p className="text-gray-400 text-sm mb-2">
              <b>Email:</b> <a href="mailto:contact@b-lilafitness.com" className="hover:text-purple-600 transition-colors">contact@b-lilafitness.com</a>
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <b>Phone:</b> <a href="tel:+971588258315" className="hover:text-purple-600 transition-colors">+971 58 825 8315</a>
            </p>
            <p className="text-gray-400 text-sm">
              <b>Location:</b> Dubai, UAE
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BL FITNESS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
