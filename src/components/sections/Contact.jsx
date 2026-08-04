import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowRightIcon,
} from '../ui/Icons.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useI18n()
  const { github, linkedin } = profile.links

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <Container>
        <div className={styles.card}>
          <h2 className={styles.title}>{t('contact_title')}</h2>
          <p className={styles.lead}>{t('contact_subtitle')}</p>

          <div className={styles.actions}>
            <Button
              href={`mailto:${profile.email}`}
              icon={<MailIcon />}
              iconRight={<ArrowRightIcon />}
            >
              {t('contact_email_cta')}
            </Button>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <ul className={styles.social} aria-label="Redes sociais">
            {github && (
              <li>
                <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </section>
  )
}
