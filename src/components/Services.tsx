import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Dumbbell, Globe, Salad } from 'lucide-react';

const serviceIcons = [Dumbbell, Globe, Salad];

export default function Services() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: t.services.s1Title,
      desc: t.services.s1Desc,
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t.services.s2Title,
      desc: t.services.s2Desc,
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t.services.s3Title,
      desc: t.services.s3Desc,
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 section-heading uppercase">
            <span>{t.services.title1} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">{t.services.title2}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.services.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative w-full h-[400px] bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer"
              >
                {/* T-012: Service icon badge top-left */}
                <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                  <Icon size={20} className="text-orange-500" aria-hidden="true" />
                </div>

                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-[120%] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-sm transform translate-y-[60%] transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 opacity-0 transition-opacity duration-300 delay-150 group-hover:opacity-100 mb-4">
                    {service.desc}
                  </p>
                  {/* T-012: Hover CTA button */}
                  <button
                    onClick={scrollToContact}
                    className="opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100 inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-sky-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:from-orange-600 hover:to-sky-600"
                  >
                    {t.services.cta} →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
