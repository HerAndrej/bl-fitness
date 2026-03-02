import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './locales/en';
import { sr } from './locales/sr';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'en' | 'sr';
type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    if (location.pathname.startsWith('/sr')) {
      setLangState('sr');
    } else {
      setLangState('en');
    }
  }, [location.pathname]);

  const setLang = (newLang: Language) => {
    if (newLang === 'sr' && lang !== 'sr') {
      navigate('/sr' + location.pathname.replace(/^\/en/, ''));
    } else if (newLang === 'en' && lang !== 'en') {
      navigate(location.pathname.replace(/^\/sr/, '') || '/');
    }
    setLangState(newLang);
  };

  const t = lang === 'sr' ? sr : en;

  // T-016: Keep html[lang] in sync for screen readers
  useEffect(() => {
    document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
