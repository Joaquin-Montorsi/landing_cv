import {
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineLightningBolt,
  HiOutlineChatAlt,
  HiOutlineSparkles,
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
  SiRclone,
  SiGithubactions,
  SiGit,
  SiTailwindcss,
  SiNginx,
  SiUbuntu,
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
  "OpenLayers / Leaflet (basic)": SiOpenlayers,
  "Tailwind CSS": SiTailwindcss,
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
  "Nginx": SiNginx,
  "Rclone": SiRclone,
  "Linux (Ubuntu)": SiUbuntu,
  "Git": SiGit,
  "CI/CD": SiGithubactions,
  "Technical autonomy (design to deployment)": HiOutlineLightningBolt,
  "Stakeholder requirements → engineering specs": HiOutlineChatAlt,
  "Pragmatic, business-first solutions": HiOutlineSparkles,
}

const categories = [
  { key: "backend", label: "Backend", icon: HiOutlineServer },
  { key: "frontend", label: "Frontend", icon: HiOutlineDesktopComputer },
  { key: "systems", label: "Systems & Infrastructure", icon: HiOutlineCloud },
  { key: "gisTools", label: "GIS", icon: HiOutlineGlobe },
  { key: "other", label: "Soft skills", icon: HiOutlineUserGroup },
]

export default function Skills() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
