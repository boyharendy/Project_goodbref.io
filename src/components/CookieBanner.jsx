import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('catchmarket_cookies_accepted')) return
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem('catchmarket_cookies_accepted', 'true')
    setVisible(false)
  }

  return (
    <div className={`cookie-banner${visible ? ' cookie-banner--visible' : ''}`}>
      <p className="cookie-banner__text">
        Kami menggunakan cookies untuk meningkatkan pengalaman Anda.{' '}
        <a href="/privacy">Pelajari Selengkapnya</a>
      </p>
      <div className="cookie-banner__actions">
        <button className="btn btn--primary btn--sm" onClick={accept}>Terima</button>
        <button className="btn btn--secondary btn--sm" onClick={accept}>Pengaturan</button>
      </div>
    </div>
  )
}
