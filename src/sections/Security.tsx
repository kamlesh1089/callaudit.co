import { DatabaseZap, EyeOff, LockKeyhole, ShieldCheck } from 'lucide-react'
import { Eyebrow, Reveal } from '@/components/reveal'

const PRINCIPLES = [
  { icon: LockKeyhole, title: 'Controlled access', body: 'We design workflows around limited access and responsible handling of customer data.' },
  { icon: EyeOff, title: 'Purpose-limited processing', body: 'Call data should be processed only for the analysis and outcomes agreed with each customer.' },
  { icon: DatabaseZap, title: 'Retention awareness', body: 'We work toward clear retention and deletion practices that minimize unnecessary data exposure.' },
]

export default function Security() {
  return (
    <section className="relative border-t border-white/[0.05] bg-ink-50/35">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div>
              <Eyebrow>Compliance & Data Security</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Security-minded from the start.</h2>
              <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-400">
                Formal SOC 2 and HIPAA compliance are not yet in place. We are building CallAudit with strict data-handling principles and a clear path toward recognized security controls.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {PRINCIPLES.map((item, index) => (
              <Reveal key={item.title} delay={0.06 + index * 0.05}>
                <article className="h-full rounded-2xl border border-white/[0.08] bg-ink-50/75 p-5">
                  <item.icon className="h-5 w-5 text-mint-400" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[13px] font-medium leading-6 text-slate-500">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
          <ShieldCheck className="h-4 w-4 text-mint-500" />
          We communicate current controls transparently and do not claim certifications we have not earned.
        </div>
      </div>
    </section>
  )
}
