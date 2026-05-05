import { useState } from "react"
import { Progress } from "flowbite-react"
import { HiOutlineBadgeCheck } from "react-icons/hi"
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
import CertificateDrawer from "./ui/CertificateDrawer"
import certificateImg from "../assets/Capacitacion-Ingles-Senado.webp"
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
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>Languages</SectionTitle>

      <GlassCard>
        <div className="space-y-5">
          {languages.map(({ name, flag, level, certificate }) => (
            <div key={name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-gray-950 dark:text-white">
                  {flag && <span className="text-lg">{flag}</span>}
                  {name}
                </span>
                <span className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  {level}
                  {certificate && (
                    <button
                      type="button"
                      onClick={() => setOpenCert(name)}
                      className="inline-flex items-center gap-1 rounded-full border border-green-600/40 bg-green-200 px-2.5 py-0.5 text-xs font-semibold text-green-950 transition hover:bg-green-300 dark:border-green-500/50 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800"
                    >
                      <HiOutlineBadgeCheck className="h-3.5 w-3.5 text-green-800 dark:text-green-200" />
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
      </GlassCard>

      <CertificateDrawer
        src={certificateImg}
        alt="English — Certificate"
        open={openCert !== null}
        onClose={() => setOpenCert(null)}
      />
    </section>
  )
}
