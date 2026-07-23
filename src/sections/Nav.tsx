import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How It Works', href: '#how' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Results', href: '#results' },
  { label: "Who It's For", href: '#who' },
]

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint-500/15 ring-1 ring-mint-400/30 transition group-hover:bg-mint-500/25">
        <span className="flex items-center gap-[2.5px]">
          <span className="h-2.5 w-[2.5px] rounded-full bg-mint-400" />
          <span className="h-4 w-[2.5px] rounded-full bg-mint-400" />
          <span className="h-3 w-[2.5px] rounded-full bg-mint-400" />
          <span className="h-1.5 w-[2.5px] rounded-full bg-mint-400" />
        </span>
      </span>
      {!compact && (
        <span className="font-display text-[17px] font-semibold tracking-tight text-white">
          CallAudit<span className="text-mint-400">.co</span>
        </span>
      )}
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${
        scrolled ? 'glass border-b border-white/[0.06] py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[16px] font-medium text-[#A6B3C4] transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-mint-400 px-5 py-2.5 text-[13.5px] font-semibold text-ink transition hover:bg-mint-300 hover:glow-mint"
          >
            Start Free Audit
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="glass border-b border-white/[0.06] px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-mint-400 px-5 py-3 text-sm font-semibold text-ink"
            >
              Start Free Audit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
