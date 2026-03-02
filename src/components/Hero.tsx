import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToQuiz = () => {
    const element = document.getElementById('quiz');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-36 pb-32 overflow-hidden bg-gray-900">
      {/* T-016: role="img" + aria-label on background */}
      <div
        role="img"
        aria-label="Professional gym training environment"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/65" aria-hidden="true"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* T-004: Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            <span>{t.hero.title1}</span>
            <br />
            <span>{t.hero.title2} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">
              {t.hero.title3}
            </span>
          </motion.h1>

          {/* T-004: Sub-headline (new) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            {t.hero.sub}
          </motion.p>

          {/* T-004: Social proof line (new) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <span className="text-orange-400 text-xl">★★★★★</span>
            <span className="text-gray-300 text-sm font-medium">{t.hero.proof}</span>
          </motion.div>

          {/* T-004: CTA — gradient + glow shadow */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            onClick={scrollToQuiz}
            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_45px_rgba(14,165,233,0.6)] uppercase"
          >
            {t.hero.btn}
          </motion.button>
        </div>
      </div>

      {/* T-004: Scroll indicator (new) */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to next section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown size={32} aria-hidden="true" />
      </motion.button>
    </section>
  );
}
