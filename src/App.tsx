import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function AnalyticsPageViews() {
  const location = useLocation()

  useEffect(() => {
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${location.pathname}${location.search}`,
    })
  }, [location.pathname, location.search])

  return null
}

export default function App() {
  return (
    <>
      <AnalyticsPageViews />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  )
}
