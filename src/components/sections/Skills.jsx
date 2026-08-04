import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import Tag from '../ui/Tag.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { skillGroups } from '../../data/skills.js'
import styles from './Skills.module.css'

export default function Skills() {
  const { t } = useI18n()

  return (
    <Container as="section" id="skills" className="section">
      <SectionTitle
        title={t('skills_title')}
        subtitle={t('skills_subtitle')}
        id="skills-title"
      />

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.group}>
            <h3 className={styles.groupLabel}>{t(group.labelKey)}</h3>
            <ul className={styles.tags}>
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
