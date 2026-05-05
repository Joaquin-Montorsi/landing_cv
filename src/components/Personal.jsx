import { HiOutlineFlag, HiOutlineIdentification } from "react-icons/hi"
import { IoCarSportOutline } from "react-icons/io5"
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
import { personal } from "../data"

const categories = [
  { key: "nationalities", label: "Nationalities", icon: HiOutlineFlag },
  { key: "passports", label: "Passports", icon: HiOutlineIdentification },
  { key: "licenses", label: "Licenses", icon: IoCarSportOutline },
]

export default function Personal() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>Personal Info</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-3">
        {categories.map(({ key, label, icon: Icon }) => (
          <GlassCard key={key}>
            <div className="mb-4 flex items-center gap-2">
              <Icon className="h-5 w-5 text-indigo-800 dark:text-indigo-300" />
              <h3 className="font-semibold text-gray-950 dark:text-white">{label}</h3>
            </div>
            <ul className="space-y-2">
              {personal[key].map(({ name, flag }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg border border-slate-400/70 bg-slate-300 px-3 py-2 text-sm font-medium text-gray-950 dark:border-slate-500 dark:bg-slate-700 dark:text-gray-100"
                >
                  {flag && <span>{flag}</span>}
                  {name}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
