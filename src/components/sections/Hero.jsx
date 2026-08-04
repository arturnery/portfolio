import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { profile } from '../../data/profile.js'
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from '../ui/Icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useI18n()
  const { github, linkedin } = profile.links

  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            {t('hero_role')}
          </p>

          <h1 className={styles.name}>{profile.name}</h1>

          <p className={styles.tagline}>{t('hero_tagline')}</p>

          <div className={styles.ctas}>
            <Button href="#projects" iconRight={<ArrowRightIcon />}>
              {t('hero_cta_projects')}
            </Button>
            <Button href={profile.cvUrl} variant="secondary" icon={<DownloadIcon />} download>
              {t('hero_cta_cv')}
            </Button>

            {/* Icon-only social links */}
            <div className={styles.socials}>
              {github && (
                <a
                  className={styles.socialLink}
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
              )}
              {linkedin && (
                <a
                  className={styles.socialLink}
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
