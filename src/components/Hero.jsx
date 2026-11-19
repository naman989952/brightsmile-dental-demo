import { Button, Container } from './ui'

function SmileArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-mint" />
      <div className="absolute inset-6 rounded-[2rem] bg-white/15 backdrop-blur-sm" />
      <svg viewBox="0 0 200 200" className="absolute inset-0 m-auto h-3/5 w-3/5 drop-shadow-xl" aria-hidden="true">
        <path d="M100 30c-20-14-62-12-66 24-3 26 8 40 14 70 5 26 10 46 22 46 14 0 12-40 30-40s16 40 30 40c12 0 17-20 22-46 6-30 17-44 14-70-4-36-46-38-66-24z" fill="#fff" />
        <path d="M70 70c10 6 50 6 60 0" stroke="#bfe3ff" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
      <div className="absolute -left-4 bottom-10 rounded-2xl bg-white px-4 py-3 shadow-xl">
        <p className="text-xs text-slate-500">Next free slot</p>
        <p className="font-bold">Today, 4:30 pm</p>
      </div>
      <div className="absolute -right-3 top-10 rounded-2xl bg-white px-4 py-3 shadow-xl">
        <p className="font-bold text-mint">★ 4.9 rating</p>
        <p className="text-xs text-slate-500">from 1,200+ reviews</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="rise">
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-100">
            Family dental clinic
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Healthy teeth, <span className="text-brand-600">bright smiles.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600">
            Gentle, modern dental care for the whole family. Book your visit in under a minute.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Book Appointment</Button>
            <Button href="#services" variant="ghost">View Services</Button>
          </div>
        </div>
        <div className="rise" style={{ animationDelay: '.15s' }}>
          <SmileArt />
        </div>
      </Container>
    </section>
  )
}
