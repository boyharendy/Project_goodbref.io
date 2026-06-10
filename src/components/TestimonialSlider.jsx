import { useState, useEffect, useCallback } from 'react'

export default function TestimonialSlider() {
  const testimonials = [
    { quote: 'Perhiasan dari Catch Market benar-benar istimewa. Suami saya memberikannya sebagai hadiah anniversary, dan saya bisa merasakan sentuhan buatan tangan yang penuh cinta di setiap detailnya.', author: 'Rina S. Jakarta' },
    { quote: 'Saya tidak pernah menemukan perhiasan dengan karakter sekuat ini di tempat lain. Setiap kali memakainya, saya merasa membawa sesuatu yang benar-benar unik.', author: 'Diana M. Surabaya' },
    { quote: 'Mencari hadiah untuk istri tidak pernah semudah ini. Tim Catch Market membantu saya memilih yang sempurna, dan hasilnya melebihi ekspektasi.', author: 'Adi P. Bandung' },
    { quote: 'Kualitas dan pelayanan yang luar biasa. Catch Market memahami bahwa perhiasan bukan sekadar aksesori ia adalah simbol dari momen berharga.', author: 'Sari K. Yogyakarta' },
  ]

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((i) => setCurrent(i), [])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [paused, testimonials.length])

  return (
    <div
      className="testimonial-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonial-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div className="testimonial-slide" key={i}>
            <p className="testimonial__quote">{t.quote}</p>
            <p className="testimonial__author">{t.author}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot${i === current ? ' testimonial-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Testimoni ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
