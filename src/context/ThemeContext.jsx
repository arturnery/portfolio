import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

/** Read the initial theme: saved choice > OS preference > light. */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Reflect the theme on <html> and persist it whenever it changes.
  useEffect(() => {
    const root = document.documentElement
    // Briefly enable color transitions so the switch animates smoothly.
    root.classList.add('theme-transition')
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    const timer = window.setTimeout(
      () => root.classList.remove('theme-transition'),
      300,
    )
    return () => window.clearTimeout(timer)
  }, [theme])

  const toggleTheme = () =>
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
