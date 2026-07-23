import { BadgeCheck, FileUp, Plug } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Waveform } from '@/components/waveform'
import { EmbeddedLeadForm } from '@/components/lead-form'

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-500/[0.12] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto flex w-fit items-center justify-center">
            <Waveform className="h-8 w-52" barClassName="bg-mint-400/80" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-7 text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Your next 100 calls are already talking.{' '}
            <span className="font-serif font-normal italic text-gradient">Audit all of them.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-center text-[17px] font-medium leading-relaxed text-white">Start with conversations you already have.</p>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal delay={0.16}>
            <div>
              <p className="text-[16px] font-medium leading-7 text-slate-400">Share your details and we’ll help you plan a first transcript audit. No real-time integration is required to begin.</p>
              <p className="mt-4 text-[16px] font-medium leading-7 text-slate-400">Connect your call platform and watch AI agents score, tag, and evidence-link your first calls — in minutes, not months.</p>
              <div className="mt-7 rounded-2xl border border-white/[0.08] bg-ink-50/80 p-6">
                <FileUp className="h-6 w-6 text-mint-400" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">Bulk upload existing transcripts. Get analysis now.</h3>
                <p className="mt-3 text-[15px] font-medium leading-7 text-slate-400">Upload individual or bulk call transcripts from your existing archive. CallAudit analyzes quality, compliance, outcomes, sentiment, and revenue signals without waiting for a real-time platform integration.</p>
                <div className="mt-5 flex flex-wrap gap-4 text-[12.5px] font-medium text-slate-500">
                  <span className="flex items-center gap-1.5"><FileUp className="h-3.5 w-3.5 text-mint-500" />Upload today</span>
                  <span className="flex items-center gap-1.5"><Plug className="h-3.5 w-3.5 text-mint-500" />Integrate later</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {['Free audit of real calls', 'No credit card required', 'Setup in minutes'].map((text) => (
                  <span key={text} className="flex items-center gap-1.5 text-[12.5px] font-medium text-slate-500">
                    <BadgeCheck className="h-3.5 w-3.5 text-mint-500" />{text}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}><EmbeddedLeadForm /></Reveal>
        </div>
      </div>
    </section>
  )
}
