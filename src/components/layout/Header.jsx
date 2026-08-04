import { useState } from 'react'
import Container from './Container.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import LangToggle from './LangToggle.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { href: '#projects', key: 'nav_projects' },
  { href: '#about', key: 'nav_about' },
  { href: '#experience', key: 'nav_experience' },
  { href: '#skills', key: 'nav_skills' },
  { href: '#contact', key: 'nav_contact' },
]

/** Sticky top bar: brand, in-page nav, language + theme toggles. */
export default function Header() {
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  // Falls back to initials if the avatar image is missing or fails to load.
  const [avatarOk, setAvatarOk] = useState(Boolean(profile.avatar))

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label={profile.name}>
          {avatarOk ? (
            <img
              className={styles.brandAvatar}
              src={profile.avatar}
              alt={profile.name}
              width={34}
              height={34}
              onError={() => setAvatarOk(false)}
            />
          ) : (
            <span className={styles.brandMark}>{initials}</span>
          )}
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        {/* Primary navigation */}
        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Primária"
        >
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.controls}>
          <LangToggle />
          <ThemeToggle />
          {/* Hamburger — only visible on mobile via CSS */}
          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={menuOpen ? styles.burgerOpen : ''} />
          </button>
        </div>
      </Container>
    </header>
  )
}
