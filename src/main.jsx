import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, ThemeConfig, initThemeMode } from 'flowbite-react'
import './index.css'
import App from './App.jsx'

initThemeMode({ version: 4, defaultMode: 'auto' })

// Flowbite Timeline defaults use undefined `primary-*` colors and a white ring
// meant for bare page backgrounds — override to match GlassCard + site accents.
const theme = {
  timeline: {
    root: {
      direction: {
        vertical: "relative border-l border-slate-400 dark:border-slate-600",
      },
    },
    item: {
      point: {
        marker: {
          icon: {
            base: "h-3 w-3 text-indigo-700 dark:text-indigo-300",
            wrapper:
              "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 ring-8 ring-slate-200 dark:bg-indigo-900 dark:ring-slate-800",
          },
        },
      },
    },
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeConfig mode="auto" />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
