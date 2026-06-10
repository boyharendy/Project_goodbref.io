import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/pages/about.css'

import heroImg from '../assets/images/hero/hero.png'
import artisanImg from '../assets/images/about/artisan.png'
import ringImg from '../assets/images/products/ring.png'
import braceletImg from '../assets/images/products/bracelet.png'

export default function AboutPage() {
  const revealRef = useScrollReveal()

  const values = [
    { icon: '*', title: 'Craftsmanship', text: 'Setiap detail dikerjakan dengan keahlian tangan yang telah diasah selama bertahun-tahun, memastikan kesempurnaan di setiap karya.' },
    { icon: '*', title: 'Eksklusivitas', text: 'Tidak ada dua perhiasan yang identik. Setiap karya memiliki karakter unik yang mencerminkan jiwa pembuatnya.' },
    { icon: '*', title: 'Kepercayaan', text: 'Reputasi kami dibangun di atas integritas, transparansi, dan komitmen terhadap kualitas yang tidak pernah berkompromi.' },
    { icon: '*', title: 'Keintiman', text: 'Kami memahami bahwa perhiasan adalah ekspresi cinta. Setiap interaksi dengan pelanggan kami jalin dengan kehangatan personal.' },
  ]

  const processSteps = [
    { num: '01', img: artisanImg, title: 'Desain & Inspirasi', text: 'Tim desainer kami menciptakan konsep unik yang memadukan estetika klasik dengan sentuhan modern.' },
    { num: '02', img: ringImg, title: 'Pemilihan Material', text: 'Kami hanya menggunakan material berkualitas tertinggi emas murni, berlian bersertifikat, dan batu mulia pilihan.' },
    { num: '03', img: braceletImg, title: 'Keahlian Tangan', text: 'Pengrajin ahli kami mengerjakan setiap detail dengan tangan dari pembentukan hingga finishing akhir.' },
  ]

  const locations = [
    { city: 'Jakarta Selatan', address: 'Jl. Kemang Raya No. 88\nJakarta Selatan 12730', hours: 'Sen Sab: 09:00 18:00 | Min: 10:00 15:00' },
    { city: 'Surabaya', address: 'Jl. Basuki Rahmat No. 120\nSurabaya 60271', hours: 'Sen Sab: 09:00 18:00 | Min: 10:00 15:00' },
    { city: 'Bandung', address: 'Jl. Dago No. 55\nBandung 40132', hours: 'Sen Sab: 09:00 18:00 | Min: 10:00 15:00' },
    { city: 'Yogyakarta', address: 'Jl. Malioboro No. 42\nYogyakarta 55213', hours: 'Sen Sab: 09:00 18:00 | Min: 10:00 15:00' },
    { city: 'Bali', address: 'Jl. Sunset Road No. 77\nSeminyak, Bali 80361', hours: 'Sen Sab: 09:00 18:00 | Min: 10:00 15:00' },
    { city: 'Medan', address: 'Jl. Asia No. 15\nMedan 20214', hours: 'Sen Sab: 09:00 18:00 | Min: 10:00 15:00' },
  ]

  return (
    <div ref={revealRef}>
      <section className="page-hero">
        <img src={heroImg} alt="Catch Market jewelry" className="page-hero__bg" />
        <div className="page-hero__content">
          <p className="page-hero__label">Tentang Kami</p>
          <h1 className="page-hero__title">Cerita di Balik Setiap Karya</h1>
          <p className="page-hero__subtitle">Mengenal lebih dekat filosofi, sejarah, dan dedikasi yang menjadikan Catch Market istimewa.</p>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story__grid">
            <div className="reveal">
              <p className="story__label">Sejarah Kami</p>
              <h2 className="story__title">Bermula dari Passion, Bertumbuh dengan Dedikasi</h2>
              <p className="story__text">Catch Market didirikan dengan satu visi sederhana namun kuat: membawa keindahan perhiasan buatan tangan ke dalam kehidupan sehari-hari pasangan Indonesia. Dari sebuah workshop kecil, kami tumbuh menjadi jaringan toko perhiasan yang diakui secara nasional.</p>
              <p className="story__text">Nama "Catch Market" terinspirasi dari keinginan untuk "menangkap" esensi keindahan dan cinta dalam setiap karya menjadikannya bagian dari cerita hidup pelanggan kami.</p>
              <p className="story__text">Selama bertahun-tahun, kami tetap setia pada prinsip pertama kami: setiap perhiasan harus dibuat dengan tangan, dengan perhatian penuh pada detail, dan dengan cinta yang sama seperti cinta yang akan diberikan bersama perhiasan tersebut.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <img src={artisanImg} alt="Proses pembuatan perhiasan handmade" className="story__image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label" style={{ color: 'var(--color-gray)' }}>Visi & Misi</p>
            <h2 className="section-title">Apa yang Kami Percaya</h2>
            <div className="section-divider"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', maxWidth: '900px', margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-wide)', marginBottom: 'var(--space-md)', color: 'var(--color-white)' }}>Visi</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-on-dark-muted)', lineHeight: 'var(--lh-relaxed)' }}>Menjadi destinasi utama bagi pasangan Indonesia yang mencari perhiasan buatan tangan berkualitas tinggi sebuah simbol cinta, kebersamaan, dan momen tak terlupakan.</p>
            </div>
            <div className="reveal reveal-delay-2" style={{ textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-wide)', marginBottom: 'var(--space-md)', color: 'var(--color-white)' }}>Misi</h3>
              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-on-dark-muted)', lineHeight: 'var(--lh-relaxed)' }}>Menghadirkan perhiasan artisanal yang memadukan tradisi keahlian tangan dengan desain kontemporer, didukung oleh layanan pelanggan yang hangat dan personal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Nilai-Nilai Kami</p>
            <h2 className="section-title">Yang Menjadikan Kami Berbeda</h2>
            <div className="section-divider"></div>
          </div>
          <div className="values__grid">
            {values.map((v, i) => (
              <div className={`value-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="process">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Proses Kami</p>
            <h2 className="section-title">Dari Inspirasi Menuju Karya</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Setiap perhiasan Catch Market melewati proses panjang yang penuh dedikasi.</p>
          </div>
          <div className="process__grid">
            {processSteps.map((s, i) => (
              <div className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
                <p className="process-step__number">{s.num}</p>
                <img src={s.img} alt={s.title} className="process-step__image" />
                <h3 className="process-step__title">{s.title}</h3>
                <p className="process-step__text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="locations">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Jaringan Toko</p>
            <h2 className="section-title">Temukan Kami di Kota Anda</h2>
            <div className="section-divider"></div>
          </div>
          <div className="locations__grid">
            {locations.map((loc, i) => (
              <div className={`location-card reveal${i % 4 !== 0 ? ` reveal-delay-${i % 4}` : ''}`} key={i}>
                <h3 className="location-card__city">{loc.city}</h3>
                <p className="location-card__address" style={{ whiteSpace: 'pre-line' }}>{loc.address}</p>
                <p className="location-card__hours">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2 className="cta-banner__title">Ingin Tahu Lebih Lanjut?</h2>
          <p className="cta-banner__text">Tim kami siap membantu Anda menemukan perhiasan yang sempurna untuk setiap momen berharga.</p>
          <Link to="/#contact" className="btn btn--on-dark btn--lg">Hubungi Kami</Link>
        </div>
      </section>
    </div>
  )
}
