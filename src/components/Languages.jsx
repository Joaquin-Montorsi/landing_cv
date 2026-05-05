import { useState } from "react"
import SectionTitle from "./ui/SectionTitle"
import GlassCard from "./ui/GlassCard"
import CertificateDrawer from "./ui/CertificateDrawer"
import certificateImg from "../assets/Capacitacion-Ingles-Senado.webp"
import { languages } from "../data"

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-slate-400/80 bg-slate-300 px-3 py-1.5 text-sm font-medium text-gray-950 dark:border-slate-500 dark:bg-slate-700 dark:text-gray-100"

const pillInteractiveClass =
  `${pillClass} cursor-pointer transition hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:hover:bg-slate-600 dark:focus-visible:ring-offset-slate-800`

export default function Languages() {
  const [openCert, setOpenCert] = useState(null)

  const pillContent = (name, abbr, level) => (
    <>
      <span
        className="flex h-6 min-w-[1.5rem] shrink-0 items-center justify-center rounded-full bg-white/55 px-1 text-[10px] font-bold leading-none text-gray-950 dark:bg-black/25 dark:text-gray-100"
        aria-hidden
      >
        <span className={abbr.length === 1 ? "text-xs" : ""}>{abbr}</span>
      </span>
      <span>{name}</span>
      <span className="text-slate-500 dark:text-slate-400" aria-hidden>
        ·
      </span>
      <span className="font-semibold tabular-nums">{level}</span>
    </>
  )

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <SectionTitle>Languages</SectionTitle>

      <GlassCard>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Languages and proficiency levels">
          {languages.map(({ name, abbr, level, certificate }) =>
            certificate ? (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => setOpenCert(name)}
                  className={pillInteractiveClass}
                  aria-label={`${name} (${level}) — view certificate`}
                  title="View certificate"
                >
                  {pillContent(name, abbr, level)}
                </button>
              </li>
            ) : (
              <li key={name}>
                <span className={pillClass}>{pillContent(name, abbr, level)}</span>
              </li>
            ),
          )}
        </ul>
      </GlassCard>

      <CertificateDrawer
        src={certificateImg}
        alt={openCert ? `${openCert} — certificate` : "Certificate"}
        open={openCert !== null}
        onClose={() => setOpenCert(null)}
      />
    </section>
  )
}
