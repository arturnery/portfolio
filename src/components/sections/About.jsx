import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import Tag from '../ui/Tag.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { skillGroups } from '../../data/skills.js'
import styles from './About.module.css'

export default function About() {
  const { t } = useI18n()

  // Show a short highlight of core tech (languages + front-end) in About.
  const coreTech = skillGroups
    .filter((g) => g.id === 'languages' || g.id === 'frontend')
    .flatMap((g) => g.items)
    .slice(0, 8)

  return (
    <Container as="section" id="about" className="section">
      <SectionTitle title={t('about_title')} id="about-title" />

      <div className={styles.grid}>
        <p className={styles.bio}>{t('about_bio')}</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardLabel}>{t('about_seeking_label')}</h3>
            <p className={styles.cardText}>{t('about_seeking')}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardLabel}>{t('about_tech_label')}</h3>
            <ul className={styles.tags}>
              {coreTech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
