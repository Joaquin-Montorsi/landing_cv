export const profile = {
  name: "Joaquín Montorsi",
  title: "Full-Stack Software Engineer",
  summary:
    "Full-Stack Software Engineer with 4+ years designing and delivering end-to-end web systems—backend services, data layers, and React front ends—built for reliability and maintainability. I translate environmental and institutional requirements into engineered solutions: structured workflows, PostGIS-backed insight, and integrations that replace ad-hoc tools with coherent, auditable systems for public-sector teams.",
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
    "Django 5",
    "Django REST Framework",
    "Simple JWT",
    "PostgreSQL",
    "PostGIS",
    "Python 3.12+",
  ],
  frontend: [
    "React 18",
    "TypeScript",
    "Flowbite React",
    "Redux",
    "Zustand",
    "Zod",
    "React Hook Form",
    "React Router DOM",
    "Axios",
    "Vite",
  ],
  gisTools: ["OpenLayers", "GeoServer"],
  devops: [
    "Docker",
    "Docker Compose",
    "Metabase",
    "pgAdmin",
    "Rclone",
    "CI/CD",
  ],
  other: ["Git", "Agile/Scrum", "Cross-functional collaboration"],
}

export const experience = [
  {
    role: "Full-Stack Software Developer",
    company: "Environmental Office - Ministry of Infrastructure",
    period: "2022 – Present",
    technicalChallenge:
      "Synchronizing operational assets and data between the cloud and on-premises servers through asynchronous processes, consolidating a single source of truth in PostGIS without disrupting day-to-day operations.",
    achievements: [
      "Led migration of 150+ environmental projects from Google Drive/Trello to a PostGIS database, eliminating data-loss risks and cutting search time by 30%.",
      "Built a Django-React platform with role-based permissions and automated notifications, replacing Trello and reducing workflow dependencies by 50%.",
      "Engineered a React/OpenLayers map viewer integrated with GeoServer for terrain analysis and layer intersections, currently in active development.",
    ],
  },
]

export const education = {
  institution: "National University of La Plata",
  degree: "Computer Science and Engineering",
  period: "2015 – 2025",
  details: [
    "Advanced student in Computer Engineering",
    "7.05 General Average",
    "Honorable Senate of the Province of Buenos Aires (2025)",
    "English course - Level 2",
  ],
}

export const languages = [
  { name: "Spanish", abbr: "Ñ", level: "Native", certificate: null },
  { name: "English", abbr: "EN", level: "B1", certificate: "Capacitacion-Ingles-Senado.webp" },
  { name: "Italian", abbr: "IT", level: "A1", certificate: null },
]
