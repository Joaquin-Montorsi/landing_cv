import { HiOutlineExternalLink } from "react-icons/hi"
import { VscTools } from "react-icons/vsc"
import SectionTitle from "./ui/SectionTitle"
import { projects } from "../data"

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>My Projects</SectionTitle>

      <div className="flex flex-wrap justify-center gap-3">
        {projects.map(({ name, url }) =>
          url ? (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-400 bg-white px-5 py-3 text-sm font-medium text-gray-950 shadow-sm transition hover:bg-slate-50 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <HiOutlineExternalLink className="h-4 w-4 text-indigo-700 dark:text-indigo-300" />
              {name}
            </a>
          ) : (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-400 bg-slate-100 px-5 py-3 text-sm font-medium text-gray-900 dark:border-slate-500 dark:bg-slate-800 dark:text-gray-100"
            >
              <VscTools className="h-4 w-4 text-slate-700 dark:text-slate-300" />
              {name}
              <span className="rounded bg-amber-200 px-1.5 py-0.5 text-xs font-semibold text-amber-950 dark:bg-amber-900 dark:text-amber-100">
                WIP
              </span>
            </span>
          ),
        )}
      </div>
    </section>
  )
}
