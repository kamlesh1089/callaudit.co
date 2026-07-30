import { useEffect, useState } from 'react'

const STORAGE_KEY = 'callaudit-cookie-consent-v1'
const OPEN_EVENT = 'callaudit:open-cookie-preferences'
const ANALYTICS_READY_EVENT = 'callaudit:analytics-ready'
const MEASUREMENT_ID = 'G-2BJ77VHYH4'

type ConsentPreferences = { analytics: boolean; marketing: boolean }

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
    callAuditAnalyticsReady?: boolean
  }
}

function enableAnalytics() {
  if (window.callAuditAnalyticsReady) return
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args) }
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false })

  if (!document.querySelector(`script[src*="${MEASUREMENT_ID}"]`)) {
    const tag = document.createElement('script')
    tag.async = true
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(tag)
  }
  window.callAuditAnalyticsReady = true
  window.dispatchEvent(new Event(ANALYTICS_READY_EVENT))
}

function disableAnalytics() {
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
}

export function CookiePreferencesButton({ className = '' }: { className?: string }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>Cookie preferences</button>
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [customizing, setCustomizing] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
    else {
      try {
        const preferences = JSON.parse(saved) as ConsentPreferences
        setAnalytics(Boolean(preferences.analytics))
        setMarketing(Boolean(preferences.marketing))
        if (preferences.analytics) enableAnalytics()
      } catch { setVisible(true) }
    }
    const openPreferences = () => { setCustomizing(true); setVisible(true) }
    window.addEventListener(OPEN_EVENT, openPreferences)
    return () => window.removeEventListener(OPEN_EVENT, openPreferences)
  }, [])

  const save = (preferences: ConsentPreferences) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
    setAnalytics(preferences.analytics)
    setMarketing(preferences.marketing)
    if (preferences.analytics) enableAnalytics()
    else disableAnalytics()
    setVisible(false)
    setCustomizing(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5" role="region" aria-label="Cookie consent">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#081116]/[0.98] p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-mint-400">Your privacy choices</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">We use cookies thoughtfully.</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Necessary storage keeps this site working. With your permission, analytics helps us understand site usage and improve CallAudit. You can accept, reject, or customize optional cookies, and change your choice at any time.</p>

            {customizing && (
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-white">Necessary</span><span className="font-mono text-[10px] uppercase tracking-wider text-mint-400">Always active</span></div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">Remembers privacy choices and supports essential site functions.</p>
                </div>
                <label className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-white">Analytics</span><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="h-4 w-4 accent-emerald-400" /></div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">Allows Google Analytics to measure visits and site performance.</p>
                </label>
                <label className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-white">Marketing</span><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="h-4 w-4 accent-emerald-400" /></div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">Reserved for future advertising or campaign-measurement tools.</p>
                </label>
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-wrap gap-2.5 lg:max-w-[390px] lg:justify-end">
            {customizing ? <button type="button" onClick={() => save({ analytics, marketing })} className="rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-mint-300">Save preferences</button> : <button type="button" onClick={() => setCustomizing(true)} className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white">Manage preferences</button>}
            <button type="button" onClick={() => save({ analytics: false, marketing: false })} className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white">Reject non-essential</button>
            <button type="button" onClick={() => save({ analytics: true, marketing: true })} className="rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-mint-300">Accept all</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const analyticsReadyEvent = ANALYTICS_READY_EVENT
