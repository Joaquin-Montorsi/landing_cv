import { HiOutlineFlag, HiOutlineIdentification } from "react-icons/hi"
import { IoCarSportOutline } from "react-icons/io5"
import { personal } from "../data"

const categories = [
  { key: "nationalities", label: "Nationalities", icon: HiOutlineFlag },
  { key: "passports", label: "Passports", icon: HiOutlineIdentification },
  { key: "licenses", label: "Licenses", icon: IoCarSportOutline },
]

export default function Personal() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Personal Info
      </h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {categories.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Icon className="h-5 w-5" />
              <h3 className="font-semibold">{label}</h3>
            </div>
            <ul className="space-y-2">
              {personal[key].map(({ name, flag }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {flag && <span>{flag}</span>}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
