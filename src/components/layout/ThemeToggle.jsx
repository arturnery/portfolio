import { useTheme } from '../../context/ThemeContext.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { SunIcon, MoonIcon } from '../ui/Icons.jsx'
import styles from './Toggles.module.css'

/** Icon button that flips between light and dark themes. */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.iconBtn}
      onClick={toggleTheme}
      aria-label={t('toggle_theme')}
      title={t('toggle_theme')}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
