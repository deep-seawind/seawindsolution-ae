"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    
    // Common
    'common.search': 'Search here...',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.followUs': 'Follow Us',
    'common.contactInfo': 'Contact Info',
    'common.searchNow': 'Search Now!',
  },
  AR: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.portfolio': 'أعمالنا',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    
    // Common
    'common.search': 'ابحث هنا...',
    'common.phone': 'الهاتف',
    'common.email': 'البريد الإلكتروني',
    'common.followUs': 'تابعنا',
    'common.contactInfo': 'معلومات الاتصال',
    'common.searchNow': 'ابحث الآن!',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'EN' || savedLang === 'AR')) {
      setLanguage(savedLang);
      document.documentElement.dir = savedLang === 'AR' ? 'rtl' : 'ltr';
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};