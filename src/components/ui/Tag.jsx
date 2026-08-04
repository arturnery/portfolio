import styles from './Tag.module.css'

/** A monospace stack/tech tag (the "dev" detail of this visual direction). */
export default function Tag({ children }) {
  return <li className={styles.tag}>{children}</li>
}
