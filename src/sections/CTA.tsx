import { BadgeCheck, FileUp, Plug } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { EmbeddedLeadForm } from '@/components/lead-form'

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35 mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-500/[0.08] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-white/[0.09] bg-ink-50/75 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col justify-between border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-400">Start with your real calls</p>
                  <h2 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl">
                    Audit your first 100 calls.
                  </h2>
                  <p className="mt-5 max-w-md text-[16px] font-medium leading-7 text-slate-400">
                    Upload transcripts you already have. We’ll return evidence-linked insights—without waiting for an integration.
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-500/10 text-mint-400"><FileUp className="h-4 w-4" /></span>
                      Upload transcripts today
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-slate-400"><Plug className="h-4 w-4" /></span>
                      Connect your platform later
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-6">
                  {['No credit card', 'Setup in minutes'].map((text) => (
                    <span key={text} className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <BadgeCheck className="h-3.5 w-3.5 text-mint-500" />{text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <EmbeddedLeadForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
