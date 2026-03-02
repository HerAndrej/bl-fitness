import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xvgylwka', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for your message! I will get back to you shortly, usually within 24 hours.');
        form.reset();
      } else {
        const errorData = await response.json();
        setStatus('error');
        setMessage(errorData.error || 'An error occurred while sending the message.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('A network error occurred. Please check your connection.');
    } finally {
      setTimeout(() => { setStatus('idle'); setMessage(''); }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 section-heading uppercase">
            <span>{t.contact.title1} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-gray-600">{t.contact.sub}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* T-009: WhatsApp CTA above the form */}
          <a
            href="https://wa.me/971588258315?text=Hi%2C%20I%27m%20interested%20in%20BL%20FITNESS%20coaching!"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg mb-6 w-full"
          >
            <MessageCircle size={22} aria-hidden="true" />
            {t.contact.whatsappBtn}
          </a>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-gray-400 font-semibold uppercase tracking-widest">{t.contact.or}</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase">{t.contact.formName}</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="e.g. Marko" aria-required="true" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase">{t.contact.formLastname}</label>
                  <input type="text" id="last-name" name="lastName" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="e.g. Petrović" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 uppercase">{t.contact.formEmail}</label>
                <input type="email" id="email" name="_replyto" required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="your.email@example.com" aria-required="true" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 uppercase">{t.contact.formMsg}</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="Tell me about your goals..." aria-required="true"></textarea>
              </div>
              <div className="text-center mt-4">
                <button type="submit" disabled={status === 'loading'} className="bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl uppercase disabled:opacity-70 disabled:hover:scale-100">
                  {status === 'loading' ? 'SENDING...' : t.contact.formBtn}
                </button>
              </div>
              {/* T-016: role="alert" for screen readers */}
              {message && (
                <div role="alert" aria-live="polite" className={`p-4 rounded-lg text-center font-medium ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
