import { ArrowRight, BadgeCheck } from 'lucide-react'
import type { ReactNode } from 'react'

export function LeadFormButton({ children, className, onOpen }: { children: ReactNode; className: string; onOpen?: () => void }) {
  return <a href="/#contact" className={className} onClick={onOpen}>{children}</a>
}

export function EmbeddedLeadForm() {
  const submitted = typeof window !== 'undefined'
    && new URLSearchParams(window.location.search).get('submitted') === 'true'

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-mint-400/25 bg-mint-500/[0.07] p-7 text-center sm:p-9">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-500/12 ring-1 ring-mint-400/30">
          <BadgeCheck className="h-7 w-7 text-mint-400" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-mint-400">Request received</p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white">Thank you for contacting CallAudit.co.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-slate-400">We’ll review your details and contact you shortly about your first transcript audit.</p>
        <p className="mx-auto mt-5 max-w-sm text-sm font-medium leading-6 text-slate-300">
          Contact or WhatsApp us on{' '}
          <a href="https://wa.me/919004271098" target="_blank" rel="noreferrer" className="font-semibold text-mint-400 hover:text-mint-300">+91 9004271098</a>
        </p>
      </div>
    )
  }

  return (
    <form action="https://formsubmit.co/hello@callaudit.co" method="POST">
      <input type="hidden" name="_subject" value="New CallAudit.co enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://callaudit.co/?submitted=true#contact" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint-400">Request a free audit</p>
      <h3 className="mt-3 font-display text-3xl font-semibold text-white">See what your calls reveal.</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-400">Share your details and we’ll help you get started with conversations you already have.</p>
      <div className="mt-7 space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
          <input name="name" type="text" autoComplete="name" required className="h-12 w-full rounded-xl border border-white/10 bg-ink px-4 text-base font-medium text-white outline-none transition placeholder:text-slate-600 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/15" placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Email ID</span>
          <input name="email" type="email" autoComplete="email" required className="h-12 w-full rounded-xl border border-white/10 bg-ink px-4 text-base font-medium text-white outline-none transition placeholder:text-slate-600 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/15" placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required className="h-12 w-full rounded-xl border border-white/10 bg-ink px-4 text-base font-medium text-white outline-none transition placeholder:text-slate-600 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/15" placeholder="+91 98765 43210" />
        </label>
      </div>
      <button type="submit" className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-mint-300">
        Request Free Audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-3 text-center text-xs font-medium leading-5 text-slate-500">By submitting, you agree to be contacted about CallAudit.co.</p>
    </form>
  )
}
