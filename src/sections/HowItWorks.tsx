import { BadgeCheck, FileUp, Plug, ScanSearch, Sparkles, Zap } from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'
import { LeadFormButton } from '@/components/lead-form'

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
    <section id="solution" className="relative scroll-mt-24 border-y border-white/[0.05] bg-ink-50/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
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

        <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

        <Reveal delay={0.12}>
          <div className="mt-10 grid overflow-hidden rounded-2xl card-line bg-ink-50/90 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-9">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/25">
                <FileUp className="h-5 w-5 text-mint-300" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-mint-400">
                No API integration required to start
              </p>
              <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
                Bulk upload existing transcripts. Get analysis now.
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-400">
                Upload individual or bulk call transcripts from your existing archive. CallAudit
                analyzes quality, compliance, outcomes, sentiment, and revenue signals without
                waiting for a real-time platform integration.
              </p>
              <LeadFormButton className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mint-300">
                Analyze Existing Transcripts
                <Sparkles className="h-4 w-4" />
              </LeadFormButton>
            </div>
            <div className="border-t border-white/[0.06] bg-ink-100/70 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Two ways to begin
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ['Upload today', 'CSV, TXT, DOCX, or exported transcript batches'],
                  ['Integrate later', 'Connect your call platform for continuous, real-time analysis'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-xl bg-white/[0.035] p-4 ring-1 ring-white/[0.07]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <BadgeCheck className="h-4 w-4 text-mint-400" />
                      {title}
                    </div>
                    <p className="mt-2 text-[13px] leading-6 text-slate-500">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
