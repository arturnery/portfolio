import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import {
  workExperience,
  education,
  languages,
} from '../../data/experience.js'
import styles from './Experience.module.css'

export default function Experience() {
  const { t, lang } = useI18n()

  return (
    <Container as="section" id="experience" className="section">
      <SectionTitle
        title={t('experience_title')}
        subtitle={t('experience_subtitle')}
        id="experience-title"
      />

      <div className={styles.layout}>
        {/* ---- Work experience ---- */}
        <div className={styles.block}>
          <h3 className={styles.blockLabel}>{t('experience_work_title')}</h3>
          <ol className={styles.timeline}>
            {workExperience.map((item) => (
              <li key={item.id} className={styles.entry}>
                <div className={styles.meta}>
                  <time className={styles.period}>{item.period[lang]}</time>
                </div>
                <div className={styles.body}>
                  <h4 className={styles.entryTitle}>{item.title[lang]}</h4>
                  <ul className={styles.highlights}>
                    {item.highlights[lang].map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ---- Education + languages side by side on desktop ---- */}
        <div className={styles.bottom}>
          <div className={styles.block}>
            <h3 className={styles.blockLabel}>{t('experience_education_title')}</h3>
            <ul className={styles.educationList}>
              {education.map((item) => (
                <li key={item.id} className={styles.educationItem}>
                  <div className={styles.educationHead}>
                    <span className={styles.period}>{item.period}</span>
                    <span className={styles.status}>{item.status[lang]}</span>
                  </div>
                  <p className={styles.educationDegree}>{item.degree[lang]}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockLabel}>{t('experience_languages_title')}</h3>
            <ul className={styles.languageList}>
              {languages.map((item) => (
                <li key={item.id} className={styles.languageItem}>
                  <span className={styles.languageName}>{item.name[lang]}</span>
                  <span className={styles.languageLevel}>{item.level[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
