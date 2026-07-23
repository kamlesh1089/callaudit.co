import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Waveform } from '@/components/waveform'
import { LeadFormButton } from '@/components/lead-form'

export default function CTA() {
  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-500/[0.12] blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <Reveal>
          <div className="mx-auto flex w-fit items-center justify-center">
            <Waveform className="h-8 w-52" barClassName="bg-mint-400/80" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Your next 100 calls are
            <br />
            already talking.{' '}
            <span className="font-serif font-normal italic text-gradient">Audit all of them.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-slate-400">
            Connect your call platform and watch AI agents score, tag, and evidence-link your first
            calls — in minutes, not months.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <LeadFormButton
              className="group inline-flex items-center gap-2.5 rounded-full bg-mint-400 px-9 py-4 text-[16px] font-semibold text-ink transition hover:bg-mint-300 hover:glow-mint"
            >
              Start Free Audit
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </LeadFormButton>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {['Free audit of real calls', 'No credit card required', 'Setup in minutes'].map(
                (t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[12.5px] text-slate-500">
                    <BadgeCheck className="h-3.5 w-3.5 text-mint-500" />
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
