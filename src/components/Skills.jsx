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
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
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
  "React Router DOM": SiReactrouter,
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
  { key: "backend",  label: "Backend",                 icon: HiOutlineServer },
  { key: "frontend", label: "Frontend",                icon: HiOutlineDesktopComputer },
  { key: "devops",   label: "DevOps",                  icon: HiOutlineCloud },
  { key: "gisTools", label: "GIS Tools (in progress)", icon: HiOutlineGlobe },
  { key: "other",    label: "Other",                   icon: HiOutlineCog },
]

export default function Skills() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map(({ key, label, icon: CatIcon }) => (
          <GlassCard key={key}>
            <div className="mb-4 flex items-center gap-2">
              <CatIcon className="h-5 w-5 text-indigo-800 dark:text-indigo-300" />
              <h3 className="font-semibold text-gray-950 dark:text-white">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((skill) => {
                const Icon = skillIcons[skill] || HiOutlineCode
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-400/80 bg-slate-300 px-3 py-1.5 text-sm font-medium text-gray-950 dark:border-slate-500 dark:bg-slate-700 dark:text-gray-100"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-slate-800 dark:text-slate-200" />
                    {skill}
                  </span>
                )
              })}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
