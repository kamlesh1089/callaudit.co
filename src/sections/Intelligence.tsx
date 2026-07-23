import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  LineChart,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  Tags,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

type Layer = {
  id: string
  icon: typeof TrendingUp
  name: string
  tagline: string
  features: { icon: typeof TrendingUp; label: string }[]
  visual: React.ReactNode
}

function SalesVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-3 ring-1 ring-white/[0.06]">
        <span className="text-[12.5px] text-slate-400">Call summary</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-mint-300">Auto-generated</span>
      </div>
      <p className="rounded-lg bg-ink-100/80 p-4 text-[13px] leading-relaxed text-slate-400 ring-1 ring-white/[0.05]">
        Prospect confirmed budget authority and a{' '}
        <mark className="rounded bg-mint-500/20 px-1 text-mint-300">Q3 rollout window</mark>.
        Requested pricing for 40 seats. Competitor mentioned once.
      </p>
      <div className="flex flex-wrap gap-2">
        {['Qualified', 'Pricing asked', 'Competitor mentioned', 'Follow-up booked'].map((t) => (
          <span
            key={t}
            className="rounded-full bg-mint-500/10 px-3 py-1 text-[11px] font-medium text-mint-300 ring-1 ring-mint-400/25"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-4 py-3 ring-1 ring-white/[0.06]">
        <Target className="h-4 w-4 text-mint-400" />
        <span className="text-[12.5px] text-slate-300">
          Buying signal at <span className="font-mono text-mint-300">00:14:32</span> — linked to transcript
        </span>
      </div>
    </div>
  )
}

function QaVisual() {
  const checks = [
    { label: 'Required disclosure read', ok: true },
    { label: 'Identity verified', ok: true },
    { label: 'Prohibited claim avoided', ok: true },
    { label: 'Refund policy misstated', ok: false },
  ]
  return (
    <div className="space-y-2.5">
      {checks.map((c) => (
        <div
          key={c.label}
          className={`flex items-center justify-between rounded-lg px-4 py-3 ring-1 ${
            c.ok
              ? 'bg-white/[0.03] ring-white/[0.06]'
              : 'bg-red-500/[0.07] ring-red-400/25'
          }`}
        >
          <span className="flex items-center gap-2.5 text-[13px] text-slate-300">
            {c.ok ? (
              <ShieldCheck className="h-4 w-4 text-mint-400" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-signal-red" />
            )}
            {c.label}
          </span>
          <span
            className={`font-mono text-[10px] font-semibold uppercase tracking-wider ${
              c.ok ? 'text-mint-300' : 'text-signal-red'
            }`}
          >
            {c.ok ? 'Pass' : 'Flagged · 00:31:07'}
          </span>
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-4 py-3 ring-1 ring-white/[0.06]">
        <FileCheck2 className="h-4 w-4 text-mint-400" />
        <span className="text-[12.5px] text-slate-300">Audit-ready report exported with transcript-linked evidence</span>
      </div>
    </div>
  )
}

function CxVisual() {
  const points = [42, 48, 45, 58, 52, 66, 61, 74]
  const max = Math.max(...points)
  return (
    <div className="space-y-3">
      <div className="rounded-lg bg-ink-100/80 p-4 ring-1 ring-white/[0.05]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12.5px] text-slate-400">Account sentiment · 30 days</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">Watch</span>
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {points.map((p, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(p / max) * 100}%` }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              className={`flex-1 rounded-t ${i >= 5 ? 'bg-amber-400/70' : 'bg-mint-500/60'}`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-red-500/[0.07] px-4 py-3 ring-1 ring-red-400/25">
        <AlertTriangle className="h-4 w-4 text-signal-red" />
        <span className="text-[12.5px] text-slate-300">
          Churn language detected twice this week — escalate to CSM
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {['Billing friction ×12', 'Onboarding ×9', 'Feature request ×7', 'Escalation ×4'].map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-white/[0.08]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const LAYERS: Layer[] = [
  {
    id: 'sales',
    icon: TrendingUp,
    name: 'Sales & Revenue Intelligence',
    tagline: 'Know what every call was worth.',
    features: [
      { icon: MessagesSquare, label: 'AI call summaries' },
      { icon: Tags, label: 'Call outcome tagging' },
      { icon: LineChart, label: 'Call scoring' },
      { icon: Target, label: 'Buying signal detection' },
    ],
    visual: <SalesVisual />,
  },
  {
    id: 'qa',
    icon: ShieldCheck,
    name: 'AI QA for Risk & Compliance',
    tagline: 'Every call, checked against every rule.',
    features: [
      { icon: ListChecks, label: 'Custom scorecards' },
      { icon: ClipboardCheck, label: 'Transcript-linked evidence' },
      { icon: AlertTriangle, label: 'Non-compliant call flags' },
      { icon: FileCheck2, label: 'Audit-ready reports' },
    ],
    visual: <QaVisual />,
  },
  {
    id: 'cx',
    icon: HeartPulse,
    name: 'Customer Insights & Retention',
    tagline: 'Hear churn coming, weeks ahead.',
    features: [
      { icon: HeartPulse, label: 'Sentiment tracking' },
      { icon: TrendingUp, label: 'Churn signal detection' },
      { icon: AlertTriangle, label: 'Escalation patterns' },
      { icon: Users, label: 'Topic clustering' },
    ],
    visual: <CxVisual />,
  },
]

export default function Intelligence() {
  const [active, setActive] = useState(LAYERS[0])

  return (
    <section id="intelligence" className="relative scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute left-[-240px] top-1/4 h-[480px] w-[480px] rounded-full bg-mint-500/[0.06] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Three Intelligence Layers</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              One audit.{' '}
              <span className="font-serif font-normal italic text-gradient">
                Three layers of intelligence.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              Every call passes through three AI intelligence layers at once — revenue, compliance,
              and retention — so nothing on the phone stays invisible.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            {/* selector */}
            <div className="space-y-3">
              {LAYERS.map((l) => {
                const isActive = active.id === l.id
                return (
                  <button
                    key={l.id}
                    onClick={() => setActive(l)}
                    className={`group w-full rounded-2xl p-5 text-left transition sm:p-6 ${
                      isActive
                        ? 'card-line bg-ink-50 ring-1 ring-mint-400/25'
                        : 'card-line bg-transparent hover:bg-ink-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition ${
                          isActive
                            ? 'bg-mint-500/15 ring-mint-400/35'
                            : 'bg-white/[0.04] ring-white/[0.08] group-hover:bg-mint-500/10'
                        }`}
                      >
                        <l.icon
                          className={`h-5 w-5 ${isActive ? 'text-mint-300' : 'text-slate-400'}`}
                        />
                      </span>
                      <div>
                        <h3
                          className={`font-display text-[17px] font-semibold transition ${
                            isActive ? 'text-white' : 'text-slate-300'
                          }`}
                        >
                          {l.name}
                        </h3>
                        <p className="mt-0.5 text-[13px] text-slate-500">{l.tagline}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* panel */}
            <div className="relative overflow-hidden rounded-2xl card-line bg-ink-50/80 p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/50 to-transparent" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="mb-6 grid grid-cols-2 gap-2.5">
                    {active.features.map((f) => (
                      <div
                        key={f.label}
                        className="flex items-center gap-2.5 rounded-lg bg-white/[0.03] px-3.5 py-2.5 ring-1 ring-white/[0.06]"
                      >
                        <f.icon className="h-4 w-4 shrink-0 text-mint-400" />
                        <span className="text-[13px] font-medium text-slate-200">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-ink-100/60 p-4 ring-1 ring-white/[0.05]">
                    <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Live agent output
                    </p>
                    {active.visual}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
