# WordPress Custom HTML Page Generator Kit

Kit ini berisi aplikasi web generator interaktif untuk membuat kode HTML, CSS, dan JavaScript siap pakai (copy-paste) pada halaman kustom WordPress **tanpa membutuhkan plugin tambahan**. Semua kode yang dihasilkan bersifat mandiri (*self-contained*) dan dioptimalkan agar tidak bentrok dengan tema WordPress bawaan.

---

## 📂 Struktur File Project

Seluruh source code aplikasi web disimpan dalam folder project di HP Anda:
* **Folder Utama**: [postingpagewpcustom](file:///data/data/com.termux/files/home/postingpagewpcustom)
* **Aplikasi Web Generator**: [index.html](file:///data/data/com.termux/files/home/postingpagewpcustom/index.html)
* **Desain UI Generator**: [style.css](file:///data/data/com.termux/files/home/postingpagewpcustom/style.css)
* **Database & Logika Generator**: [app.js](file:///data/data/com.termux/files/home/postingpagewpcustom/app.js)

---

## 🚀 Cara Menjalankan Halaman Generator

Server lokal secara otomatis telah dijalankan di HP Anda pada port **8080** menggunakan Python.

### Cara Akses:
1. Hubungkan HP dan Komputer ke jaringan Wi-Fi yang sama (jika ingin dibuka dari komputer/laptop).
2. Buka web browser (Chrome, Firefox, Safari) di HP atau komputer.
3. Masukkan alamat URL:
   * **Akses langsung dari HP**: [http://localhost:8080](http://localhost:8080)
   * **Akses dari komputer/laptop**: Ketahui IP lokal HP Anda (misal `192.168.1.15`), lalu buka `http://192.168.1.15:8080`

---

## 🛠️ Jenis Halaman & Opsi Tampilan yang Disediakan

Aplikasi generator ini mendukung pembuatan 6 jenis halaman dengan beberapa opsi tampilan:

### 1. 👥 Halaman Profil & Struktur Organisasi SDM
Menyajikan bagan kepengurusan mulai dari Direktur Utama, Sekretaris, 3 Kepala Subdirektorat, hingga 17 Staff teknis.
* **Opsi 1: Kartu Grid + Akordeon** (Pendidikan formal, non-formal, & kompetensi dalam menu lipat per personel).
* **Opsi 2: Kartu Grid + Popup Modal** (Klik kartu staf untuk membuka detail lengkap di jendela popup melayang).
* **Opsi 3: Navigasi Tab Subdirektorat** (Memfilter anggota berdasarkan sub-direktorat secara instan lewat tab).

### 2. 📞 Halaman Kontak Hubungi Kami
Menghubungkan pengunjung situs dengan unit kerja Anda melalui layout kontak modern.
* **Opsi 1: Belah Dua (Split Screen)** (Detail kontak di kiri, form pesan instan dengan tombol kirim di kanan, diakhiri dengan Google Maps lebar di bawah).
* **Opsi 2: Kartu Detail + Peta** (Tiga kartu info utama di bagian atas, Google Maps lebar di tengah, dan form pesan di bawah).

### 3. 🖼️ Halaman Galeri Foto Instansi
Menampilkan dokumentasi kegiatan atau aset penting dengan pembesar gambar (lightbox) mandiri.
* **Opsi 1: Masonry Grid + Lightbox** (Layout dinamis ala Pinterest dengan efek zoom popup lightbox + tombol navigasi Prev/Next saat gambar diklik).
* **Opsi 2: Filterable Grid Kategori** (Tersedia tab filter kategori seperti Kegiatan, Sosialisasi, Pelatihan, dll).

### 4. 🏆 Halaman Penghargaan & Prestasi
Memamerkan sertifikat penghargaan yang diraih oleh unit kerja.
* **Opsi 1: Grid Sertifikat + Zoom** (Grid kartu penghargaan dilengkapi badge tahun dan instansi pemberi. Sertifikat dapat diklik untuk diperbesar (*modal zoom*)).
* **Opsi 2: Linimasa (Timeline) Prestasi** (Perjalanan pencapaian disusun secara vertikal berurutan berdasarkan tahun pencapaian).

### 5. 📋 Halaman Bagan Alur SOP Kerja
Menjelaskan Standar Operasional Prosedur (SOP) internal secara terstruktur untuk keterbukaan publik.
* **Opsi 1: Langkah Bagan Alur** (Bagan proses beruntun dari atas ke bawah lengkap dengan rincian PIC dan batas waktu pengerjaan (SLA)).
* **Opsi 2: SOP Tabbed Diagram** (Filter berbagai dokumen SOP menggunakan tab di bagian atas untuk navigasi cepat).

### 6. ✍️ Halaman Posting Artikel & Blog (Baru!)
Mempublikasikan artikel berita atau opini instansi dengan elemen visual dinamis.
* **Opsi 1: Artikel Karosel Modern**:
  * **Efek Gambar**: Karosel foto responsif dengan navigasi Prev/Next & Dots indikator, serta efek zoom-in saat gambar di-hover.
  * **Variasi Bullets**: Menggunakan 3 gaya list kustom: Centang Hijau (`✓` checkmark), Bintang Emas (`★` star), dan Panah Aksen (`➔` arrow).
  * **Tipografi**: Efek Drop Cap (huruf pertama paragraf besar) dan Quote Box beraksen elegan.
* **Opsi 2: Layout Majalah & Sidebar**:
  * **Efek Gambar**: Foto melayang (*Float Up*) dengan bayangan tebal dinamis saat kursor di-hover.
  * **Variasi Bullets**: List angka kustom dengan lencana bulat berwarna aksen.
  * **Struktur**: Layout dua kolom (Kolom Artikel Utama di kiri, Widget Sidebar Informasi Penulis & Statistik di kanan).

---

## 🎨 Parameter Kustomisasi Tema (Sidebar Kiri)
Sebelum menyalin kode, Anda dapat mengatur:
1. **Warna Utama**: Ubah warna tema (aksen tombol, border, badge, hover, dll) agar selaras dengan branding instansi.
2. **Kelengkungan Sudut (Radius)**: Mengatur kebulatan sudut kartu atau bingkai foto.
3. **Font Tampilan**: Pilih font profesional (Plus Jakarta Sans, Outfit, Inter) atau biarkan mengikuti font default bawaan website WordPress Anda.
4. **Bentuk Bingkai**: Khusus untuk foto profil staf dan sertifikat, Anda bisa memilih bentuk Kotak Presisi, Kotak Tumpul, atau Bulat.

---

## 📝 Langkah Pemasangan ke WordPress

1. Buka aplikasi web generator di browser Anda.
2. Pilih **Jenis Halaman** dan **Opsi Tampilan** yang diinginkan di panel kontrol sebelah kiri.
3. Sesuaikan warna, radius sudut, bentuk foto, dan font sesuai selera.
4. Klik tab **"Kode Siap Paste (HTML/CSS/JS)"** di sudut kanan atas.
5. Klik tombol **"Salin Kode"** (Tombol akan berubah menjadi hijau "✓ Berhasil Disalin!").
6. Masuk ke halaman admin WordPress Anda, lalu pilih **Halaman / Pages** -> **Tambah Baru**.
7. **Jika Menggunakan Block Editor (Gutenberg)**:
   * Klik tanda **+ (Tambah Blok)**.
   * Cari dan pilih blok **HTML Khusus** (atau **Custom HTML**).
   * Tempelkan (*paste*) kode yang disalin ke dalam blok tersebut.
8. **Jika Menggunakan Classic Editor**:
   * Di atas kotak penulisan, klik tab **Teks** (bukan Visual).
   * Tempelkan (*paste*) seluruh kode di sana.
9. Tekan **Terbitkan** atau **Perbarui**. Selesai!
