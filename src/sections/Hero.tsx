import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  FileSearch,
  Link2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { Waveform } from '@/components/waveform'
import { ScoreRing } from '@/components/score-ring'
import { Eyebrow } from '@/components/reveal'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] as const },
})

function AuditCard() {
  return (
    <div className="relative">
      {/* Main audit card */}
      <motion.div
        initial={{ opacity: 0, y: 34, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[24px] card-line bg-ink-50/90 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/60 to-transparent" />
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint-500/12 ring-1 ring-mint-400/25">
              <FileSearch className="h-4 w-4 text-mint-300" />
            </span>
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                Call #4821 · Discovery
              </p>
              <p className="text-[13px] font-medium text-white">Audit complete</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-500/12 px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-mint-300 ring-1 ring-mint-400/25">
            <span className="h-1 w-1 animate-pulse-soft rounded-full bg-mint-400" />
            47s
          </span>
        </div>

        {/* score + tags */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-6 px-6 py-5">
          <ScoreRing score={86} size={118} />
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 ring-1 ring-white/[0.06]">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-mint-400" />
              <span className="text-[12.5px] text-slate-300">
                Outcome: <span className="font-medium text-white">Qualified</span> — follow-up booked
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 ring-1 ring-white/[0.06]">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-mint-400" />
              <span className="text-[12.5px] text-slate-300">
                Compliance: <span className="font-medium text-white">4/4 checks passed</span>
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 ring-1 ring-white/[0.06]">
              <TrendingUp className="h-3.5 w-3.5 shrink-0 text-mint-400" />
              <span className="text-[12.5px] text-slate-300">
                Sentiment: <span className="font-medium text-white">Positive, trending up</span>
              </span>
            </div>
          </div>
        </div>

        {/* evidence */}
        <div className="mx-6 mb-5 rounded-xl bg-ink-100/90 p-4 ring-1 ring-white/[0.06]">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-mint-300">
              <Link2 className="h-3 w-3" /> Buying signal · linked evidence
            </span>
            <span className="font-mono text-[10px] text-slate-500">00:14:32</span>
          </div>
          <p className="text-[13px] leading-relaxed text-slate-400">
            "…we'd need this{' '}
            <mark className="rounded bg-mint-500/20 px-1 py-0.5 text-mint-300">
              live before Q3 — budget's already approved
            </mark>
            . Can your team handle the migration?"
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
            <Waveform className="h-5 w-40" animated={false} barClassName="bg-slate-600" />
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              <Sparkles className="h-3 w-3 text-mint-400" />
              Coach: probe timeline earlier
            </span>
          </div>
        </div>
      </motion.div>

      {/* floating chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="absolute -right-4 -top-6 animate-float sm:-right-8"
      >
        <div className="flex items-center gap-2 rounded-xl glass px-4 py-2.5 ring-1 ring-mint-400/30 glow-mint">
          <TrendingUp className="h-4 w-4 text-mint-300" />
          <span className="text-[12px] font-semibold text-white">Revenue signal detected</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute -bottom-6 -left-4 animate-float-delayed sm:-left-10"
      >
        <div className="flex items-center gap-2 rounded-xl glass px-4 py-2.5 ring-1 ring-amber-400/30">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-[12px] font-semibold text-white">Churn risk flagged · acct #2291</span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-mint-500/[0.09] blur-[140px]" />
      <div className="pointer-events-none absolute right-[-200px] top-1/3 h-[420px] w-[420px] rounded-full bg-emerald-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-36 pt-36 sm:px-8 lg:pb-44 lg:pt-48">
        <div className="grid items-center gap-20 lg:grid-cols-[1.08fr_0.92fr] xl:gap-28">
          {/* copy */}
          <div>
            <motion.div {...fade(0)}>
              <Eyebrow>AI-Native Call Auditing</Eyebrow>
            </motion.div>
            <motion.h1
              {...fade(0.1)}
              className="mt-8 max-w-[700px] font-display text-[52px] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#F6F7F9] sm:text-[72px] lg:text-[88px]"
            >
              Every call audited.
              <br />
              Every signal{' '}
              <span className="font-serif font-normal italic text-gradient">surfaced.</span>
            </motion.h1>
            <motion.p
              {...fade(0.2)}
              className="mt-8 max-w-[650px] text-[18px] font-normal leading-[1.8] text-[#A6B3C4]"
            >
              CallAudit deploys AI agents that analyze{' '}
              <span className="font-semibold text-white">100% of your call transcripts</span> —
              scoring quality, checking compliance, tagging outcomes, and surfacing revenue
              signals. Automatically. In under 60 seconds per call.
            </motion.p>
            <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="group inline-flex h-16 items-center gap-2.5 rounded-full bg-mint-400 px-8 text-[16px] font-semibold text-ink transition duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-mint-300 hover:glow-mint"
              >
                Start Free Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className="inline-flex h-16 items-center gap-2.5 rounded-full px-8 text-[16px] font-medium text-slate-200 ring-1 ring-white/10 transition duration-300 hover:bg-white/[0.035] hover:ring-white/20"
              >
                See how it works
              </a>
            </motion.div>
            <motion.div
              {...fade(0.42)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {[
                '100% of calls covered',
                'Evidence-linked scores',
                'No credit card required',
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13px] text-slate-500">
                  <BadgeCheck className="h-4 w-4 text-mint-500" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <AuditCard />
          </div>
        </div>
      </div>

      {/* bottom waveform strip */}
      <div className="relative border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-5 py-5 sm:px-8">
          <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.22em] text-slate-500">
            Analyzing transcript stream
          </span>
          <Waveform className="h-6 w-full opacity-50 mask-fade-x" />
        </div>
      </div>
    </section>
  )
}
