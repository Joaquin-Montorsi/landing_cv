import { HiOutlineDownload } from "react-icons/hi"
import cvPdf from "../assets/Currículum Vitae.pdf"
import profilePhoto from "../assets/foto-perfil.jpg"
import { profile } from "../data"

export default function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 text-center max-w-3xl mx-auto">
      <img
        src={profilePhoto}
        alt={profile.name}
        className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-indigo-100 dark:ring-indigo-900"
      />

      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {profile.name}
      </h1>

      <p className="mt-3 text-lg font-medium text-indigo-600 dark:text-indigo-400">
        {profile.title}
      </p>

      <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
        {profile.summary}
      </p>

      <a
        href={cvPdf}
        download="Joaquín Montorsi - CV.pdf"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        <HiOutlineDownload className="h-4 w-4" />
        Download CV
      </a>
    </section>
  )
}
