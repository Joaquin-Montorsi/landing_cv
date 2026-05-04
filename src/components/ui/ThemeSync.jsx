import { useLayoutEffect } from "react"
import { useThemeMode } from "flowbite-react"

/**
 * Keeps <html class="dark"> in sync with flowbite useThemeMode / localStorage.
 * (setMode usually does this, but this fixes edge cases and first paint with mode "auto".)
 */
export default function ThemeSync() {
  const { computedMode } = useThemeMode()

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", computedMode === "dark")
  }, [computedMode])

  return null
}
