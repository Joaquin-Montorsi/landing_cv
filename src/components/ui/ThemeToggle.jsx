import { ToggleSwitch, useThemeMode } from "flowbite-react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"

export default function ThemeToggle() {
  const { computedMode, setMode } = useThemeMode()
  const isDark = computedMode === "dark"

  const handleChange = (nextIsDark) => {
    setMode(nextIsDark ? "dark" : "light")
  }

  return (
    <div className="flex shrink-0 items-center gap-2" title="Toggle color theme">
      <HiOutlineSun
        className={
          isDark
            ? "h-5 w-5 shrink-0 text-slate-400"
            : "h-5 w-5 shrink-0 text-amber-600"
        }
        aria-hidden
      />
      <ToggleSwitch
        checked={Boolean(isDark)}
        onChange={handleChange}
        color="blue"
        sizing="sm"
        aria-label="Toggle dark mode"
        className="shrink-0"
      />
      <HiOutlineMoon
        className={
          isDark
            ? "h-5 w-5 shrink-0 text-indigo-300"
            : "h-5 w-5 shrink-0 text-slate-400"
        }
        aria-hidden
      />
    </div>
  )
}
