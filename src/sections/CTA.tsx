import { BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { EmbeddedLeadForm } from '@/components/lead-form'

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35 mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-500/[0.08] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-white/[0.09] bg-ink-50/75 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col justify-between border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-400">Contact Us</p>
                  <h2 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl">
                    Your next 100 calls are already talking. <span className="font-serif font-normal italic text-gradient">Audit all of them.</span>
                  </h2>
                  <h3 className="mt-6 text-xl font-semibold text-white">Start with conversations you already have.</h3>
                  <p className="mt-4 max-w-md text-[16px] font-medium leading-7 text-slate-400">
                    Share your details and we’ll help you plan a first transcript audit. No real-time integration is required to begin.
                  </p>
                  <p className="mt-4 max-w-md text-[16px] font-medium leading-7 text-slate-400">
                    Connect your call platform and watch AI agents score, tag, and evidence-link your first calls — in minutes, not months.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-6">
                  {['Free audit of real calls', 'No credit card', 'Setup in minutes'].map((text) => (
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
