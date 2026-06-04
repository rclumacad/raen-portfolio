import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="sec-label">// 06 · Say Hello</div>
      <h2 className="sec-title">Contact</h2>

      {/* Contact links */}
      {[
        { icon: '✉', label: 'Email', val: 'rclumacad@up.edu.ph', href: 'mailto:rclumacad@up.edu.ph' },
        { icon: '⌥', label: 'GitHub', val: 'github.com/rclumacad', href: 'https://github.com/rclumacad' },
        { icon: 'in', label: 'LinkedIn', val: 'linkedin.com/in/rclumacad2026', href: 'https://linkedin.com/in/rclumacad2026' },
        { icon: '📞', label: 'Phone', val: '+63 966 965 9875', href: null },
        { icon: '📍', label: 'Location', val: 'Cebu City, Cebu, Philippines', href: null },
      ].map(c => (
        <a key={c.label} href={c.href || undefined} target={c.href ? '_blank' : undefined} rel="noreferrer"
          className="contact-row" style={{ cursor: c.href ? 'pointer' : 'default' }}>
          <div className="contact-icon" style={{ fontFamily: c.icon === 'in' ? 'DM Mono, monospace' : undefined, fontSize: c.icon === 'in' ? 12 : undefined, fontWeight: c.icon === 'in' ? 700 : undefined }}>{c.icon}</div>
          <div><div className="contact-lbl">{c.label}</div><div className="contact-val">{c.val}</div></div>
        </a>
      ))}

      {/* Contact form */}
      <div className="card" style={{ marginTop: '2rem' }}>
        <div className="sec-label" style={{ marginBottom: '1.2rem' }}>// Send a Message</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input className="form-input" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Say hello..." />
          </div>
          <button type="submit" className="submit-btn">Send Message →</button>
          {submitted && <div className="success-msg">✓ Message sent! I'll get back to you soon.</div>}
        </form>
      </div>
    </>
  )
}