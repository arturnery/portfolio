import styles from './Container.module.css'

/**
 * Centers content and caps its width (--container). The `as` prop lets a
 * container be a semantic element (section, header, footer, main...).
 */
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.container} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
