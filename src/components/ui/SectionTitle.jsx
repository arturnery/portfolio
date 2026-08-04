import styles from './SectionTitle.module.css'

/**
 * Standard section heading with an optional eyebrow + subtitle.
 * `id` is applied to the <h2> so nav anchors land on the right element.
 */
export default function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <header className={styles.head}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  )
}
