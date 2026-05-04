import { useCallback, useRef } from "react"

export default function Page({ children }) {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth) * 100
    const y = (clientY / innerHeight) * 100
    el.style.setProperty("--glow-x", `${x}%`)
    el.style.setProperty("--glow-y", `${y}%`)
    el.style.setProperty("--hue", Math.round((clientX / innerWidth) * 60 + 220))
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="page-glow min-h-screen transition-colors"
      style={{ "--glow-x": "50%", "--glow-y": "50%", "--hue": 240 }}
    >
      {children}
    </div>
  )
}
