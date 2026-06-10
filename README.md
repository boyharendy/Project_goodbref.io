# Catch Market — Perhiasan Buatan Tangan Eksklusif

Catch Market adalah proyek situs web *Single Page Application* (SPA) yang dibangun untuk jaringan toko perhiasan artisanal. Website ini berfungsi sebagai platform layanan pelanggan sekaligus *showcase* katalog produk yang elegan dan misterius.

## Teknologi yang Digunakan

Proyek ini dibangun secara modern dengan fokus pada performa yang cepat dan desain antarmuka yang mulus:

*   **React (v18)**: *Library* JavaScript utama untuk membangun antarmuka pengguna berbasis komponen (*Reusable Components*).
*   **Vite**: Alat *build* generasi baru (*Build Tool*) yang membuat proses *compile* dan server lokal (HMR) berjalan super cepat.
*   **React Router DOM**: Digunakan untuk sistem navigasi (*Routing*) agar perpindahan antar halaman (Beranda, Produk, Tentang Kami, dll.) tidak memerlukan proses *loading/refresh* (SPA).
*   **Vanilla CSS**: Seluruh gaya, tata letak, dan tema (*styling*) dikodekan murni menggunakan CSS standar — memanfaatkan fitur modern seperti *CSS Variables/Design Tokens*, *Flexbox*, dan *CSS Grid*.
*   **Intersection Observer API**: Digunakan lewat *custom hook* React (`useScrollReveal.js`) untuk memantau kapan suatu elemen masuk ke dalam layar pengguna, memicu animasi *fade-in* (*Scroll Animations*) yang halus.

## Fitur Utama

*   **Desain Minimalis & Monokromatik**: Menggunakan pendekatan warna hitam, putih, dan abu-abu gelap dengan ruang kosong (*whitespace*) yang dramatis untuk menonjolkan visual perhiasan secara maksimal.
*   **Katalog Interaktif**: Halaman *Produk* dilengkapi dengan tombol kategori (Filter) dan *Pop-up Modal* untuk melihat deskripsi detail dari setiap perhiasan.
*   **Animasi Scroll**: Setiap elemen dan teks akan muncul secara bertahap saat Anda men-scroll halaman ke bawah.
*   **Komponen Universal**: Bagian-bagian seperti Navigasi (*Header*), Kaki Halaman (*Footer*), Slider Testimoni, dan Formulir Kontak dikelola sebagai satu kesatuan komponen sehingga mudah dipakai ulang di berbagai halaman.

## Cara Menjalankan Proyek Secara Lokal

1. Pastikan komputer Anda telah terinstal **Node.js**.
2. *Clone* atau unduh repositori ini.
3. Buka terminal (atau *Command Prompt*) pada folder proyek ini.
4. Instal semua paket yang dibutuhkan dengan menjalankan:
   ```bash
   npm install
   ```
5. Mulai jalankan *server* lokal dengan perintah:
   ```bash
   npm run dev
   ```
6. Buka *browser* Anda dan kunjungi tautan yang muncul (biasanya `http://localhost:5173/`).
