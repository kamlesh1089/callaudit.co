import { CountUp } from '@/components/count-up'
import { Eyebrow, Reveal } from '@/components/reveal'

const STATS = [
  { prefix: '', value: 100, suffix: '%', label: 'of calls audited', note: 'vs about 5% QA sampling' },
  { prefix: '<', value: 60, suffix: 's', label: 'per audit', note: 'from transcript to scored call' },
  { prefix: '+', value: 23, suffix: '%', label: 'pipeline velocity', note: 'buying signals acted on faster' },
  { prefix: '−', value: 65, suffix: '%', label: 'QA cost', note: 'agents replace manual review' },
  { prefix: '−', value: 31, suffix: '%', label: 'churn', note: 'at-risk accounts caught earlier' },
  { prefix: '', value: 40, suffix: '%', label: 'faster rep ramp-up', note: 'coaching from real evidence' },
]

export default function Metrics() {
  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-500/[0.07] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Results Teams See</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Audited calls,{' '}
              <span className="font-serif font-normal italic text-gradient">measured outcomes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl card-line bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <div key={s.label} className="bg-ink-50/95 p-7 transition hover:bg-ink-100 sm:p-9">
              <Reveal delay={i * 0.06}>
                <div className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  {s.prefix}
                  <CountUp value={s.value} className="text-gradient" />
                  <span className="text-gradient">{s.suffix}</span>
                </div>
                <p className="mt-3 text-[15px] font-semibold text-slate-200">{s.label}</p>
                <p className="mt-1 text-[12.5px] text-slate-500">{s.note}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
