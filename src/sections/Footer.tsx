import { Logo } from './Nav'
import { LeadFormButton } from '@/components/lead-form'
import { CookiePreferencesButton } from '@/components/cookie-consent'

const COLS = [
  {
    title: 'Product',
    links: ['AI Intelligence', 'How It Works', 'Results', "Who It's For", 'Pricing'],
    hrefs: ['/#intelligence', '/#solution', '/#results', '/#who', '/pricing/'],
  },
  {
    title: 'Teams',
    links: ['Sales', 'Support & CX', 'QA & Compliance', 'BPOs'],
    hrefs: ['/#who', '/#who', '/#who', '/#who'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-50/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[13.5px] leading-relaxed text-slate-500">
              AI agents auditing every call. 100% coverage, evidence-linked scores, outcomes tagged
              on every transcript — automatically.
            </p>
            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-mint-400/70">
              Connect · Analyze · Score · Act
            </p>
          </div>
          <div className="flex flex-wrap gap-10 sm:gap-12">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l, i) => (
                    <li key={l}>
                      <a
                        href={c.hrefs[i]}
                        className="text-[13.5px] text-slate-400 transition hover:text-mint-300"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Contact Us</h4>
              <div className="mt-4 space-y-2.5">
                <LeadFormButton className="block text-left text-[13.5px] text-slate-400 transition hover:text-mint-300">Start a conversation</LeadFormButton>
                <a href="mailto:hello@callaudit.co" className="block text-[13.5px] text-slate-400 transition hover:text-mint-300">hello@callaudit.co</a>
                <a href="https://wa.me/919004271098" target="_blank" rel="noreferrer" className="block text-[13.5px] text-slate-400 transition hover:text-mint-300">WhatsApp +91 9004271098</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-7 sm:flex-row">
          <p className="text-[12.5px] text-slate-600">
            © 2026 CallAudit.co — AI-Native Call Auditing
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <CookiePreferencesButton className="text-[12.5px] text-slate-500 transition hover:text-mint-300" />
            <p className="font-mono text-[11px] text-slate-600">
            100% of calls audited · &lt;60s per audit
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
