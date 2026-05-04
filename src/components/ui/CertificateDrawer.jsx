import { HiX } from "react-icons/hi"

export default function CertificateDrawer({ src, alt, open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 transition-opacity dark:bg-black/50"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          role="presentation"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[min(28rem,85vw)] transform border-r border-slate-300 bg-slate-200 shadow-2xl transition-transform duration-300 ease-in-out dark:border-slate-600 dark:bg-slate-800 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-300 px-4 py-3 dark:border-slate-600">
          <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
            {alt}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-700 transition hover:bg-slate-300 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            <HiX className="h-5 w-5" />
          </button>
        </div>

        <div className="h-[calc(100%-3.25rem)] overflow-y-auto p-4">
          <img src={src} alt={alt} className="w-full rounded-lg" />
        </div>
      </aside>
    </>
  )
}
