import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="header__logo" style={{ color: 'var(--color-white)', marginBottom: 'var(--space-sm)', display: 'inline-flex' }}>
              <svg className="header__logo-icon" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L17.5 8.5L25 10L19.5 15.5L21 23L14 19L7 23L8.5 15.5L3 10L10.5 8.5L14 2Z" fill="currentColor" opacity="0.9"/>
              </svg>
              Catch Market
            </Link>
            <p className="footer__brand-desc">Perhiasan buatan tangan eksklusif untuk momen berharga Anda. Setiap karya menyimpan cerita.</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer__heading">Navigasi</h4>
            <Link to="/" className="footer__link">Beranda</Link>
            <Link to="/about" className="footer__link">Tentang Kami</Link>
            <Link to="/products" className="footer__link">Produk</Link>
            <Link to="/#contact" className="footer__link">Hubungi Kami</Link>
          </div>
          <div>
            <h4 className="footer__heading">Kontak</h4>
            <div className="footer__contact-item">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M10 10.5C11.1 10.5 12 9.6 12 8.5C12 7.4 11.1 6.5 10 6.5C8.9 6.5 8 7.4 8 8.5C8 9.6 8.9 10.5 10 10.5Z"/><path d="M10 18C10 18 16 13 16 8.5C16 5.2 13.3 2.5 10 2.5C6.7 2.5 4 5.2 4 8.5C4 13 10 18 10 18Z"/></svg>
              <span>Jl. Kemang Raya No. 88, Jakarta Selatan</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 5.5C3 4.4 3.9 3.5 5 3.5H6.6L9.2 5.7C9.6 6.1 9.6 6.7 9.2 7.1L8.1 8.2C7.7 8.6 7.7 9.2 8.1 9.6L10.4 11.9C10.8 12.3 11.4 12.3 11.8 11.9L12.9 10.8C13.3 10.4 13.9 10.4 14.3 10.8L16.2 12.7C16.4 12.9 16.5 13.1 16.5 13.4V15C16.5 16.1 15.6 17 14.5 17H14C7.9 17 3 12.1 3 6V5.5Z"/></svg>
              <span>+62 21 5555 7890</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2.5" y="4.5" width="15" height="11" rx="1.5"/><path d="M2.5 6.5L10 11.5L17.5 6.5"/></svg>
              <span>info@catchmarket.id</span>
            </div>
          </div>
          <div>
            <h4 className="footer__heading">Legal</h4>
            <Link to="/privacy" className="footer__link">Kebijakan Privasi</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Catch Market. All rights reserved.</p>
          <div className="footer__legal-links">
            <Link to="/privacy" className="footer__legal-link">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
