import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'fr',
    toggleLanguage: () => { },
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('fr');
    const toggleLanguage = () => setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);