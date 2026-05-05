export const profile = {
  name: "Joaquín Montorsi",
  title: "Full-Stack Software Developer",
  summary:
    "Full-Stack Developer with an engineering background and 4+ years of technical experience. I specialize in robust web applications and improving data infrastructure—turning legacy, fragmented setups into scalable Django–React platforms. My work combines rigorous problem-solving with pragmatic systems tooling (Docker, Nginx, Rclone) so information stays consistent, secure, and available for environmental and public-sector teams.",
  contact: {
    email: "joaquinmontorsi@gmail.com",
    phone: "+54 221-654-5669",
    location: "La Plata, Buenos Aires, Argentina",
    locationUrl: "https://www.google.com/maps/place/La+Plata,+Buenos+Aires,+Argentina",
    linkedin: "https://www.linkedin.com/in/joaquín-montorsi-139650218",
    github: "https://github.com/Joaquin-Montorsi",
    instagram: "https://www.instagram.com/joaquinmontorsi/",
  },
}

export const personal = {
  nationalities: [
    { name: "Argentinian", flag: "🇦🇷" },
    { name: "Italian", flag: "🇮🇹" },
  ],
  passports: [
    { name: "Argentinian", flag: "🇦🇷" },
    { name: "Italian", flag: "🇮🇹" },
  ],
  licenses: [
    { name: "Driver's license" },
  ],
}

export const projects = [
  { name: "Recipes", url: null },
  { name: "Shopping List", url: null },
]

export const skills = {
  backend: [
    "Python 3.12+",
    "Django 5",
    "Django REST Framework",
    "Simple JWT",
    "PostgreSQL",
    "PostGIS",
  ],
  frontend: [
    "React 18",
    "TypeScript",
    "Redux",
    "Zustand",
    "Tailwind CSS",
    "Zod",
    "React Hook Form",
    "React Router DOM",
    "Axios",
    "Vite",
  ],
  systems: [
    "Docker",
    "Docker Compose",
    "Nginx",
    "Rclone",
    "Linux (Ubuntu)",
    "Git",
    "CI/CD",
  ],
  gisTools: ["GeoServer", "OpenLayers / Leaflet (basic)"],
  other: [
    "Technical autonomy (design to deployment)",
    "Stakeholder requirements → engineering specs",
    "Pragmatic, business-first solutions",
  ],
}

export const experience = [
  {
    role: "Full-Stack Software Developer",
    company: "Environmental Office — Ministry of Infrastructure",
    period: "2022 – Present",
    technicalChallenge:
      "Building a progressive synchronization and migration path from cloud file storage (Google Drive) to an on-premises relational source of truth—using Django, Rclone, and asynchronous workflows—without disrupting live environmental operations.",
    achievements: [
      "Designed and shipped a progressive migration for 150+ environmental projects, integrating Django with Google Drive via Rclone so Drive was no longer the system of record; centralized truth on our own stack and reduced data-loss and corruption risk.",
      "Delivered a tailored Django–React operations platform with role-based permissions and notifications, replacing generic Trello/Drive workflows and cutting operational tool dependency by about 50%.",
      "Established the initial geospatial stack with GeoServer for serving critical infrastructure layers and groundwork for map-based consultation (visualization with OpenLayers / Leaflet at a basic, in-development level).",
    ],
  },
]

export const education = {
  institution: "National University of La Plata (UNLP)",
  degree: "Computer Engineering — advanced standing (~80% completed)",
  period: "2015 – 2025",
  details: [
    "University Analyst Programmer track — advanced standing",
    "General GPA: 6.23",
    "Honorable Senate of the Province of Buenos Aires (2025)",
    "English course — Level 2",
    "Strong foundation in computing fundamentals, data structures, and systems-oriented thinking",
  ],
}

export const languages = [
  { name: "Spanish", abbr: "Ñ", level: "Native", certificate: null },
  { name: "English", abbr: "EN", level: "B1", certificate: "Capacitacion-Ingles-Senado.webp" },
  { name: "Italian", abbr: "IT", level: "A1", certificate: null },
]
