import { useEffect } from 'react'
import { ArrowRight, BadgeCheck, MessagesSquare } from 'lucide-react'
import Nav from '@/sections/Nav'
import Footer from '@/sections/Footer'
import { LeadFormButton } from '@/components/lead-form'

const canonicalUrl = 'https://callaudit.co/pricing/'

export default function Pricing() {
  useEffect(() => {
    const description = 'Audit your first 100 call minutes free, or contact CallAudit.co for high-volume transcript auditing and live call analysis.'
    document.title = 'CallAudit.co Pricing | 100 Minutes Free or High-Volume Analysis'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink text-foreground">
      <Nav />
      <main className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-mint-400">Simple pricing</p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">Start free. Scale when you&apos;re ready.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Test CallAudit.co with real conversations, then move to continuous analysis when your team needs higher volume or live integrations.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] border border-mint-400/35 bg-mint-500/[0.07] p-7 shadow-[0_0_60px_rgba(54,216,167,0.07)] sm:p-9">
              <BadgeCheck className="h-9 w-9 text-mint-400" />
              <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-mint-400">Free audit</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">Get your first 100 minutes audited free</h2>
              <p className="mt-4 leading-7 text-slate-400">Upload existing transcripts and see quality, compliance, sentiment, outcomes, and revenue signals without waiting for an API integration.</p>
              <LeadFormButton className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-mint-300">
                Start Your Free Audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </LeadFormButton>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-ink-50 p-7 sm:p-9">
              <MessagesSquare className="h-9 w-9 text-slate-300" />
              <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">Custom plan</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">High-volume and live analysis</h2>
              <p className="mt-4 leading-7 text-slate-400">Talk to us about bulk transcript processing, custom scorecards, team workflows, continuous platform connections, and live analysis requirements.</p>
              <LeadFormButton className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-mint-400/40 hover:bg-mint-500/10">
                Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </LeadFormButton>
            </article>
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Need help choosing? WhatsApp us on{' '}
            <a href="https://wa.me/919004271098" target="_blank" rel="noreferrer" className="font-semibold text-mint-400 transition hover:text-mint-300">+91 9004271098</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
