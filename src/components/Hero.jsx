import { HiOutlineDownload } from "react-icons/hi"
import cvPdf from "../assets/CV - Joaquín Montorsi - EN.pdf"
import { profile } from "../data"

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:py-24">
      <img
        src={`${import.meta.env.BASE_URL}selfie.png`}
        alt={profile.name}
        className="mx-auto h-50 w-50 rounded-full object-cover shadow-lg ring-4 ring-indigo-400/60 dark:ring-indigo-500/50"
      />

      <h1 className="mt-6 text-4xl font-extrabold text-gray-950 dark:text-white md:text-5xl">
        {profile.name}
      </h1>

      <p className="mt-3 text-lg font-semibold text-indigo-800 dark:text-indigo-300">
        {profile.title}
      </p>

      <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-900 dark:text-gray-100">
        {profile.summary}
      </p>

      <a
        href={cvPdf}
        download="Joaquín Montorsi - CV.pdf"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        <HiOutlineDownload className="h-5 w-5" />
        Download CV
      </a>
    </section>
  )
}
