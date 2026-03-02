import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import coachPhoto from '../images/jaucimljude.png';

export default function About() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src={coachPhoto}
                alt="BL FITNESS Coach — personal fitness trainer"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto transition duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 section-heading text-center md:text-left uppercase">
              <span>{t.about.title1} </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">{t.about.title2}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
              {t.about.text1}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium border-l-4 border-orange-500 pl-4 italic">
              {t.about.text2}
            </p>

            {/* Trust Stats Row — T-005 */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '500+', label: t.about.stat1 },
                { value: '5★', label: t.about.stat2 },
                { value: '6yr', label: t.about.stat3 }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 bg-orange-50 border border-orange-100 rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-shadow"
                >
                  <p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="text-orange-500 font-bold hover:text-orange-600 inline-flex items-center transition duration-300 group uppercase"
            >
              <span>{t.about.btn}</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
