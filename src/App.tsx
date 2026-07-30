import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import CookieConsent, { analyticsReadyEvent } from './components/cookie-consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    callAuditAnalyticsReady?: boolean
  }
}

function AnalyticsPageViews() {
  const location = useLocation()

  useEffect(() => {
    const trackPageView = () => {
      if (!window.callAuditAnalyticsReady) return
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `${location.pathname}${location.search}`,
      })
    }
    trackPageView()
    window.addEventListener(analyticsReadyEvent, trackPageView, { once: true })
    return () => window.removeEventListener(analyticsReadyEvent, trackPageView)
  }, [location.pathname, location.search])

  return null
}

export default function App() {
  return (
    <>
      <AnalyticsPageViews />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  )
}
