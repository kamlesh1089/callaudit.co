import {
  BadgeIndianRupee,
  Building2,
  FileStack,
  HeartPulse,
  Headphones,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

const INDUSTRIES = [
  {
    icon: Headphones,
    title: 'BPOs & Contact Centers',
    body: 'Standardize QA across clients, programs, locations, and languages with evidence-linked reporting.',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    body: 'Monitor disclosures, advice quality, conduct risk, and customer outcomes across every conversation.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance',
    body: 'Audit sales, servicing, and claims conversations against scripts, policies, and regulatory requirements.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Services',
    body: 'Surface service gaps, escalation signals, and process adherence while maintaining audit-ready evidence.',
  },
]

const USE_CASES = [
  {
    icon: FileStack,
    title: 'Bulk Transcript Analysis',
    body: 'Upload historical transcript batches and uncover patterns that were previously hidden in your call archive.',
  },
  {
    icon: ShieldCheck,
    title: 'QA & Compliance Monitoring',
    body: 'Score every call against your controls and link each flag to the exact supporting transcript evidence.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Coaching & Revenue Signals',
    body: 'Find buying intent, missed objections, playbook gaps, and the moments that separate top performers.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Retention & Cost Reduction',
    body: 'Identify churn risk earlier and replace manual sampling effort with consistent AI-led analysis.',
  },
]

function CardGrid({
  items,
}: {
  items: Array<{ icon: typeof Building2; title: string; body: string }>
}) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={0.05 + index * 0.05}>
          <article className="h-full rounded-2xl card-line bg-ink-50/70 p-6 transition hover:border-mint-400/25">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/25">
              <item.icon className="h-5 w-5 text-mint-300" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2.5 text-[13.5px] leading-6 text-slate-500">{item.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

export default function MarketFit() {
  return (
    <>
      <section id="industries" className="relative scroll-mt-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Industries</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Built for high-volume, high-stakes conversations.
              </h2>
            </Reveal>
          </div>
          <CardGrid items={INDUSTRIES} />
        </div>
      </section>

      <section
        id="use-cases"
        className="relative scroll-mt-24 border-y border-white/[0.05] bg-ink-50/40"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Use Cases</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Turn existing and future calls into decisions.
              </h2>
            </Reveal>
          </div>
          <CardGrid items={USE_CASES} />
        </div>
      </section>
    </>
  )
}
