export const profile = {
  name: "Joaquín Montorsi",
  title: "Full-Stack Developer | Backend & Data Management",
  summary:
    "Full-Stack Developer specializing in backend development, with experience in the design, development, testing, deployment, and maintenance of Dockerized web applications, RESTful APIs, and databases. Advanced knowledge of Python, Django, React, TypeScript, Docker, and Linux, along with experience in security using JWT, data synchronization, and geospatial tools. I work best in teams that promote technical learning, agile methodologies, and process documentation.",
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
    { name: "Python", level: "Advanced" },
    { name: "Django", level: "Advanced" },
    { name: "Django REST Framework", level: "Advanced" },
    { name: "Simple JWT", level: "Intermediate" },
    { name: "Google OAuth 2", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "PostGIS", level: "Intermediate" },
    { name: "DRF Spectacular", level: "Basic" },
  ],
  frontend: [
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "React Hook Form", level: "Advanced" },
    { name: "Zod", level: "Advanced" },
    { name: "React Router", level: "Advanced" },
    { name: "Axios", level: "Advanced" },
    { name: "Vite", level: "Advanced" },
    { name: "Zustand", level: "Basic" },
    { name: "Redux", level: "Basic" },
  ],
  systems: [
    { name: "Docker", level: "Advanced" },
    { name: "Docker Compose", level: "Advanced" },
    { name: "Linux (Ubuntu)", level: "Advanced" },
    { name: "Bash", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "Rclone", level: "Advanced" },
    { name: "Pipenv", level: "Advanced" },
    { name: "Nginx", level: "Intermediate" },
    { name: "Gunicorn", level: "Intermediate" },
  ],
  gisTools: [
    { name: "GeoServer", level: "Basic" },
    { name: "OpenLayers", level: "Basic" },
    { name: "GeoJSON", level: "Basic" },
  ],
  other: [
    { name: "Problem-solving", level: null },
    { name: "Critical thinking", level: null },
    { name: "Independence at work", level: null },
    { name: "Focus on processes and procedures", level: null },
    { name: "Adaptability", level: null },
  ],
}

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Ministry of Infrastructure of the Province of Buenos Aires",
    period: "2022 – Present",
    technicalChallenge:
      "Building a progressive synchronization and migration path from cloud file storage (Google Drive) to an on-premises relational source of truth—using Django, Rclone, and asynchronous workflows—without disrupting live environmental operations.",
    achievements: [
      "Designed, developed, tested, and maintained a web portal for the management and administration of environmental projects, covering front-end, back-end, and database work.",
      "Built and maintained RESTful APIs with Python, Django, and Django REST Framework, including JWT authentication, granular user permissions, and endpoint documentation.",
      "Led the gradual migration of data and documentation from Google Drive to our own infrastructure, with bidirectional synchronization via Rclone and Google Service Accounts, safeguarding organization, integrity, availability, and redundancy.",
      "Replaced Trello as the project tracking system with a custom web application tailored to the department's operational needs.",
      "Designed and maintained React, Tailwind CSS, and TypeScript interfaces, including forms, hooks, validation schemas with Zod, and state management.",
      "Managed Docker containers and microservice architectures with Docker Compose, handled static and dynamic files with WhiteNoise and MinIO, and administered, deployed, migrated, and backed up PostgreSQL and PostGIS databases.",
      "Gathered requirements with non-specialized teams and translated functional needs into user stories and technical specifications, defining standardized nomenclatures and GeoServer workspace methodologies alongside the GIS team.",
      "Prepared technical documentation, application logs, and user procedures, applying agile methodologies to plan and monitor development phases.",
    ],
  },
]

export const education = [
  {
    institution: "National University of La Plata (UNLP)",
    degree: "Computer Engineering — on hiatus",
    period: "2015 – 2025",
    details: [
      "University Analyst Programmer track — advanced standing",
      "General GPA: 6.23",
      "Honorable Senate of the Province of Buenos Aires (2025)",
      "English course — Level 2",
      "Strong foundation in computing fundamentals, data structures, and systems-oriented thinking",
    ],
  },
  {
    institution: "Technical School No. 2 in 9 de Julio",
    degree: "Electromechanical Technician — completed",
    period: null,
    details: [
      "Technical secondary education with an engineering-oriented curriculum",
    ],
  },
]

export const languages = [
  { name: "Spanish", abbr: "Ñ", level: "Native", certificate: null },
  { name: "English", abbr: "EN", level: "B2", certificate: "Capacitacion-Ingles-Senado.webp" },
  { name: "Italian", abbr: "IT", level: "A1", certificate: null },
]
