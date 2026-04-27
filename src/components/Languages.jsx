import { Progress } from "flowbite-react"
import { HiOutlineTranslate, HiOutlineBadgeCheck } from "react-icons/hi"
import certificateImg from "../assets/Capacitacion-Ingles-Senado.png"
import { languages } from "../data"

const levelProgress = {
  Native: 100,
  B1: 50,
  A1: 20,
}

const levelColor = {
  Native: "indigo",
  B1: "blue",
  A1: "gray",
}

export default function Languages() {
  return (
    <section className="px-6 py-16 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
        Languages
      </h2>

      <div className="space-y-5">
        {languages.map(({ name, level, certificate }) => (
          <div key={name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                <HiOutlineTranslate className="h-4 w-4" />
                {name}
              </span>
              <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                {level}
                {certificate && (
                  <span className="group relative">
                    <span className="inline-flex items-center gap-1 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 cursor-default dark:bg-green-900 dark:text-green-300">
                      <HiOutlineBadgeCheck className="h-3.5 w-3.5" />
                      Certificate
                    </span>
                    <img
                      src={certificateImg}
                      alt={`${name} certificate`}
                      className="pointer-events-none absolute right-0 bottom-full mb-2 z-50 w-96 rounded-lg border border-gray-200 bg-white shadow-xl opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 dark:border-gray-700 dark:bg-gray-800"
                    />
                  </span>
                )}
              </span>
            </div>
            <Progress
              progress={levelProgress[level]}
              color={levelColor[level]}
              size="sm"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
