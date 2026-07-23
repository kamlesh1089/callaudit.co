import { BadgeCheck, Plug, ScanSearch, Zap } from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

const STEPS = [
  {
    n: '01',
    icon: Plug,
    title: 'Connect',
    body: 'Plug CallAudit into your call platform. Transcripts flow in automatically — no manual uploads, no new workflow for reps.',
    mono: 'SETUP IN MINUTES',
  },
  {
    n: '02',
    icon: ScanSearch,
    title: 'Analyze',
    body: 'AI agents audit every transcript against your scorecards — quality, compliance, outcomes, sentiment — in under 60 seconds per call.',
    mono: '<60S PER CALL',
  },
  {
    n: '03',
    icon: BadgeCheck,
    title: 'Score',
    body: 'Every call is scored consistently against your quality, compliance, and outcome criteria, with evidence linked to the transcript.',
    mono: 'EVIDENCE-LINKED SCORES',
  },
  {
    n: '04',
    icon: Zap,
    title: 'Act',
    body: 'Evidence-linked insights route straight to coaches, compliance, and revenue teams. Flags become fixes, signals become pipeline.',
    mono: 'ZERO SAMPLING GAPS',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 border-y border-white/[0.05] bg-ink-50/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Connect · Analyze · Score · Act</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              From transcript to action{' '}
              <span className="font-serif font-normal italic text-gradient">in minutes.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              No dashboards to babysit. AI agents audit every call and push what matters to the
              people who need it.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-mint-500/30 to-transparent xl:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.1 + i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-2xl card-line bg-ink-50/80 p-7 transition hover:border-mint-400/30">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-mint-500/[0.07] blur-3xl transition group-hover:bg-mint-500/[0.14]" />
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/25">
                    <s.icon className="h-5 w-5 text-mint-300" />
                  </span>
                  <span className="font-display text-4xl font-semibold text-white/[0.07] transition group-hover:text-mint-400/20">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{s.body}</p>
                <p className="mt-5 font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-mint-400/80">
                  {s.mono}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
