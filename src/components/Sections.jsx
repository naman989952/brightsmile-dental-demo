import { SERVICES, STATS, REVIEWS } from '../data'
import { Container, SectionTitle } from './ui'

export function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionTitle eyebrow="Our services" title="Complete care for every smile" text="From routine check-ups to implants, everything happens under one roof." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">{s.icon}</div>
              <h3 className="text-lg font-bold group-hover:text-brand-600">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="bg-ink py-20 text-white">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-mint">Why choose us</p>
          <h2 className="text-3xl font-extrabold md:text-4xl">Modern tools. Caring people.</h2>
          <p className="mt-4 text-slate-300">
            We use digital X-rays, painless techniques and strict hygiene. Every patient gets a clear plan and honest pricing.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            {['Digital, low-radiation X-rays', 'Same-day emergency visits', 'Clear pricing before treatment'].map((t) => (
              <li key={t} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-xs text-ink">✓</span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <Container>
        <SectionTitle eyebrow="Reviews" title="What our patients say" />
        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-brand-50 p-6">
              <p className="text-amber-500">{'★'.repeat(r.rating)}</p>
              <blockquote className="mt-3 text-slate-700">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
