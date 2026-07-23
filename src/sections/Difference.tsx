import { Check, Link2, Minus } from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

const ROWS = [
  {
    label: 'Coverage',
    manual: '2–5% of calls sampled',
    audit: '100% of calls audited',
  },
  {
    label: 'Speed',
    manual: 'Days to weeks after the call',
    audit: 'Under 60 seconds per call',
  },
  {
    label: 'Scores',
    manual: 'Subjective — varies by reviewer',
    audit: 'Evidence-linked, every time',
  },
  {
    label: 'Cost',
    manual: 'Scales with QA headcount',
    audit: '−65% QA cost',
  },
  {
    label: 'What you get',
    manual: 'A dashboard you have to dig through',
    audit: 'Agents that surface what matters',
  },
]

export default function Difference() {
  return (
    <section className="relative border-y border-white/[0.05] bg-ink-50/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>The Difference</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Not a dashboard.{' '}
              <span className="font-serif font-normal italic text-gradient">
                AI agents auditing every call.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              CallAudit doesn't record calls or wait for you to log in. Its agents analyze your call
              transcripts, score them against your rules, and attach the evidence — automatically.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl card-line bg-ink-50/80">
            {/* header row */}
            <div className="grid grid-cols-[0.7fr_1fr_1fr] border-b border-white/[0.07] max-sm:grid-cols-[0.55fr_1fr_1fr]">
              <div className="px-5 py-4 max-sm:px-3" />
              <div className="border-l border-white/[0.07] px-5 py-4 max-sm:px-3">
                <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Manual QA
                </span>
              </div>
              <div className="border-l border-mint-400/20 bg-mint-500/[0.06] px-5 py-4 max-sm:px-3">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-mint-300">
                  CallAudit Agents
                </span>
              </div>
            </div>
            {ROWS.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-[0.7fr_1fr_1fr] max-sm:grid-cols-[0.55fr_1fr_1fr] ${
                  i !== ROWS.length - 1 ? 'border-b border-white/[0.05]' : ''
                }`}
              >
                <div className="flex items-center px-5 py-4 max-sm:px-3">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-500 max-sm:text-[10.5px]">
                    {r.label}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 border-l border-white/[0.05] px-5 py-4 max-sm:px-3">
                  <Minus className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                  <span className="text-[13px] text-slate-500 max-sm:text-[12px]">{r.manual}</span>
                </div>
                <div className="flex items-center gap-2.5 border-l border-mint-400/15 bg-mint-500/[0.06] px-5 py-4 max-sm:px-3">
                  <Check className="h-3.5 w-3.5 shrink-0 text-mint-400" />
                  <span className="text-[13px] font-medium text-white max-sm:text-[12px]">
                    {r.audit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* evidence callout */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-start gap-5 rounded-2xl card-line bg-ink-100/70 p-7 sm:flex-row sm:items-center sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/30">
              <Link2 className="h-5 w-5 text-mint-300" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                Every score is evidence-linked — not opinion.
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">
                Each score, flag, and tag points to the exact line in the transcript it came from.
                Defensible in a dispute, trusted by your team, ready for any audit.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
