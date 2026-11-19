import { useState } from 'react'
import { HOURS } from '../data'
import { Button, Container, SectionTitle } from './ui'

const EMPTY = { name: '', phone: '', service: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[0-9+\-\s]{8,15}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!v.service) e.service = 'Please choose a service.'
  return e
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

const input = 'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100'

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value })

  function submit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(EMPTY)
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-brand-50 py-20">
      <Container>
        <SectionTitle eyebrow="Contact" title="Book your appointment" text="Send us your details and we will call you back to confirm a time." />
        <div className="grid gap-8 lg:grid-cols-5">
          <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl bg-white p-6 shadow-xl shadow-brand-600/5 ring-1 ring-slate-100 lg:col-span-3">
            {sent && (
              <p role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Thank you! This is a demo form, so nothing was sent.
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" error={errors.name}>
                <input className={input} value={values.name} onChange={set('name')} placeholder="Your name" />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input className={input} value={values.phone} onChange={set('phone')} placeholder="+91 00000 00000" />
              </Field>
            </div>
            <Field label="Service" error={errors.service}>
              <select className={input} value={values.service} onChange={set('service')}>
                <option value="">Choose a service</option>
                <option>General Check-up</option>
                <option>Teeth Whitening</option>
                <option>Braces & Aligners</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message (optional)">
              <textarea className={input} rows="3" value={values.message} onChange={set('message')} placeholder="Tell us how we can help" />
            </Field>
            <Button as="button" type="submit" className="w-full">Request Appointment</Button>
          </form>
          <aside className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-100">
              <h3 className="font-bold">Opening hours</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex justify-between"><dt className="text-slate-600">{d}</dt><dd className="font-medium">{h}</dd></div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl bg-brand-600 p-6 text-white">
              <h3 className="font-bold">Visit us</h3>
              <p className="mt-2 text-sm text-brand-100">Sample address, City Center, Your City</p>
              <p className="mt-1 text-sm text-brand-100">hello@brightsmile.example</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
