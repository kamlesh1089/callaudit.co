import { Building2, Headset, ShieldCheck, TrendingUp } from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

const AUDIENCES = [
  {
    icon: TrendingUp,
    title: 'Sales Teams',
    body: 'See which reps follow the playbook, which deals show real buying signals, and where pipeline quietly leaks — across 100% of calls, not a sample.',
    tags: ['Outcome tagging', 'Buying signals', 'Call scoring'],
  },
  {
    icon: Headset,
    title: 'Support & CX Teams',
    body: 'Track sentiment on every interaction, catch escalation patterns before they blow up, and coach agents on evidence instead of anecdotes.',
    tags: ['Sentiment tracking', 'Escalation patterns', 'Topic clustering'],
  },
  {
    icon: ShieldCheck,
    title: 'QA & Compliance Teams',
    body: 'Retire sampling forever. Every call checked against your scorecards, every violation flagged, every report audit-ready with transcript-linked proof.',
    tags: ['Custom scorecards', 'Compliance flags', 'Audit-ready reports'],
  },
  {
    icon: Building2,
    title: 'BPOs & Contact Centers',
    body: 'Prove quality to every client with evidence. Audit every agent on every call — across programs, sites, and languages of operation.',
    tags: ['100% coverage', 'Per-client scorecards', 'White-label reports'],
  },
]

export default function Audiences() {
  return (
    <section id="who" className="relative scroll-mt-24 border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Who It's For</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Built for teams that{' '}
              <span className="font-serif font-normal italic text-gradient">live on the phone.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={0.08 + i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-2xl card-line bg-ink-50/70 p-7 transition hover:border-mint-400/25 hover:bg-ink-50 sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-mint-500/[0.06] blur-3xl transition group-hover:bg-mint-500/[0.13]" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/25">
                  <a.icon className="h-5 w-5 text-mint-300" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{a.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-400">{a.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-[11.5px] font-medium text-slate-300 ring-1 ring-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
