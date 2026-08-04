import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Global styles: tokens first (variables), then theme overrides, then base.
import './styles/tokens.css'
import './styles/themes.css'
import './styles/global.css'

import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
