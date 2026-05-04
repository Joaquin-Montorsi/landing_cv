import Page from "./components/ui/Page"
import ThemeSync from "./components/ui/ThemeSync"
import ThemeToggle from "./components/ui/ThemeToggle"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Languages from "./components/Languages"
import Personal from "./components/Personal"
import Contact from "./components/Contact"
import { profile } from "./data"

function App() {
  return (
    <>
      <ThemeSync />
      <Page>
        <nav className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-400/50 bg-slate-200/95 px-6 py-3 backdrop-blur-md dark:border-slate-600/60 dark:bg-slate-900/95">
          <span className="text-lg font-semibold text-gray-950 dark:text-white">
            {profile.name}
          </span>
          <ThemeToggle />
        </nav>

        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Languages />
          <Personal />
          <Contact />
        </main>

        <footer className="mt-8 border-t border-slate-400/50 py-6 text-center text-sm text-gray-700 dark:border-slate-600/60 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Joaquín Montorsi
        </footer>
      </Page>
    </>
  )
}

export default App
