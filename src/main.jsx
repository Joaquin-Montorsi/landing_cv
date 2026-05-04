import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, ThemeConfig, initThemeMode } from 'flowbite-react'
import './index.css'
import App from './App.jsx'

initThemeMode({ version: 4, defaultMode: 'auto' })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeConfig mode="auto" />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
