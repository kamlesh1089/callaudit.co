const BARS = [
  0.35, 0.6, 0.9, 0.5, 1, 0.7, 0.42, 0.85, 0.55, 0.95, 0.38, 0.72, 1, 0.62,
  0.45, 0.88, 0.58, 0.78, 0.4, 0.92, 0.66, 0.5, 0.82, 0.34, 0.7, 0.96, 0.52,
  0.76, 0.44, 0.86, 0.6, 0.48, 0.9, 0.56, 0.74, 0.4, 0.68, 0.94, 0.5, 0.8,
]

export function Waveform({
  className = '',
  barClassName = 'bg-mint-400/70',
  animated = true,
}: {
  className?: string
  barClassName?: string
  animated?: boolean
}) {
  return (
    <div className={`flex items-center gap-[3px] ${className}`} aria-hidden>
      {BARS.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] origin-center rounded-full ${barClassName} ${
            animated ? 'animate-wave' : ''
          }`}
          style={{
            height: `${Math.round(h * 100)}%`,
            animationDelay: `${(i % 12) * 0.11}s`,
            animationDuration: `${1.1 + (i % 5) * 0.14}s`,
          }}
        />
      ))}
    </div>
  )
}
