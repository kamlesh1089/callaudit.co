import { BadgeCheck, FileUp, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LeadFormButton } from '@/components/lead-form'

export default function BulkUpload() {
  return (
    <section className="relative border-y border-white/[0.05] bg-ink-50/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl card-line bg-ink-50/90 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-9">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/25">
                <FileUp className="h-5 w-5 text-mint-300" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-mint-400">No API integration required to start</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">Bulk upload existing transcripts. Get analysis now.</h2>
              <p className="mt-4 max-w-2xl text-[15px] font-medium leading-7 text-slate-400">
                Upload individual or bulk call transcripts from your existing archive. CallAudit analyzes quality, compliance, outcomes, sentiment, and revenue signals without waiting for a real-time platform integration.
              </p>
              <LeadFormButton className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mint-300">
                Analyze Existing Transcripts <Sparkles className="h-4 w-4" />
              </LeadFormButton>
            </div>
            <div className="border-t border-white/[0.06] bg-ink-100/70 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Two ways to begin</p>
              <div className="mt-5 space-y-4">
                {[
                  ['Upload today', 'CSV, TXT, DOCX, or exported transcript batches'],
                  ['Integrate later', 'Connect your call platform for continuous, real-time analysis'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-xl bg-white/[0.035] p-4 ring-1 ring-white/[0.07]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white"><BadgeCheck className="h-4 w-4 text-mint-400" />{title}</div>
                    <p className="mt-2 text-[13px] font-medium leading-6 text-slate-500">{body}</p>
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
