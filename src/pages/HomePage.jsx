import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ContactForm from '../components/ContactForm'
import TestimonialSlider from '../components/TestimonialSlider'
import '../styles/pages/home.css'

import heroImg from '../assets/images/hero/hero.png'
import artisanImg from '../assets/images/about/artisan.png'
import ringImg from '../assets/images/products/ring.png'
import necklaceImg from '../assets/images/products/necklace.png'
import braceletImg from '../assets/images/products/bracelet.png'
import earringsImg from '../assets/images/products/earrings.png'

export default function HomePage() {
  const revealRef = useScrollReveal()
  const [showFloating, setShowFloating] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const contact = document.getElementById('contact')
      if (!hero) return

      const pastHero = hero.getBoundingClientRect().bottom < 0
      let contactVisible = false
      if (contact) {
        const r = contact.getBoundingClientRect()
        contactVisible = r.top < window.innerHeight && r.bottom > 0
      }
      setShowFloating(pastHero && !contactVisible)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle hash scroll on mount
  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }, [location.hash])

  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const featuredProducts = [
    { img: ringImg, category: 'Cincin', name: 'Eternal Promise', desc: 'Cincin berlian buatan tangan dengan desain abadi' },
    { img: necklaceImg, category: 'Kalung', name: 'Midnight Whisper', desc: 'Kalung emas dengan liontin artisanal yang anggun' },
    { img: braceletImg, category: 'Gelang', name: 'Golden Embrace', desc: 'Gelang emas yang memeluk pergelangan dengan elegan' },
    { img: earringsImg, category: 'Anting', name: 'Luminous Drop', desc: 'Anting juntai dengan kilauan misterius yang memukau' },
  ]

  const features = [
    { icon: <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>, title: 'Buatan Tangan Ahli', text: 'Setiap perhiasan dikerjakan oleh pengrajin berpengalaman dengan perhatian pada detail terkecil.' },
    { icon: <><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/><path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="1.5" fill="none"/></>, title: 'Reputasi Terpercaya', text: 'Bertahun-tahun membangun kepercayaan melalui kualitas dan layanan yang konsisten.' },
    { icon: <><path d="M24 8C24 8 10 16 10 28C10 34 16 40 24 40C32 40 38 34 38 28C38 16 24 8 24 8Z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M24 20V30M20 26L24 30L28 26" stroke="currentColor" strokeWidth="1.5"/></>, title: 'Eksklusif untuk Anda', text: 'Desain unik yang tidak diproduksi massal mencerminkan keistimewaan pemiliknya.' },
    { icon: <><rect x="8" y="14" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="24" cy="25" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M14 14V12C14 10.8954 14.8954 10 16 10H32C33.1046 10 34 10.8954 34 10V14" stroke="currentColor" strokeWidth="1.5"/></>, title: 'Jaringan Nasional', text: 'Hadir di berbagai kota besar Indonesia, selalu dekat dengan Anda.' },
  ]

  return (
    <div ref={revealRef}>
      {/* ══════ HERO ══════ */}
      <section className="hero" id="hero">
        <img src={heroImg} alt="Perhiasan buatan tangan Catch Market" className="hero__bg" loading="eager" />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="hero__label">Perhiasan Buatan Tangan Eksklusif</p>
          <h1 className="hero__title">Keindahan yang Diciptakan untuk Anda</h1>
          <p className="hero__subtitle">Setiap karya kami menyimpan cerita dirancang dengan keahlian tangan dan dedikasi untuk momen berharga bersama orang yang Anda cintai.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--on-dark btn--lg" onClick={scrollToContact}>Hubungi Kami</a>
            <Link to="/products" className="btn btn--ghost" style={{ color: 'var(--color-silver)' }}>Jelajahi Koleksi <span className="arrow">→</span></Link>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ══════ ABOUT BRIEF ══════ */}
      <section className="about-brief" id="aboutBrief">
        <div className="container">
          <div className="about-brief__grid">
            <div className="about-brief__image-wrapper reveal">
              <img src={artisanImg} alt="Proses pembuatan perhiasan Catch Market" className="about-brief__image" />
              <div className="about-brief__image-accent"></div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="about-brief__label">Tentang Kami</p>
              <h2 className="about-brief__title">Cerita di Balik Setiap Karya</h2>
              <p className="about-brief__text">Catch Market lahir dari kecintaan mendalam terhadap seni perhiasan. Sebagai jaringan toko perhiasan buatan tangan terkemuka, kami memadukan tradisi keahlian artisanal dengan estetika modern menciptakan karya yang tak hanya indah, tetapi juga penuh makna.</p>
              <p className="about-brief__text">Setiap perhiasan kami dikerjakan oleh tangan-tangan terampil yang berdedikasi, memastikan keunikan dan kualitas yang tidak bisa ditandingi oleh produksi massal.</p>
              <Link to="/about" className="btn btn--ghost">Pelajari Selengkapnya <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FEATURED PRODUCTS ══════ */}
      <section className="section section--alt" id="featuredProducts">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Koleksi Kami</p>
            <h2 className="section-title">Koleksi Pilihan</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Temukan keindahan dalam setiap detail perhiasan buatan tangan yang menceritakan kisah cinta Anda.</p>
          </div>
          <div className="featured-products__grid">
            {featuredProducts.map((p, i) => (
              <div className={`card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
                <div className="card__image-wrapper">
                  <img src={p.img} alt={p.name} className="card__image" />
                  <div className="card__overlay"></div>
                </div>
                <div className="card__content">
                  <p className="card__category">{p.category}</p>
                  <h3 className="card__title">{p.name}</h3>
                  <p className="card__description">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-3xl)' }}>
            <Link to="/products" className="btn btn--secondary">Lihat Semua Koleksi <span className="arrow" style={{ marginLeft: '4px' }}>→</span></Link>
          </div>
        </div>
      </section>

      {/* ══════ WHY US ══════ */}
      <section className="section" id="whyUs">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Keunggulan Kami</p>
            <h2 className="section-title">Mengapa Memilih Catch Market</h2>
            <div className="section-divider"></div>
          </div>
          <div className="why-us__grid">
            {features.map((f, i) => (
              <div className={`feature-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
                <svg className="feature-card__icon" viewBox="0 0 48 48" fill="none">{f.icon}</svg>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section section--alt" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Testimoni</p>
            <h2 className="section-title">Kata Mereka</h2>
            <div className="section-divider"></div>
          </div>
          <div className="reveal">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ══════ CONTACT US ══════ */}
      <section className="section section--contact" id="contact">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Hubungi Kami</p>
            <h2 className="section-title">Kami Siap Membantu Anda</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Temukan perhiasan yang sempurna untuk momen berharga Anda. Tim kami dengan senang hati akan membantu.</p>
          </div>
          <div className="contact__grid">
            <div className="reveal">
              <ContactForm />
            </div>
            <div className="contact__info reveal reveal-delay-2">
              <h3 className="contact__info-title">Informasi Kontak</h3>
              <p className="contact__info-text">Kami selalu siap mendengar Anda. Hubungi kami melalui formulir, atau datang langsung ke toko kami.</p>
              <div className="contact__details">
                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 20 20" fill="none"><path d="M10 10.5C11.1046 10.5 12 9.60457 12 8.5C12 7.39543 11.1046 6.5 10 6.5C8.89543 6.5 8 7.39543 8 8.5C8 9.60457 8.89543 10.5 10 10.5Z" stroke="currentColor" strokeWidth="1.2"/><path d="M10 18C10 18 16 13 16 8.5C16 5.18629 13.3137 2.5 10 2.5C6.68629 2.5 4 5.18629 4 8.5C4 13 10 18 10 18Z" stroke="currentColor" strokeWidth="1.2"/></svg>
                  <div><p className="contact__detail-label">Alamat</p><p className="contact__detail-content">Jl. Kemang Raya No. 88<br/>Jakarta Selatan 12730</p></div>
                </div>
                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 20 20" fill="none"><path d="M3 5.5C3 4.39543 3.89543 3.5 5 3.5H6.58579C6.851 3.5 7.10536 3.60536 7.29289 3.79289L9.20711 5.70711C9.59763 6.09763 9.59763 6.73079 9.20711 7.12132L8.12132 8.20711C7.73079 8.59763 7.73079 9.23079 8.12132 9.62132L10.3787 11.8787C10.7692 12.2692 11.4024 12.2692 11.7929 11.8787L12.8787 10.7929C13.2692 10.4024 13.9024 10.4024 14.2929 10.7929L16.2071 12.7071C16.3946 12.8946 16.5 13.149 16.5 13.4142V15C16.5 16.1046 15.6046 17 14.5 17H14C7.92487 17 3 12.0751 3 6V5.5Z" stroke="currentColor" strokeWidth="1.2"/></svg>
                  <div><p className="contact__detail-label">Telepon</p><p className="contact__detail-content">+62 21 5555 7890</p></div>
                </div>
                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M2.5 6.5L10 11.5L17.5 6.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                  <div><p className="contact__detail-label">Email</p><p className="contact__detail-content">info@catchmarket.id</p></div>
                </div>
                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2"/><path d="M10 5.5V10L13 12" stroke="currentColor" strokeWidth="1.2"/></svg>
                  <div><p className="contact__detail-label">Jam Operasional</p><p className="contact__detail-content">Senin – Sabtu: 09:00 – 18:00<br/>Minggu: 10:00 – 15:00</p></div>
                </div>
              </div>
              <iframe className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMzYuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" allowFullScreen="" loading="lazy" title="Lokasi Catch Market"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA (Desktop) */}
      <div className={`floating-cta${showFloating ? ' floating-cta--visible' : ''}`}>
        <a href="#contact" className="floating-cta__btn" onClick={scrollToContact}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          Hubungi Kami
        </a>
      </div>

      {/* Sticky CTA (Mobile) */}
      <div className={`sticky-cta${showFloating ? ' sticky-cta--visible' : ''}`}>
        <a href="#contact" className="sticky-cta__link" onClick={scrollToContact}>💬 Hubungi Kami Sekarang</a>
      </div>
    </div>
  )
}
