import { HiX } from "react-icons/hi"

export default function CertificateDrawer({ src, alt, open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[min(28rem,85vw)] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {alt}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <HiX className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 h-[calc(100%-3.25rem)]">
          <img
            src={src}
            alt={alt}
            className="w-full rounded-lg"
          />
        </div>
      </aside>
    </>
  )
}
