# 👥 WordPress SDM Profile Page Generator

Aplikasi web generator interaktif berbasis HTML, CSS, dan JavaScript untuk membuat halaman **Struktur Organisasi & Profil SDM** (Sumber Daya Manusia) yang siap dipasang (copy-paste) pada halaman kustom **WordPress** tanpa memerlukan plugin tambahan.

Aplikasi ini menghasilkan kode gabungan HTML, CSS, dan JavaScript yang bersifat mandiri (*self-contained*), terisolasi (*scoped CSS*), dan dioptimalkan agar tidak bentrok dengan tema WordPress bawaan Anda.

---

## ✨ Fitur Utama

1. **Desain Kartu Grid Modern & Akordeon**:
   * Menampilkan profil personel dalam layout grid responsif.
   * Setiap personel memuat data: Foto, Nama Lengkap, NIP, Jabatan, Subdirektorat, Pendidikan Formal, Diklat/Seminar/Workshop, dan Sertifikasi Kompetensi.
   * Data detail (Pendidikan, Diklat, Sertifikasi) disusun dalam menu lipat (**Akordeon**) yang interaktif dan hemat ruang untuk masing-masing kartu staf.

2. **Manajemen Data Personel (CRUD) & Urutan**:
   * **Tambah/Edit/Hapus Data**: Kelola data staf langsung dari dashboard generator lewat form modal yang dinamis.
   * **Pengaturan Urutan (▲/▼)**: Pindahkan urutan personel ke atas atau ke bawah secara mudah untuk menyesuaikan struktur kepemimpinan (Direktur, Sekretaris, Kasubdit, Staf).
   * **Pencarian Real-Time**: Cari staf berdasarkan nama, NIP, atau jabatan dengan cepat.

3. **LocalStorage Database**:
   * Semua perubahan data personel dan preferensi tema otomatis disimpan di memori lokal browser (`LocalStorage`). Data Anda tetap aman meskipun browser ditutup atau halaman disegarkan (*refresh*).

4. **Kustomisasi Tema Dinamis**:
   * **Warna Utama (Aksen)**: Atur warna tombol, border aktif, dan dekorasi tema dengan color picker atau 5 warna preset korporat.
   * **Kelengkungan Sudut (Radius)**: Sesuaikan kebulatan kartu dan tombol via slider (0px s.d 24px).
   * **Font Halaman**: Gunakan font bawaan WordPress (*inherit*) atau pilih font profesional seperti *Plus Jakarta Sans*, *Outfit*, atau *Inter*.
   * **Bentuk Bingkai Foto**: Pilihlah bingkai foto berbentuk **Kotak Tumpul (Rounded)**, **Bulat (Lingkaran)**, atau **Kotak Presisi (Square)**.

5. **Lightbox Photo Zoom (Resolusi Penuh)**:
   * Foto profil personel tidak dikompres. Ketika diklik, foto akan memicu modal jendela melayang (*lightbox*) dengan latar belakang blur transparan, menampilkan foto dalam ukuran besar lengkap dengan takarir (*caption*) nama dan jabatan staf.

6. **Offline-Ready Fallback Avatar**:
   * Jika berkas foto personel belum diunggah atau tidak ditemukan di server, sistem akan otomatis menghasilkan avatar vektor (SVG) yang elegan secara dinamis mengikuti warna tema yang dipilih.

---

## 📂 Struktur File Project

Seluruh file source code disimpan dalam direktori project:
* 📄 [index.html](file:///data/data/com.termux/files/home/postingpagewpcustom/index.html) — Kerangka antarmuka workspace generator dan form modal.
* 🎨 [style.css](file:///data/data/com.termux/files/home/postingpagewpcustom/style.css) — Desain UI workspace gelap (*dark mode*) yang premium dan responsif.
* ⚙️ [app.js](file:///data/data/com.termux/files/home/postingpagewpcustom/app.js) — Logika database LocalStorage, operasi CRUD, reordering personel, dan compiler kode WordPress.
* 🔗 **foto_web/** — Symbolic link ke folder penyimpanan foto di memori HP Anda (`/storage/emulated/0/foto_web`).

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi generator ini dapat dijalankan langsung di HP Anda melalui Termux dengan server web bawaan Python.

### Langkah Menjalankan Server:
1. Jalankan perintah server di Termux Anda:
   ```bash
   python3 -m http.server 8080
   ```
2. Buka web browser di HP Anda dan akses URL:
   👉 **[http://localhost:8080](http://localhost:8080)**

### Akses dari Komputer/Laptop (Satu Jaringan Wi-Fi):
1. Cari tahu IP lokal HP Anda (misal `192.168.1.15`).
2. Buka web browser di komputer/laptop Anda dan akses URL:
   👉 `http://192.168.1.15:8080`

---

## 📷 Menghubungkan Foto Personel

Aplikasi ini menggunakan rujukan relatif path folder `foto_web/[nomor].jpg` untuk foto personel default 1 s.d 20.

Agar foto personel dapat tampil pada **Pratinjau Tampilan** di browser:
1. Pastikan Anda memiliki folder bernama `foto_web` di memori internal HP Anda yang berisi file gambar bernama `1.jpg`, `2.jpg`, `3.jpg`, ..., hingga `20.jpg` (tanpa kompresi).
2. Tautan symbolic link di Termux otomatis menghubungkan folder tersebut ke server lokal generator sehingga gambar terbaca dengan sukses.

---

## 📝 Langkah Pemasangan ke WordPress

Setelah Anda selesai menyesuaikan tema dan menyusun data personel di aplikasi generator, ikuti langkah berikut untuk memasang hasilnya ke WordPress:

1. Buka tab **"Kode Siap Paste"** di sudut kanan atas aplikasi generator.
2. Klik tombol hijau **"Salin Kode HTML"** (pesan sukses "✓ Berhasil Disalin!" akan muncul).
3. Masuk ke halaman admin/dashboard **WordPress** Anda.
4. Buat halaman baru (**Pages -> Add New**) atau edit halaman yang sudah ada.
5. **Jika Menggunakan Gutenberg Editor (Blok)**:
   * Klik tombol **+** (Tambah Blok).
   * Cari dan pilih blok **HTML Khusus** (atau **Custom HTML**).
   * Tempel (*paste*) kode yang disalin ke dalam kotak input blok tersebut.
6. **Jika Menggunakan Classic Editor**:
   * Ubah editor dari mode **Visual** ke mode **Teks (HTML)** di sudut kanan atas kotak input.
   * Tempel (*paste*) seluruh kode di baris paling bawah.
7. Sebelum menerbitkan halaman, pastikan Anda telah mengunggah folder **`foto_web`** yang berisi foto-foto personel ke server website WordPress Anda (di direktori root/utama atau sesuai folder rujukan path yang Anda isi di form data personel).
8. Klik **Terbitkan** atau **Perbarui**. Selesai! Halaman profil SDM instansi Anda sekarang aktif, responsif, dan interaktif.
