import {
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineCog,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineCode,
} from "react-icons/hi"
import {
  SiDjango,
  SiJsonwebtokens,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiOpenlayers,
  SiRedux,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiAxios,
  SiVite,
  SiDocker,
  SiMetabase,
  SiRclone,
  SiGithubactions,
  SiGit,
  SiTailwindcss,
} from "react-icons/si"
import { skills } from "../data"

const skillIcons = {
  "Django 5": SiDjango,
  "Django REST Framework": SiDjango,
  "Simple JWT": SiJsonwebtokens,
  "PostgreSQL": SiPostgresql,
  "PostGIS": SiPostgresql,
  "Python 3.12+": SiPython,
  "React 18": SiReact,
  "TypeScript": SiTypescript,
  "OpenLayers": SiOpenlayers,
  "Flowbite React": SiTailwindcss,
  "Redux": SiRedux,
  "Zustand": SiReact,
  "Zod": SiZod,
  "React Hook Form": SiReacthookform,
  "React Router": SiReactrouter,
  "Axios": SiAxios,
  "Vite": SiVite,
  "Docker": SiDocker,
  "Docker Compose": SiDocker,
  "GeoServer": HiOutlineGlobe,
  "Metabase": SiMetabase,
  "pgAdmin": SiPostgresql,
  "Rclone": SiRclone,
  "CI/CD": SiGithubactions,
  "Git": SiGit,
  "Agile/Scrum": HiOutlineCog,
  "Cross-functional collaboration": HiOutlineUserGroup,
}

const categories = [
  { key: "backend", label: "Backend", icon: HiOutlineServer },
  { key: "frontend", label: "Frontend", icon: HiOutlineDesktopComputer },
  { key: "devops", label: "DevOps & GIS", icon: HiOutlineCloud },
  { key: "other", label: "Other", icon: HiOutlineCog },
]

export default function Skills() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Technical Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map(({ key, label, icon: CatIcon }) => (
          <div
            key={key}
            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <CatIcon className="h-5 w-5" />
              <h3 className="font-semibold">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((skill) => {
                const Icon = skillIcons[skill] || HiOutlineCode
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
