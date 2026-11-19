export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25',
    ghost: 'bg-white text-ink ring-1 ring-slate-200 hover:ring-brand-500 hover:text-brand-600',
  }
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    />
  )
}

export function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-slate-600">{text}</p>}
    </div>
  )
}
