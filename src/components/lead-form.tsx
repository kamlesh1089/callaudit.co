import { useEffect, useId, useState, type ReactNode } from 'react'
import { ArrowRight, BadgeCheck, X } from 'lucide-react'

const OPEN_LEAD_FORM = 'callaudit:open-lead-form'

export function LeadFormButton({
  children,
  className,
  onOpen,
}: {
  children: ReactNode
  className: string
  onOpen?: () => void
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onOpen?.()
        window.dispatchEvent(new Event(OPEN_LEAD_FORM))
      }}
    >
      {children}
    </button>
  )
}

export function LeadFormModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(
    () => new URLSearchParams(window.location.search).get('submitted') === 'true',
  )
  const titleId = useId()

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener(OPEN_LEAD_FORM, show)
    return () => window.removeEventListener(OPEN_LEAD_FORM, show)
  }, [])

  useEffect(() => {
    if (!open && !submitted) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setSubmitted(false)
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open, submitted])

  if (!open && !submitted) return null

  const close = () => {
    setOpen(false)
    setSubmitted(false)
    if (new URLSearchParams(window.location.search).has('submitted')) {
      window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) close()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] border border-white/10 bg-ink-50 p-6 shadow-2xl sm:max-w-lg sm:rounded-[28px] sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white"
          aria-label="Close enquiry form"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center sm:py-10">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-500/12 ring-1 ring-mint-400/30">
              <BadgeCheck className="h-7 w-7 text-mint-400" />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-mint-400">
              Request received
            </p>
            <h2 id={titleId} className="mt-3 font-display text-3xl font-semibold text-white">
              Thank you for contacting CallAudit.co.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
              We’ll review your details and contact you shortly about your free call audit.
            </p>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Contact or WhatsApp us on{' '}
              <a
                href="https://wa.me/919004271098"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-mint-400 transition hover:text-mint-300"
              >
                +91 9004271098
              </a>
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-7 rounded-full bg-mint-400 px-7 py-3 text-sm font-semibold text-ink transition hover:bg-mint-300"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint-400">
              Start your free audit
            </p>
            <h2 id={titleId} className="mt-3 pr-12 font-display text-3xl font-semibold text-white">
              See what your QA sampling misses.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Share your details and we’ll contact you to arrange a free audit of real calls.
            </p>

            <form
              action="https://formsubmit.co/hello@callaudit.co"
              method="POST"
              className="mt-7 space-y-5"
            >
              <input type="hidden" name="_subject" value="New CallAudit.co enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={`${window.location.origin}${window.location.pathname}?submitted=true`}
              />

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-ink px-4 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/15"
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Email ID</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-ink px-4 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/15"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-ink px-4 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/15"
                  placeholder="+91 98765 43210"
                />
              </label>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-mint-300"
              >
                Request Free Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs leading-5 text-slate-500">
                By submitting, you agree to be contacted about CallAudit.co.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
