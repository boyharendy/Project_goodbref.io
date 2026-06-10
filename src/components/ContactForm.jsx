import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = true
    if (!formData.subject) errs.subject = true
    if (!formData.message.trim()) errs.message = true
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="form-success form-success--visible">
        <svg className="form-success__icon" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <h3 className="form-success__title">Pesan Terkirim!</h3>
        <p className="form-success__text">Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1x24 jam kerja.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
        <label htmlFor="name" className="form-label">Nama Lengkap</label>
        <input type="text" id="name" name="name" className="form-input" placeholder="Masukkan nama lengkap Anda" value={formData.name} onChange={handleChange} />
        <p className="form-error">Nama lengkap wajib diisi</p>
      </div>
      <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-input" placeholder="email@contoh.com" value={formData.email} onChange={handleChange} />
        <p className="form-error">Masukkan alamat email yang valid</p>
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label">Nomor Telepon</label>
        <input type="tel" id="phone" name="phone" className="form-input" placeholder="+62 xxx xxxx xxxx" value={formData.phone} onChange={handleChange} />
      </div>
      <div className={`form-group${errors.subject ? ' form-group--error' : ''}`}>
        <label htmlFor="subject" className="form-label">Subjek</label>
        <select id="subject" name="subject" className="form-select" value={formData.subject} onChange={handleChange}>
          <option value="" disabled>Pilih subjek</option>
          <option value="informasi-produk">Informasi Produk</option>
          <option value="pemesanan-khusus">Pemesanan Khusus</option>
          <option value="layanan-purna-jual">Layanan Purna Jual</option>
          <option value="kerjasama">Kerjasama</option>
          <option value="lainnya">Lainnya</option>
        </select>
        <p className="form-error">Silakan pilih subjek</p>
      </div>
      <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
        <label htmlFor="message" className="form-label">Pesan</label>
        <textarea id="message" name="message" className="form-textarea" placeholder="Tuliskan pesan Anda..." value={formData.message} onChange={handleChange} />
        <p className="form-error">Pesan wajib diisi</p>
      </div>
      <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }} disabled={sending}>
        {sending ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </form>
  )
}
