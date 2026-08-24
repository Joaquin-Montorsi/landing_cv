import {
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineLightningBolt,
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineRefresh,
  HiOutlineSparkles,
  HiOutlineCode,
} from "react-icons/hi"
import {
  SiDjango,
  SiJsonwebtokens,
  SiGoogle,
  SiSwagger,
  SiPostgresql,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiOpenlayers,
  SiJson,
  SiRedux,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiAxios,
  SiVite,
  SiDocker,
  SiRclone,
  SiGnubash,
  SiPypi,
  SiGit,
  SiTailwindcss,
  SiNginx,
  SiGunicorn,
  SiUbuntu,
} from "react-icons/si"
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
import SkillLevelBar, { levels, levelBadgeClass } from "./ui/SkillLevelBar"
import { skills } from "../data"

const skillIcons = {
  "Python": SiPython,
  "Django": SiDjango,
  "Django REST Framework": SiDjango,
  "Simple JWT": SiJsonwebtokens,
  "Google OAuth 2": SiGoogle,
  "PostgreSQL": SiPostgresql,
  "PostGIS": SiPostgresql,
  "DRF Spectacular": SiSwagger,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "HTML & CSS": SiHtml5,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "React Hook Form": SiReacthookform,
  "Zod": SiZod,
  "React Router": SiReactrouter,
  "Axios": SiAxios,
  "Vite": SiVite,
  "Zustand": SiReact,
  "Redux": SiRedux,
  "Docker": SiDocker,
  "Docker Compose": SiDocker,
  "Linux (Ubuntu)": SiUbuntu,
  "Bash": SiGnubash,
  "Git": SiGit,
  "Rclone": SiRclone,
  "Pipenv": SiPypi,
  "Nginx": SiNginx,
  "Gunicorn": SiGunicorn,
  "GeoServer": HiOutlineGlobe,
  "OpenLayers": SiOpenlayers,
  "GeoJSON": SiJson,
  "Problem-solving": HiOutlineLightBulb,
  "Critical thinking": HiOutlineSparkles,
  "Independence at work": HiOutlineLightningBolt,
  "Focus on processes and procedures": HiOutlineClipboardList,
  "Adaptability": HiOutlineRefresh,
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

      <div className="mb-8 flex justify-center">
        <SkillLevelBar />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ key, label, icon: CatIcon }) => (
          <GlassCard key={key}>
            <div className="mb-4 flex items-center gap-2">
              <CatIcon className="h-5 w-5 text-indigo-800 dark:text-indigo-300" />
              <h3 className="font-semibold text-gray-950 dark:text-white">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills[key].map(({ name, level }) => {
                const Icon = skillIcons[name] || HiOutlineCode
                const levelStyle = levels[level]
                return (
                  <span
                    key={name}
                    className={`inline-flex items-center gap-1.5 rounded-full border border-slate-400/80 bg-slate-300 py-1.5 pl-3 text-sm font-medium text-gray-950 dark:border-slate-500 dark:bg-slate-700 dark:text-gray-100 ${
                      levelStyle ? "pr-1.5" : "pr-3"
                    }`}
                    title={levelStyle ? `${name} — ${level}` : name}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-slate-800 dark:text-slate-200" />
                    {name}
                    {levelStyle && (
                      <span className={`${levelBadgeClass} ${levelStyle.badge}`}>
                        {levelStyle.abbr}
                      </span>
                    )}
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
