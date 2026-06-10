import { Link } from 'react-router-dom'
import '../styles/pages/privacy.css'

export default function PrivacyPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="page-hero__label">Legal</p>
          <h1 className="page-hero__title">Kebijakan Privasi</h1>
          <p className="page-hero__subtitle">Komitmen kami terhadap perlindungan data pribadi Anda.</p>
        </div>
      </section>

      {/* Privacy Content */}
      <div className="container">
        <div className="privacy-content">
          <p className="privacy-date">Berlaku sejak: 1 Januari 2026 | Terakhir diperbarui: 10 Juni 2026</p>

          <h2>1. Pendahuluan</h2>
          <p>
            Catch Market ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi yang Anda berikan saat menggunakan situs web kami.
          </p>
          <p>
            Dengan mengakses dan menggunakan situs web ini, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini. Jika Anda tidak setuju dengan kebijakan ini, mohon untuk tidak menggunakan layanan kami.
          </p>

          <h2>2. Data yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan informasi berikut:</p>
          <ul>
            <li><strong>Data yang Anda berikan secara langsung:</strong> Nama lengkap, alamat email, nomor telepon, dan pesan yang Anda kirimkan melalui formulir kontak kami.</li>
            <li><strong>Data yang dikumpulkan secara otomatis:</strong> Alamat IP, jenis browser, sistem operasi, halaman yang dikunjungi, waktu kunjungan, dan data interaksi lainnya melalui cookies dan teknologi serupa.</li>
            <li><strong>Data dari pihak ketiga:</strong> Data analitik dari Google Analytics yang membantu kami memahami pola penggunaan situs web.</li>
          </ul>

          <h2>3. Tujuan Penggunaan Data</h2>
          <p>Data yang kami kumpulkan digunakan untuk:</p>
          <ul>
            <li>Merespons pertanyaan, permintaan informasi, dan pesan yang Anda kirimkan melalui formulir kontak.</li>
            <li>Meningkatkan kualitas layanan dan pengalaman pengguna di situs web kami.</li>
            <li>Mengirimkan komunikasi pemasaran (hanya jika Anda telah memberikan persetujuan eksplisit).</li>
            <li>Menganalisis tren penggunaan situs untuk pengembangan produk dan layanan.</li>
            <li>Memenuhi kewajiban hukum yang berlaku.</li>
          </ul>

          <h2>4. Penyimpanan dan Keamanan Data</h2>
          <p>
            Kami menyimpan data pribadi Anda hanya selama diperlukan untuk tujuan yang telah dijelaskan di atas, atau selama diwajibkan oleh hukum yang berlaku. Data dari formulir kontak disimpan selama maksimal 24 bulan sejak tanggal pengiriman, kecuali Anda meminta penghapusan lebih awal.
          </p>
          <p>
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi data Anda dari akses yang tidak sah, penggunaan yang tidak tepat, pengungkapan, perubahan, atau penghancuran. Langkah-langkah ini meliputi enkripsi SSL/TLS, pembatasan akses, dan audit keamanan berkala.
          </p>

          <h2>5. Hak Anda</h2>
          <p>Anda memiliki hak berikut terkait data pribadi Anda:</p>
          <ul>
            <li><strong>Hak Akses:</strong> Anda berhak meminta salinan data pribadi yang kami simpan tentang Anda.</li>
            <li><strong>Hak Koreksi:</strong> Anda berhak meminta perbaikan atas data yang tidak akurat atau tidak lengkap.</li>
            <li><strong>Hak Penghapusan:</strong> Anda berhak meminta penghapusan data pribadi Anda dari sistem kami.</li>
            <li><strong>Hak Penarikan Persetujuan:</strong> Jika Anda telah memberikan persetujuan untuk komunikasi pemasaran, Anda dapat menariknya kapan saja.</li>
            <li><strong>Hak Portabilitas:</strong> Anda berhak meminta data Anda dalam format yang dapat dibaca mesin.</li>
          </ul>
          <p>
            Untuk menggunakan hak-hak di atas, silakan hubungi kami melalui email di <a href="mailto:privacy@catchmarket.id">privacy@catchmarket.id</a>.
          </p>

          <h2>6. Penggunaan Cookies</h2>
          <p>
            Situs web kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. Cookies adalah file teks kecil yang disimpan di perangkat Anda saat Anda mengunjungi situs web kami.
          </p>
          <p>Kami menggunakan jenis cookies berikut:</p>
          <ul>
            <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar situs web, seperti navigasi dan akses ke area aman.</li>
            <li><strong>Cookies Analitik:</strong> Membantu kami memahami bagaimana pengunjung berinteraksi dengan situs web kami (Google Analytics).</li>
            <li><strong>Cookies Fungsional:</strong> Mengingat preferensi Anda, seperti pilihan bahasa.</li>
          </ul>
          <p>
            Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda. Menonaktifkan cookies tertentu mungkin mempengaruhi fungsionalitas situs web.
          </p>

          <h2>7. Berbagi Data dengan Pihak Ketiga</h2>
          <p>
            Kami tidak menjual, memperdagangkan, atau menyewakan data pribadi Anda kepada pihak ketiga. Kami hanya berbagi data dalam situasi berikut:
          </p>
          <ul>
            <li>Dengan penyedia layanan yang membantu kami mengoperasikan situs web (misalnya, hosting, analitik), yang terikat oleh perjanjian kerahasiaan.</li>
            <li>Jika diwajibkan oleh hukum, regulasi, atau proses hukum yang berlaku.</li>
            <li>Untuk melindungi hak, properti, atau keselamatan Catch Market, pengguna kami, atau publik.</li>
          </ul>

          <h2>8. Tautan ke Situs Eksternal</h2>
          <p>
            Situs web kami mungkin berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten situs-situs tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi setiap situs yang Anda kunjungi.
          </p>

          <h2>9. Perubahan Kebijakan</h2>
          <p>
            Kami berhak memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan signifikan akan diinformasikan melalui pemberitahuan di situs web kami. Tanggal "Terakhir diperbarui" di bagian atas halaman ini menunjukkan kapan kebijakan terakhir direvisi.
          </p>
          <p>
            Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala untuk tetap mendapatkan informasi tentang bagaimana kami melindungi data Anda.
          </p>

          <h2>10. Kontak</h2>
          <p>
            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau pengelolaan data pribadi Anda, silakan hubungi kami:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@catchmarket.id">privacy@catchmarket.id</a></li>
            <li><strong>Telepon:</strong> +62 21 5555 7890</li>
            <li><strong>Alamat:</strong> Jl. Kemang Raya No. 88, Jakarta Selatan 12730</li>
          </ul>

          <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
            <Link to="/#contact" className="btn btn--primary">Hubungi Kami</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
