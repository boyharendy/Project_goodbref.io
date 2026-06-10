import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true)
      return
    }

    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHomePage])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleContactClick = (e) => {
    if (isHomePage) {
      e.preventDefault()
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navLinkClass = (path) =>
    `header__nav-link${location.pathname === path ? ' header__nav-link--active' : ''}`

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`} id="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo" style={scrolled ? { color: 'var(--color-near-black)' } : undefined}>
            <svg className="header__logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L17.5 8.5L25 10L19.5 15.5L21 23L14 19L7 23L8.5 15.5L3 10L10.5 8.5L14 2Z" fill="currentColor" opacity="0.9"/>
            </svg>
            Catch Market
          </Link>

          <nav className="header__nav">
            <Link to="/" className={navLinkClass('/')}>Beranda</Link>
            <Link to="/about" className={navLinkClass('/about')}>Tentang Kami</Link>
            <Link to="/products" className={navLinkClass('/products')}>Produk</Link>
            {isHomePage ? (
              <a href="#contact" className="header__nav-cta" onClick={handleContactClick}>Hubungi Kami</a>
            ) : (
              <Link to="/#contact" className="header__nav-cta">Hubungi Kami</Link>
            )}
          </nav>

          <button
            className={`header__hamburger${mobileOpen ? ' header__hamburger--active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? ' mobile-nav--open' : ''}`}>
        <Link to="/" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Beranda</Link>
        <Link to="/about" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Tentang Kami</Link>
        <Link to="/products" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Produk</Link>
        {isHomePage ? (
          <a href="#contact" className="mobile-nav__link" onClick={handleContactClick}>Hubungi Kami</a>
        ) : (
          <Link to="/#contact" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Hubungi Kami</Link>
        )}
      </div>
    </>
  )
}
