import { Badge } from "flowbite-react"
import {
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineCog,
} from "react-icons/hi"
import { skills } from "../data"

const categories = [
  { key: "backend", label: "Backend", icon: HiOutlineServer, color: "purple" },
  { key: "frontend", label: "Frontend", icon: HiOutlineDesktopComputer, color: "blue" },
  { key: "devops", label: "DevOps & GIS", icon: HiOutlineCloud, color: "green" },
  { key: "other", label: "Other", icon: HiOutlineCog, color: "gray" },
]

export default function Skills() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Technical Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map(({ key, label, icon: Icon, color }) => (
          <div
            key={key}
            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Icon className="h-5 w-5" />
              <h3 className="font-semibold">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((skill) => (
                <Badge key={skill} color={color}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
