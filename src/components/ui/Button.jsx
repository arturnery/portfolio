import styles from './Button.module.css'

/**
 * Polymorphic button/link.
 *   - Pass `href` to render an <a> (used for external links / downloads).
 *   - Otherwise renders a <button>.
 * Variants: 'primary' (filled accent) | 'secondary' (outline) | 'ghost'.
 */
export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  icon,
  iconRight,
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`
  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  )

  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  )
}
