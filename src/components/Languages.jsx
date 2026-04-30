import { useState } from "react"
import { Progress } from "flowbite-react"
import { HiOutlineTranslate, HiOutlineBadgeCheck } from "react-icons/hi"
import CertificateDrawer from "./ui/CertificateDrawer"
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
  const [openCert, setOpenCert] = useState(null)

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
                  <button
                    onClick={() => setOpenCert(name)}
                    className="inline-flex items-center gap-1 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 transition hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
                  >
                    <HiOutlineBadgeCheck className="h-3.5 w-3.5" />
                    Certificate
                  </button>
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

      <CertificateDrawer
        src={certificateImg}
        alt="English — Certificate"
        open={openCert !== null}
        onClose={() => setOpenCert(null)}
      />
    </section>
  )
}
