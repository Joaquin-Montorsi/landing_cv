import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { profile } from "../data"

const whatsappNumber = profile.contact.phone.replace(/[\s\-+]/g, "")
const whatsappUrl = `https://wa.me/${whatsappNumber}`
const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${profile.contact.email}`

const contactItems = [
  {
    icon: HiOutlineMail,
    href: gmailUrl,
    label: profile.contact.email,
  },
  {
    icon: FaWhatsapp,
    href: whatsappUrl,
    label: profile.contact.phone,
  },
  {
    icon: HiOutlineLocationMarker,
    href: profile.contact.locationUrl,
    label: profile.contact.location,
  },
  {
    icon: FaLinkedinIn,
    href: profile.contact.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: profile.contact.github,
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: profile.contact.instagram,
    label: "Instagram",
  },
]

export default function Contact() {
  return (
    <section className="px-6 py-16 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Contact
      </h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Feel free to reach out through any of the following channels.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {contactItems.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
