import { useLanguage } from '../context/LanguageContext.jsx'
import { translations } from './translations.js'

/**
 * Tiny i18n hook — no external library.
 *
 *   const { t, lang } = useI18n()
 *   t('hero_role')        // -> string in the current language
 *
 * Returns the key itself as a visible fallback if a translation is missing,
 * so untranslated strings are easy to spot during development.
 */
export function useI18n() {
  const { lang, setLang, toggleLanguage } = useLanguage()

  const t = (key) => {
    const dict = translations[lang] ?? {}
    return dict[key] ?? key
  }

  return { t, lang, setLang, toggleLanguage }
}
