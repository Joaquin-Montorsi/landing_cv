import { DarkThemeToggle } from "flowbite-react"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Languages from "./components/Languages"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="flex justify-end p-4">
        <DarkThemeToggle />
      </header>

      <main className="divide-y divide-gray-200 dark:divide-gray-700">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Joaquín Montorsi
      </footer>
    </div>
  )
}

export default App
