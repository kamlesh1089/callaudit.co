import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Problem from '@/sections/Problem'
import HowItWorks from '@/sections/HowItWorks'
import Intelligence from '@/sections/Intelligence'
import Difference from '@/sections/Difference'
import Metrics from '@/sections/Metrics'
import Audiences from '@/sections/Audiences'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'
import { LeadFormModal } from '@/components/lead-form'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Intelligence />
        <Difference />
        <Metrics />
        <Audiences />
        <CTA />
      </main>
      <Footer />
      <LeadFormModal />
    </div>
  )
}
