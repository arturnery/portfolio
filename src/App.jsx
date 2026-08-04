import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Projects from './components/sections/Projects.jsx'
import About from './components/sections/About.jsx'
import Experience from './components/sections/Experience.jsx'
import Skills from './components/sections/Skills.jsx'
import Contact from './components/sections/Contact.jsx'
import { useI18n } from './i18n/useI18n.js'

export default function App() {
  const { t } = useI18n()

  return (
    <>
      {/* Keyboard/screen-reader users can jump straight to the content */}
      <a className="skip-link" href="#main">
        {t('skip_to_content')}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
