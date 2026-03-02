import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export default function Testimonials() {
    const { t } = useLanguage();

    const testimonials = [
        { name: t.testimonials.c1Name, plan: t.testimonials.c1Plan, quote: t.testimonials.c1Quote, rating: 5 },
        { name: t.testimonials.c2Name, plan: t.testimonials.c2Plan, quote: t.testimonials.c2Quote, rating: 5 },
        { name: t.testimonials.c3Name, plan: t.testimonials.c3Plan, quote: t.testimonials.c3Quote, rating: 5 },
        { name: t.testimonials.c4Name, plan: t.testimonials.c4Plan, quote: t.testimonials.c4Quote, rating: 5 },
        { name: t.testimonials.c5Name, plan: t.testimonials.c5Plan, quote: t.testimonials.c5Quote, rating: 5 },
    ];

    // Generate initials-based avatar
    const getInitials = (name: string) =>
        name.split(' ').map(n => n[0]).join('').toUpperCase();

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-white mb-4 section-heading uppercase"
                    >
                        <span>{t.testimonials.title1} </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">
                            {t.testimonials.title2}
                        </span>
                    </motion.h2>
                    <p className="text-lg text-gray-400">{t.testimonials.sub}</p>
                </div>

                {/* 3-col grid on large screens, 2-col on md, 1-col on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col gap-4 hover:border-orange-500/50 transition-colors"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5">
                                {Array(client.rating).fill(null).map((_, i) => (
                                    <span key={i} className="text-orange-400 text-lg" aria-hidden="true">★</span>
                                ))}
                                <span className="sr-only">{client.rating} out of 5 stars</span>
                            </div>

                            {/* Quote */}
                            <p className="text-gray-300 text-base leading-relaxed flex-1">
                                "{client.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-2 border-t border-gray-700">
                                {/* Initials avatar */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-sky-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                                    <span className="text-white text-sm font-bold">{getInitials(client.name)}</span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{client.name}</p>
                                    <p className="text-orange-400 text-xs font-medium">{client.plan}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
