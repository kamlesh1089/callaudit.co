import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function ScoreRing({
  score,
  size = 132,
  stroke = 9,
}: {
  score: number
  size?: number
  stroke?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1800, bounce: 0 })

  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r

  useEffect(() => {
    if (inView) mv.set(score)
  }, [inView, score, mv])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (textRef.current) textRef.current.textContent = String(Math.round(latest))
    })
  }, [spring])

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(148,163,184,0.14)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * score) / 100}
          style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-baseline">
          <span ref={textRef} className="font-display text-4xl font-semibold text-white">
            0
          </span>
          <span className="font-mono text-xs text-slate-500">/100</span>
        </div>
        <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mint-300">
          Call score
        </span>
      </div>
    </div>
  )
}
