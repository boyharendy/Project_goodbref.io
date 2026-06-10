import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useScrollRevealSingle } from '../hooks/useScrollReveal'
import '../styles/pages/products.css'

import ringImg from '../assets/images/products/ring.png'
import necklaceImg from '../assets/images/products/necklace.png'
import braceletImg from '../assets/images/products/bracelet.png'
import earringsImg from '../assets/images/products/earrings.png'
import setImg from '../assets/images/products/set.png'
import pendantImg from '../assets/images/products/pendant.png'
import heroImg from '../assets/images/hero/hero.png'

export default function ProductsPage() {
  const revealRef = useScrollReveal()
  const filterRevealRef = useScrollRevealSingle()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    { id: 1, category: 'cincin', name: 'Eternal Promise', desc: 'Cincin berlian buatan tangan dengan desain abadi yang melambangkan komitmen tanpa akhir. Setiap berlian dipilih secara cermat untuk memastikan kilauan yang sempurna.', material: 'Emas Putih 18K, Berlian 0.5ct', technique: 'Hand-setting, Micro-pavé', img: ringImg },
    { id: 2, category: 'kalung', name: 'Midnight Whisper', desc: 'Kalung emas dengan liontin artisanal yang terinspirasi dari keindahan malam. Setiap rantai dikerjakan dengan teknik hand-link yang memastikan kekuatan dan keanggunan.', material: 'Emas Kuning 22K, Batu Safir', technique: 'Hand-link chain, Bezel setting', img: necklaceImg },
    { id: 3, category: 'gelang', name: 'Golden Embrace', desc: 'Gelang emas yang memeluk pergelangan tangan dengan kelembutan dan elegansi. Desain kontemporer yang tetap menghormati teknik pembuatan tradisional.', material: 'Emas Kuning 18K', technique: 'Hand-forging, Hammered texture', img: braceletImg },
    { id: 4, category: 'anting', name: 'Luminous Drop', desc: 'Anting juntai dengan kilauan misterius yang memukau. Setiap pasangan dipoles dengan teknik khusus untuk menciptakan permainan cahaya yang dramatis.', material: 'Emas Putih 18K, Mutiara South Sea', technique: 'Hand-polishing, Pearl setting', img: earringsImg },
    { id: 5, category: 'set', name: 'Celestial Harmony', desc: 'Set perhiasan lengkap yang dirancang untuk saling melengkapi menciptakan harmoni visual yang memukau. Set ini mencakup cincin, kalung, dan anting yang senada.', material: 'Emas Rose Gold 18K, Berlian, Batu Ruby', technique: 'Ensemble design, Hand-matching', img: setImg },
    { id: 6, category: 'kalung', name: 'Veiled Elegance', desc: 'Liontin dengan batu mulia yang tersembunyi di balik desain yang elegan. Sebuah rahasia kecantikan yang hanya diketahui oleh pemiliknya sempurna untuk jiwa yang misterius.', material: 'Emas Putih 18K, Emerald, Berlian', technique: 'Hidden gem setting, Filigree', img: pendantImg },
    { id: 7, category: 'cincin', name: 'Infinity Weave', desc: 'Cincin dengan motif anyaman infinity yang melambangkan cinta tanpa batas. Teknik anyaman dikerjakan sepenuhnya dengan tangan, membutuhkan keahlian tinggi.', material: 'Emas Kuning 22K', technique: 'Hand-weaving, Infinity knot', img: ringImg },
    { id: 8, category: 'gelang', name: 'Twilight Chain', desc: 'Gelang rantai dengan finishing yang menciptakan efek senja perpaduan kilau dan bayangan yang mempesona. Cocok untuk segala kesempatan.', material: 'Emas Rose Gold 18K', technique: 'Artisan chain-link, Satin finish', img: braceletImg },
    { id: 9, category: 'anting', name: 'Starlight Studs', desc: 'Anting tindik dengan berlian yang menangkap cahaya seperti bintang di malam hari. Desain minimalis namun berdampak visual yang kuat.', material: 'Emas Putih 18K, Berlian 0.3ct per piece', technique: 'Star-cut setting, Mirror polish', img: earringsImg },
  ]

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'cincin', label: 'Cincin' },
    { id: 'kalung', label: 'Kalung' },
    { id: 'gelang', label: 'Gelang' },
    { id: 'anting', label: 'Anting' },
    { id: 'set', label: 'Set Perhiasan' },
  ]

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter)

  // Handle modal body scroll lock
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProduct])

  return (
    <div ref={revealRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <img src={heroImg} alt="Koleksi Catch Market" className="page-hero__bg" />
        <div className="page-hero__content">
          <p className="page-hero__label">Katalog Perhiasan</p>
          <h1 className="page-hero__title">Koleksi Kami</h1>
          <p className="page-hero__subtitle">Temukan keindahan dalam setiap detail perhiasan buatan tangan yang dirancang untuk momen berharga Anda.</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section" id="productsSection">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar reveal" ref={filterRevealRef}>
            {filters.map(f => (
              <button 
                key={f.id} 
                className={`filter-btn${activeFilter === f.id ? ' filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((p, i) => (
              <div 
                className={`product-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`} 
                key={`${p.id}-${activeFilter}`} // force re-render for animation on filter change
                onClick={() => setSelectedProduct(p)}
              >
                <div className="product-card__image-wrapper">
                  <img src={p.img} alt={p.name} className="product-card__image" />
                  <span className="product-card__quick-view">Lihat Detail</span>
                </div>
                <div className="product-card__content">
                  <p className="product-card__category">{p.category.charAt(0).toUpperCase() + p.category.slice(1)}</p>
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.desc.substring(0, 60)}...</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="products-cta reveal">
            <p className="products-cta__text">Tidak menemukan yang Anda cari?</p>
            <Link to="/#contact" className="btn btn--primary btn--lg">Hubungi Kami untuk Pemesanan Khusus</Link>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <div className={`product-modal${selectedProduct ? ' product-modal--open' : ''}`}>
        <div className="product-modal__overlay" onClick={() => setSelectedProduct(null)}></div>
        <div className="product-modal__container">
          <button className="product-modal__close" onClick={() => setSelectedProduct(null)} aria-label="Tutup">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L4 12M4 4l8 8"/></svg>
          </button>
          
          {selectedProduct && (
            <>
              <img src={selectedProduct.img} alt={selectedProduct.name} className="product-modal__image" />
              <div className="product-modal__info">
                <p className="product-modal__category">{selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}</p>
                <h2 className="product-modal__name">{selectedProduct.name}</h2>
                <p className="product-modal__desc">{selectedProduct.desc}</p>
                
                <div className="product-modal__details">
                  <div className="product-modal__detail">
                    <span className="product-modal__detail-label">Material</span>
                    <span className="product-modal__detail-value">{selectedProduct.material}</span>
                  </div>
                  <div className="product-modal__detail">
                    <span className="product-modal__detail-label">Teknik</span>
                    <span className="product-modal__detail-value">{selectedProduct.technique}</span>
                  </div>
                  <div className="product-modal__detail">
                    <span className="product-modal__detail-label">Tipe</span>
                    <span className="product-modal__detail-value">Buatan Tangan</span>
                  </div>
                </div>
                
                <Link to="/#contact" className="btn btn--primary" style={{ width: '100%' }} onClick={() => setSelectedProduct(null)}>
                  Tanyakan Tentang Produk Ini
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
