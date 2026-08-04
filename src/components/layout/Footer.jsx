import Container from './Container.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import { GithubIcon, LinkedinIcon, MailIcon } from '../ui/Icons.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  const { github, linkedin } = profile.links

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.copy}>
          © {year} {profile.name}. {t('footer_rights')}
        </p>

        <ul className={styles.social} aria-label="Redes sociais">
          {github && (
            <li>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${profile.email}`} aria-label="E-mail">
              <MailIcon />
            </a>
          </li>
        </ul>

        <p className={styles.built}>{t('footer_built')}</p>
      </Container>
    </footer>
  )
}
