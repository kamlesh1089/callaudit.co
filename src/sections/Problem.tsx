import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DollarSign, GraduationCap, ShieldAlert, TrendingDown } from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

const HIDDEN_COSTS = [
  {
    icon: DollarSign,
    title: 'Revenue leakage',
    body: 'Buying signals, upsell openings, and stalled deals that nobody ever flagged.',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance violations',
    body: 'Missed disclosures and non-compliant language — invisible until the audit or the lawsuit.',
  },
  {
    icon: TrendingDown,
    title: 'Churn signals',
    body: 'Frustration, escalation cues, and quiet quitting from customers you thought were fine.',
  },
  {
    icon: GraduationCap,
    title: 'Coaching gaps',
    body: 'Reps repeating the same mistakes for months because nobody heard them happen.',
  },
]

function CoverageGrid() {
  const [audited, setAudited] = useState(false)
  const lit = audited ? 100 : 5

  return (
    <div className="rounded-2xl card-line bg-ink-50/80 p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Calls audited this month
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-white">
            {lit} <span className="text-slate-500">of</span> 100
          </p>
        </div>
        {/* toggle */}
        <div className="flex rounded-full bg-ink-100 p-1 ring-1 ring-white/[0.07]">
          {[
            { key: false, label: 'Manual QA' },
            { key: true, label: 'With CallAudit' },
          ].map((opt) => (
            <button
              key={String(opt.key)}
              onClick={() => setAudited(opt.key)}
              className={`relative rounded-full px-4 py-2 text-[12.5px] font-semibold transition ${
                audited === opt.key ? 'text-ink' : 'text-slate-400 hover:text-white'
              }`}
            >
              {audited === opt.key && (
                <motion.span
                  layoutId="coverage-pill"
                  className="absolute inset-0 rounded-full bg-mint-400"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-10 gap-2 sm:gap-2.5">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.span
            key={i}
            initial={false}
            animate={{
              backgroundColor: i < lit ? '#34D399' : 'rgba(148,163,184,0.13)',
              boxShadow:
                i < lit ? '0 0 10px rgba(52,211,153,0.45)' : '0 0 0 rgba(0,0,0,0)',
            }}
            transition={{ duration: 0.35, delay: audited ? i * 0.006 : (99 - i) * 0.002 }}
            className="aspect-square w-full rounded-[4px]"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={String(audited)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-[13.5px] leading-relaxed text-slate-400"
        >
          {audited ? (
            <>
              <span className="font-semibold text-mint-300">100% coverage.</span> Every call scored,
              outcome-tagged, and checked for compliance — with evidence linked to the exact
              transcript moment.
            </>
          ) : (
            <>
              <span className="font-semibold text-signal-red">95% remains unseen.</span> QA sampling
              is done on about 5% of calls. The remaining 95% goes unaudited — and that&apos;s
              where the cost hides.
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default function Problem() {
  return (
    <section id="problem" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>The 95% Visibility Gap</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-semibold leading-[1.08] tracking-tight text-white">
                <span className="block whitespace-nowrap text-[clamp(1.35rem,6vw,3rem)]">
                  QA sampling covers about 5%.
                </span>
                <span className="mt-2 block font-serif text-[clamp(1.75rem,7vw,3rem)] font-normal italic text-slate-400">
                  The remaining 95% is a black box.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-slate-400">
                QA sampling is done on about 5% of calls. The remaining 95% goes unaudited,
                quietly hiding the problems that cost companies hundreds of thousands every year.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {HIDDEN_COSTS.map((c, i) => (
                <Reveal key={c.title} delay={0.1 + i * 0.07}>
                  <div className="group h-full rounded-xl card-line bg-ink-50/60 p-5 transition hover:border-signal-red/30 hover:bg-ink-50">
                    <c.icon className="h-5 w-5 text-signal-red/80 transition group-hover:text-signal-red" />
                    <h3 className="mt-3 text-[15px] font-semibold text-white">{c.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <CoverageGrid />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
