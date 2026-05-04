import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import SectionTitle from "./ui/SectionTitle"
import { profile } from "../data"

const whatsappNumber = profile.contact.phone.replace(/[\s\-+]/g, "")
const whatsappUrl = `https://wa.me/${whatsappNumber}`
const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${profile.contact.email}`

const contactItems = [
  { icon: HiOutlineMail, href: gmailUrl, label: profile.contact.email },
  { icon: FaWhatsapp, href: whatsappUrl, label: profile.contact.phone },
  { icon: HiOutlineLocationMarker, href: profile.contact.locationUrl, label: profile.contact.location },
  { icon: FaLinkedinIn, href: profile.contact.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: profile.contact.github, label: "GitHub" },
  { icon: FaInstagram, href: profile.contact.instagram, label: "Instagram" },
]

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <SectionTitle>Contact</SectionTitle>
      <p className="mb-8 -mt-4 text-gray-800 dark:text-gray-200">
        Feel free to reach out through any of the following channels.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {contactItems.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm font-medium text-gray-950 shadow-sm transition hover:bg-slate-50 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            <Icon className="h-4 w-4 text-indigo-800 dark:text-indigo-300" />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
