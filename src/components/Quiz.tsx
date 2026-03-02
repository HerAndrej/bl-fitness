import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export default function Quiz() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const [answers, setAnswers] = useState({
    goal: '',
    challenge: [] as string[],
    priority: ''
  });

  const expertTips: Record<string, string> = {
    "Nutrition": "Stop guessing your macros. Focus on getting 30g of protein in every meal to manage hunger and accelerate recovery. This is non-negotiable for results.",
    "Time/Consistency": "Use the '10-minute rule'. If you only have 10 minutes, do *something*. Consistency in showing up beats a perfect, long session you skip.",
    "Mindset/Motivation": "Motivation is a feeling, consistency is a skill. Implement a 'trigger-action' habit: when X happens (trigger), I do Y (action). E.g., When I finish work, I put on my gym clothes.",
    "Pain/Injury": "Pain is information. Before increasing intensity, invest 10 minutes daily into targeted mobility and prehab work on your problem area. Smart training is superior to hard training.",
    "Sleep/Recovery": "Establish a firm 60-minute 'Digital Sunset'. Stop consuming screens (phone, tablet, TV) one hour before bed. This is the single fastest way to improve recovery.",
    "Stress Management": "Schedule 15 minutes of mindful breathing or journaling daily. Stress doesn't just feel bad; it actively blocks fat loss and muscle gain through cortisol. Manage stress, manage body composition.",
    "Organization/Routines": "If organization is key, start with 'habit stacking'. Link the new habit (e.g., packing lunch) immediately after an established routine (e.g., brushing teeth). This makes consistency automatic."
  };

  const handleNext = () => {
    if (step === 1 && !answers.goal) { setError('Please select one option to proceed.'); return; }
    if (step === 2 && answers.challenge.length === 0) { setError('Please select at least one challenge to proceed.'); return; }
    if (step === 3 && !answers.priority) { setError('Please select your top priority to proceed.'); return; }
    setError('');
    setStep(prev => prev + 1);
  };

  const handleBack = () => { setError(''); setStep(prev => prev - 1); };

  const startOver = () => {
    setAnswers({ goal: '', challenge: [], priority: '' });
    setStep(1);
    setError('');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const messageEl = document.getElementById('message') as HTMLTextAreaElement;
      if (messageEl) {
        messageEl.value = `Hi, I completed your lifestyle assessment!\n\nGoal: ${answers.goal}\nBiggest Challenge(s): ${answers.challenge.join(', ') || 'None'}\nTop Priority: ${answers.priority}\n\nI am interested in the recommended plan.`;
      }
    }
  };

  const getResult = () => {
    const challenges = answers.challenge;
    let recommendedPlan = "Busy But Strong";
    let description = "Based on your lifestyle and ambition, the **Busy But Strong** package, customized with the right add-ons, is your ideal starting point.";
    const highTouchChallenges = ["Mindset/Motivation", "Sleep/Recovery", "Stress Management"];
    const complexNeed = challenges.length >= 2 || highTouchChallenges.some(c => challenges.includes(c)) || answers.priority !== "None";
    if (challenges.includes("Pain/Injury")) {
      recommendedPlan = "Elite 1-on-1 Training";
      description = "For injury/pain, nothing replaces direct, in-person coaching to ensure safe form and effective rehabilitation exercises. Let's build a pain-free foundation.";
    } else if (complexNeed) {
      recommendedPlan = "Mind & Muscle Transformation";
      description = "Your goals are rooted in consistency and lifestyle change. The **Mind & Muscle Transformation** is built for this — long-term, comprehensive habit coaching.";
    } else if (answers.goal === "General Health" && challenges.length === 0) {
      recommendedPlan = "Cabin Crew Fitness";
      description = "For general structure and accountability, the **Cabin Crew Fitness** plan offers a quick, efficient monthly template.";
    } else if (challenges.includes("Nutrition")) {
      recommendedPlan = "Busy But Strong";
      description = "Start with the **Busy But Strong** plan and include the **Nutrition Plan** add-on to immediately fix the diet struggle.";
    }
    let tipKey = challenges.length > 0 ? challenges[0] : (answers.priority !== "None" ? answers.priority : "");
    const tip = expertTips[tipKey] || "Consistency is the key to any transformation. Focus on small wins daily.";
    return { recommendedPlan, description, tip };
  };

  // T-008: shared class for option labels on dark bg
  const optionClass = (selected: boolean) =>
    `block p-4 md:p-6 border-2 rounded-xl cursor-pointer transition-all font-semibold ${selected
      ? 'border-orange-500 bg-orange-900/20 text-orange-300'
      : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-orange-500/60'}`;

  return (
    // T-008: dark section
    <section id="quiz" className="py-20 md:py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 section-heading uppercase">
            <span>{t.quiz.title1} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500">{t.quiz.title2}</span>
          </h2>
          <p className="text-lg text-gray-400">{t.quiz.sub}</p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-700 min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <div className="mb-8">
                  <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">STEP 1 OF 3</span>
                  <h3 className="text-3xl font-bold text-white mt-2">{t.quiz.q1Title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'goal-loss', val: 'Weight Loss', label: t.quiz.q1Opt1 },
                    { id: 'goal-gain', val: 'Muscle Gain', label: t.quiz.q1Opt2 },
                    { id: 'goal-health', val: 'General Health', label: t.quiz.q1Opt3 },
                    { id: 'goal-habits', val: 'Better Habits', label: t.quiz.q1Opt4 }
                  ].map(opt => (
                    <label key={opt.id} className={optionClass(answers.goal === opt.val)}>
                      <input type="radio" className="hidden" name="goal" value={opt.val} checked={answers.goal === opt.val} onChange={(e) => setAnswers({ ...answers, goal: e.target.value })} />
                      {opt.label}
                    </label>
                  ))}
                </div>
                {error && <p className="text-red-400 mt-4 text-center font-medium">{error}</p>}
                <div className="text-right mt-8">
                  <button onClick={handleNext} className="bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md uppercase">{t.quiz.btnNext}</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <div className="mb-8">
                  <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">STEP 2 OF 3</span>
                  <h3 className="text-3xl font-bold text-white mt-2">{t.quiz.q2Title}</h3>
                  <p className="text-gray-500 mt-2 text-sm">(SELECT ALL THAT APPLY)</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'chal-nut', val: 'Nutrition', label: t.quiz.q2Opt1 },
                    { id: 'chal-time', val: 'Time/Consistency', label: t.quiz.q2Opt2 },
                    { id: 'chal-mind', val: 'Mindset/Motivation', label: 'I know what to do, but I lack motivation/fall off track easily.' },
                    { id: 'chal-pain', val: 'Pain/Injury', label: 'I have a past injury or chronic pain.' }
                  ].map(opt => (
                    <label key={opt.id} className={optionClass(answers.challenge.includes(opt.val))}>
                      <input type="checkbox" className="hidden" value={opt.val} checked={answers.challenge.includes(opt.val)}
                        onChange={(e) => {
                          const newChal = e.target.checked ? [...answers.challenge, opt.val] : answers.challenge.filter(c => c !== opt.val);
                          setAnswers({ ...answers, challenge: newChal });
                        }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
                {error && <p className="text-red-400 mt-4 text-center font-medium">{error}</p>}
                <div className="flex justify-between mt-8">
                  <button onClick={handleBack} className="text-gray-400 font-semibold hover:text-white transition-colors uppercase">{t.quiz.btnBack}</button>
                  <button onClick={handleNext} className="bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md uppercase">{t.quiz.btnNext}</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <div className="mb-8">
                  <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">STEP 3 OF 3</span>
                  <h3 className="text-3xl font-bold text-white mt-2">{t.quiz.q3Title}</h3>
                  <p className="text-gray-500 mt-2 text-sm">(CHOOSE ONE)</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'pri-sleep', val: 'Sleep/Recovery', label: t.quiz.q3Opt1 },
                    { id: 'pri-stress', val: 'Stress Management', label: t.quiz.q3Opt2 },
                    { id: 'pri-org', val: 'Organization/Routines', label: 'Organization & Routines (Planning meals, schedules, and habits)' },
                    { id: 'pri-none', val: 'None', label: "None / I'm ready to focus entirely on training & diet" }
                  ].map(opt => (
                    <label key={opt.id} className={optionClass(answers.priority === opt.val)}>
                      <input type="radio" className="hidden" name="priority" value={opt.val} checked={answers.priority === opt.val} onChange={(e) => setAnswers({ ...answers, priority: e.target.value })} />
                      {opt.label}
                    </label>
                  ))}
                </div>
                {error && <p className="text-red-400 mt-4 text-center font-medium">{error}</p>}
                <div className="flex justify-between mt-8">
                  <button onClick={handleBack} className="text-gray-400 font-semibold hover:text-white transition-colors uppercase">{t.quiz.btnBack}</button>
                  <button onClick={handleNext} className="bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md uppercase">{t.quiz.btnFinish}</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="text-center">
                <div className="bg-green-900/30 border border-green-700/50 rounded-2xl p-6 mb-8">
                  <h4 className="text-green-400 font-bold text-xl mb-2 flex items-center justify-center gap-2">
                    <Lightbulb size={24} aria-hidden="true" />
                    COACH'S TIP:
                  </h4>
                  <p className="text-gray-300 italic text-lg">"{getResult().tip}"</p>
                </div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-4 uppercase">RECOMMENDED PATH:</h3>
                <h4 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-sky-400 mb-4 uppercase">{getResult().recommendedPlan}</h4>
                <p className="text-gray-400 mb-8 text-lg">{getResult().description}</p>
                <button onClick={scrollToContact} className="w-full text-white bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 font-bold rounded-full text-lg px-5 py-4 transition-colors shadow-lg uppercase">{t.quiz.btnBook}</button>
                <button onClick={startOver} className="text-gray-500 hover:text-gray-300 text-sm mt-6 underline uppercase">START OVER</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
