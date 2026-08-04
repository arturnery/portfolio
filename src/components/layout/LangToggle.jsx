import { useI18n } from '../../i18n/useI18n.js'
import styles from './Toggles.module.css'

/** Compact PT/EN switch. Shows the language you'll switch TO is highlighted. */
export default function LangToggle() {
  const { lang, toggleLanguage, t } = useI18n()

  return (
    <button
      type="button"
      className={styles.langBtn}
      onClick={toggleLanguage}
      aria-label={t('toggle_lang')}
      title={t('toggle_lang')}
    >
      <span className={lang === 'pt' ? styles.langActive : ''}>PT</span>
      <span className={styles.langSep} aria-hidden="true">
        /
      </span>
      <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
    </button>
  )
}
