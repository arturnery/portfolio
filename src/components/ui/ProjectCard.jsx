import styles from './ProjectCard.module.css'
import Tag from './Tag.jsx'
import Carousel from './Carousel.jsx'
import { useI18n } from '../../i18n/useI18n.js'
import { GithubIcon, ExternalLinkIcon, CodeIcon } from './Icons.jsx'

/**
 * Single project card. The SAME component renders both the featured (larger)
 * and the regular grid cards — `featured` only toggles size/layout classes.
 *
 * Buttons for repo/demo render only when those URLs exist in the data, so an
 * academic project without a public demo simply won't show that button.
 */
export default function ProjectCard({ project, featured = false }) {
  const { t, lang } = useI18n()
  const { titulo, descricao, stack, repoUrl, demoUrl } = project

  // Normalize images: accept `imagens` (array) or legacy `imagem` (string).
  const imagens = project.imagens ?? (project.imagem ? [project.imagem] : [])

  const cardClass = `${styles.card} ${featured ? styles.featured : ''}`

  return (
    <article className={cardClass}>
      {/* Carousel (2+ images), single image, or a labelled placeholder */}
      <div className={styles.media}>
        {imagens.length > 1 ? (
          <Carousel
            images={imagens}
            altBase={titulo[lang]}
            autoplay={project.autoplay === true}
          />
        ) : imagens.length === 1 ? (
          <img
            src={imagens[0]}
            alt={`${titulo[lang]} — preview`}
            loading="lazy"
            decoding="async"
            width={featured ? 720 : 480}
            height={featured ? 405 : 270}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <CodeIcon className={styles.placeholderIcon} />
            <span>TODO: imagem</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{titulo[lang]}</h3>
        <p className={styles.desc}>{descricao[lang]}</p>

        <ul className={styles.tags} aria-label="Stack">
          {stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>

        {/* Links — each rendered only if present */}
        {(repoUrl || demoUrl) && (
          <div className={styles.actions}>
            {demoUrl && (
              <a
                className={styles.actionPrimary}
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLinkIcon />
                {t('project_demo')}
              </a>
            )}
            {repoUrl && (
              <a
                className={styles.actionLink}
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                {t('project_repo')}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
