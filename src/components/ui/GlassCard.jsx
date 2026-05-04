export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-300 bg-slate-200 p-5 shadow-md dark:border-slate-600 dark:bg-slate-800 ${className}`}
    >
      {children}
    </div>
  )
}
