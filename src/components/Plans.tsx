import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Plane, Briefcase, Gem, CheckCircle2, XCircle, Star } from 'lucide-react';

export default function Plans() {
  const { t } = useLanguage();
  const [isAED, setIsAED] = useState(true);
  const [mindMuscleDuration, setMindMuscleDuration] = useState<'6' | '12'>('6');

  const [addons, setAddons] = useState({
    nutrition: false,
    checkin: false,
    whatsapp: false,
    lifestyle: false
  });

  const currency = isAED ? 'AED' : 'USD';
  const rate = 3.67;

  const getPrice = (aedPrice: number) => {
    return isAED ? aedPrice : Math.round(aedPrice / rate);
  };

  const busyBasePrice = 500;
  const busyTotal = busyBasePrice +
    (addons.nutrition ? 500 : 0) +
    (addons.checkin ? 150 : 0) +
    (addons.whatsapp ? 300 : 0) +
    (addons.lifestyle ? 300 : 0);

  const mmPrice = mindMuscleDuration === '6' ? 7340 : 11010;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 section-heading uppercase">
            <span>{t.plans.title1} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">{t.plans.title2}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t.plans.sub}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-3 mb-16">
          <span className="text-lg font-semibold text-gray-400">USD</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isAED} onChange={() => setIsAED(!isAED)} className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
          </label>
          <span className="text-lg font-semibold text-white">AED</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 items-start">
          {/* Cabin Crew */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg flex flex-col hover:border-orange-500 transition-colors relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 bg-gray-700 px-3 py-1 rounded-bl-lg text-xs font-bold text-gray-300 uppercase tracking-wider">
              SPECIFIC
            </div>
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                <Plane size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">CABIN CREW FITNESS</h3>
              <p className="text-sm text-gray-400 mt-2">Tailored specifically for the aviation lifestyle.</p>
            </div>
            <div className="flex-grow">
              <div className="text-center mb-8">
                <p className="text-4xl font-extrabold text-white">
                  {getPrice(160).toLocaleString('en-US')}
                  <span className="text-base font-medium text-gray-400 ml-1">{currency}/mo</span>
                </p>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-400 mr-2 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <span>Structured 1-Month Plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-400 mr-2 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <span>For Gym, Home, or Layover</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-400 mr-2 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <span>Adaptable to any time zone</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-gray-500 mr-2 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <span className="text-gray-500">No Nutrition Plan included</span>
                </li>
              </ul>
            </div>
            <button onClick={scrollToContact} className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-4 rounded-xl transition-colors uppercase">
              GET ON BOARD
            </button>
          </motion.div>

          {/* Busy But Strong */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 text-white p-8 rounded-2xl border-4 border-orange-500 shadow-2xl flex flex-col hover:border-orange-400 transition-colors relative transform lg:-translate-y-4 z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
              <span className="bg-gradient-to-r from-orange-500 to-sky-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase shadow-lg tracking-widest">
                BEST SELLER • CUSTOMIZABLE
              </span>
            </div>
            <div className="mb-6 text-center mt-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 text-orange-500 mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">BUSY BUT STRONG</h3>
              <p className="text-sm text-gray-400 mt-2">Build your perfect plan based on your time & needs.</p>
            </div>
            <div className="flex-grow">
              <div className="text-center mb-8 p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">YOUR CUSTOM PRICE</p>
                <p className="text-5xl font-black text-white">
                  {getPrice(busyTotal).toLocaleString('en-US')}
                  <span className="text-lg font-medium text-gray-400 ml-2">{currency}</span>
                </p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg opacity-75 cursor-not-allowed">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold">WORKOUT PLAN (BASE)</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400">{getPrice(500)} {currency}</span>
                </div>

                {[
                  { id: 'nutrition', label: 'NUTRITION PLAN', price: 500 },
                  { id: 'checkin', label: 'WEEKLY CHECK-INS', price: 150 },
                  { id: 'whatsapp', label: 'ACCOUNTABILITY SUPPORT', desc: 'Unlimited WhatsApp & Form Analysis', price: 300 },
                  { id: 'lifestyle', label: 'MINDSET & LIFESTYLE', desc: 'Sleep, Stress, Habits Coaching', price: 300 }
                ].map((addon) => (
                  <label key={addon.id} className="cursor-pointer block relative group">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={addons[addon.id as keyof typeof addons]}
                      onChange={(e) => setAddons({ ...addons, [addon.id]: e.target.checked })}
                    />
                    <div className={`flex items-center justify-between p-3 rounded-lg border transition-all ${addons[addon.id as keyof typeof addons] ? 'bg-orange-500/10 border-orange-500' : 'bg-gray-800 border-gray-700 hover:border-orange-500/50'}`}>
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 transition-colors ${addons[addon.id as keyof typeof addons] ? 'bg-orange-500 border-orange-500 text-white' : 'border-gray-500 text-transparent'}`}>
                          <CheckCircle2 size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{addon.label}</span>
                          {addon.desc && <span className="text-[10px] text-gray-400">{addon.desc}</span>}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-orange-400">+{getPrice(addon.price)} {currency}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <button onClick={scrollToContact} className="w-full text-center bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-bold px-6 py-4 rounded-xl transition-colors shadow-lg uppercase">
              BUILD MY PLAN
            </button>
          </motion.div>

          {/* Mind & Muscle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg flex flex-col hover:border-orange-500 transition-colors relative h-full"
          >
            <div className="absolute top-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold uppercase tracking-wider">
              ELITE
            </div>
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-sky-400 mb-4">
                <Gem size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white">MIND &amp; MUSCLE</h3>
              <p className="text-sm text-gray-400 mt-2">The complete transformation experience.</p>
            </div>
            <div className="flex-grow">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-700 p-1 rounded-lg inline-flex">
                  <button
                    onClick={() => setMindMuscleDuration('6')}
                    className={`px-4 py-1 rounded-md text-sm transition-all ${mindMuscleDuration === '6' ? 'bg-gray-900 shadow-sm text-white font-bold' : 'text-gray-400 font-medium hover:text-white'}`}
                  >
                    6 MONTHS
                  </button>
                  <button
                    onClick={() => setMindMuscleDuration('12')}
                    className={`px-4 py-1 rounded-md text-sm transition-all ${mindMuscleDuration === '12' ? 'bg-gray-900 shadow-sm text-white font-bold' : 'text-gray-400 font-medium hover:text-white'}`}
                  >
                    12 MONTHS
                  </button>
                </div>
              </div>
              <div className="text-center mb-8">
                <p className="text-4xl font-black text-white">
                  {getPrice(mmPrice).toLocaleString('en-US')}
                  <span className="text-base font-medium text-gray-400 ml-1">{currency}</span>
                </p>
                <p className="text-xs text-green-600 font-semibold mt-2 bg-green-50 inline-block px-2 py-1 rounded">
                  PAID UPFRONT • ALL INCLUSIVE
                </p>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li className="flex items-start">
                  <Star className="text-orange-400 mr-2 flex-shrink-0 mt-0.5 fill-orange-400" size={18} aria-hidden="true" />
                  <span><b>PERSONALIZED WORKOUT PLANS</b> for {mindMuscleDuration === '6' ? '6 Months' : 'Whole Year (12 Months)'}</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-orange-400 mr-2 flex-shrink-0 mt-0.5 fill-orange-400" size={18} aria-hidden="true" />
                  <span><b>NUTRITION PLAN</b> tailored to your Goal &amp; Desired Outcome</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-orange-400 mr-2 flex-shrink-0 mt-0.5 fill-orange-400" size={18} aria-hidden="true" />
                  <span><b>PRIORITY SUPPORT:</b> 24/7 WhatsApp &amp; Form Analysis</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-orange-400 mr-2 flex-shrink-0 mt-0.5 fill-orange-400" size={18} aria-hidden="true" />
                  <span><b>MINDSET COACHING:</b> Stress &amp; Sleep Mastery</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-orange-400 mr-2 flex-shrink-0 mt-0.5 fill-orange-400" size={18} aria-hidden="true" />
                  <span>Quarterly Deep-Dive Strategy Call</span>
                </li>
              </ul>
            </div>
            <button onClick={scrollToContact} className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-colors uppercase">
              COMMIT TO CHANGE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
