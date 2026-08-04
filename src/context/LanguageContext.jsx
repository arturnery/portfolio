import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export const LANGUAGES = ['pt', 'en']

/** Saved choice > Portuguese (default). */
function getInitialLanguage() {
  if (typeof window === 'undefined') return 'pt'
  const saved = localStorage.getItem('lang')
  return LANGUAGES.includes(saved) ? saved : 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  // Keep <html lang> accurate (good for SEO + screen readers) and persist.
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLanguage = () =>
    setLang((l) => (l === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
