import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { featuredProjects, otherProjects } from '../../data/projects.js'
import styles from './Projects.module.css'

/*
  Projects = two blocks driven entirely by the data in src/data/projects.js:
    • featuredProjects (destaque: true)  -> highlighted band, larger cards
    • otherProjects     (destaque: false) -> grid below
  Adding a project never requires touching this file.
*/
export default function Projects() {
  const { t } = useI18n()

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <Container>
        <SectionTitle
          title={t('projects_title')}
          subtitle={t('projects_subtitle')}
          id="projects-title"
        />

        {/* ---- Featured / freelance band ---- */}
        {featuredProjects.length > 0 && (
          <div className={styles.block}>
            <div className={styles.blockHead}>
              <h3 className={styles.blockTitle}>
                {t('projects_featured_title')}
              </h3>
              <p className={styles.blockDesc}>{t('projects_featured_desc')}</p>
            </div>

            <div className={styles.featuredList}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* ---- Academic grid ---- */}
        {otherProjects.length > 0 && (
          <div className={styles.block}>
            <div className={styles.blockHead}>
              <h3 className={styles.blockTitle}>
                {t('projects_academic_title')}
              </h3>
              <p className={styles.blockDesc}>{t('projects_academic_desc')}</p>
            </div>

            <div className={styles.grid}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
