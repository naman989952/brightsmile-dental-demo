import { useState } from 'react'
import { NAV } from '../data'
import { Button, Container } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">B</span>
          BrightSmile
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-600 hover:text-brand-600">
              {n.label}
            </a>
          ))}
          <Button href="#contact" className="py-2.5">Book Appointment</Button>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg ring-1 ring-slate-200 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </Container>
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 font-medium hover:bg-brand-50">
                {n.label}
              </a>
            ))}
            <Button href="#contact" onClick={() => setOpen(false)} className="mt-2">Book Appointment</Button>
          </Container>
        </div>
      )}
    </header>
  )
}
