export const levelScale = [
  {
    name: "Basic",
    abbr: "bs",
    bar: "bg-sky-500 dark:bg-sky-400",
    badge:
      "border-sky-700/30 bg-sky-200 text-sky-900 dark:border-sky-300/40 dark:bg-sky-900/70 dark:text-sky-100",
  },
  {
    name: "Intermediate",
    abbr: "in",
    bar: "bg-amber-500 dark:bg-amber-400",
    badge:
      "border-amber-700/30 bg-amber-200 text-amber-900 dark:border-amber-300/40 dark:bg-amber-900/70 dark:text-amber-100",
  },
  {
    name: "Advanced",
    abbr: "ad",
    bar: "bg-emerald-600 dark:bg-emerald-400",
    badge:
      "border-emerald-700/30 bg-emerald-200 text-emerald-900 dark:border-emerald-300/40 dark:bg-emerald-900/70 dark:text-emerald-100",
  },
]

export const levels = Object.fromEntries(levelScale.map((entry) => [entry.name, entry]))

export const levelBadgeClass =
  "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide"

export default function SkillLevelBar({ className = "" }) {
  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="flex gap-1" aria-hidden>
        {levelScale.map(({ abbr, bar }) => (
          <span key={abbr} className={`h-2 flex-1 rounded-full ${bar}`} />
        ))}
      </div>
      <ul
        className="m-0 mt-2 grid list-none grid-cols-3 p-0 text-xs text-gray-800 dark:text-gray-200"
        aria-label="Proficiency scale"
      >
        {levelScale.map(({ name, abbr, badge }) => (
          <li key={abbr} className="flex items-center justify-center gap-1.5">
            <span className={`${levelBadgeClass} ${badge}`}>{abbr}</span>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
