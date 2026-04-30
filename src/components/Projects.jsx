import { HiOutlineExternalLink } from "react-icons/hi"
import { VscTools } from "react-icons/vsc"
import { projects } from "../data"

export default function Projects() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {projects.map(({ name, url }) =>
          url ? (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <HiOutlineExternalLink className="h-4 w-4" />
              {name}
            </a>
          ) : (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-500"
            >
              <VscTools className="h-4 w-4" />
              {name}
              <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                WIP
              </span>
            </span>
          ),
        )}
      </div>
    </section>
  )
}
