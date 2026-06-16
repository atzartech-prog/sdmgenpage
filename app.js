// app.js - WordPress Custom Page Generator (Multi Page Kit)

// Default Databases
const database = {
    sdm: [
        {
            id: "dir_1",
            name: "Dr. Ir. H. Ahmad Fauzi, M.B.A.",
            position: "Direktur Utama",
            division: "direksi",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Teknik Industri - Universitas Indonesia", "S2 Master of Business Administration - ITB", "S3 Manajemen Bisnis - UGM"],
            eduNonFormal: ["Executive Leadership Program - Harvard Business School", "Strategic Management Certificate - Prasetiya Mulya"],
            competencies: ["Strategic Leadership", "Corporate Governance", "Change Management"]
        },
        {
            id: "sek_1",
            name: "Rina Astuti, A.Md.Sek.",
            position: "Sekretaris Direktur Utama",
            division: "direksi",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["D3 Administrasi Perkantoran & Kesekretariatan - Universitas Indonesia"],
            eduNonFormal: ["Professional Executive Secretary Course - LPI"],
            competencies: ["Executive Assistance", "Office Administration", "Meeting Scheduling"]
        },
        {
            id: "ksd_1",
            name: "Ahmad Rinaldi, M.Kom.",
            position: "Kepala Subdirektorat Perencanaan & Pelayanan Informasi",
            division: "subdit1",
            photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Sistem Informasi - Binus University", "S2 Magister Ilmu Komputer - Universitas Indonesia"],
            eduNonFormal: ["Project Management Professional (PMP) Training", "ITIL Foundations Certification"],
            competencies: ["IT Project Management", "System Architecture", "IT Governance"]
        },
        // Staff Subdit 1 (6 staff)
        {
            id: "st1_1", name: "Budi Pratama, S.Kom.", position: "Staff Perencanaan Sistem", division: "subdit1",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Teknik Informatika - UNDIP"], eduNonFormal: ["System Analysis and Design - ITB"], competencies: ["System Analysis", "Requirements Engineering"]
        },
        {
            id: "st1_2", name: "Siti Khadijah, S.Tr.Kom.", position: "Staff Programmer & Database", division: "subdit1",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["D4 Rekayasa Perangkat Lunak - PNJ"], eduNonFormal: ["Fullstack Web Development Bootcamp"], competencies: ["React/Node.js", "SQL Tuning"]
        },
        {
            id: "st1_3", name: "Dian Lestari, S.I.Kom.", position: "Staff Humas & Pelayanan Publik", division: "subdit1",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Ilmu Komunikasi - UNPAD"], eduNonFormal: ["Digital Marketing and Social Media Management"], competencies: ["Public Relations", "Content Creation"]
        },
        {
            id: "st1_4", name: "Fajar Nugraha, S.T.", position: "Staff Infrastruktur Jaringan", division: "subdit1",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Teknik Telekomunikasi - Telkom Univ"], eduNonFormal: ["CCNA Certification Course"], competencies: ["Network Architecture", "Firewall Configuration"]
        },
        {
            id: "st1_5", name: "Aulia Rahman, S.Kom.", position: "Staff Keamanan Informasi", division: "subdit1",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Cyber Security - Binus"], eduNonFormal: ["Certified Ethical Hacker (CEH) Course"], competencies: ["Penetration Testing", "Security Auditing"]
        },
        {
            id: "st1_6", name: "Eka Saputra, S.Si.", position: "Staff Analis Data & Statistik", division: "subdit1",
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Statistika - UGM"], eduNonFormal: ["Data Science with Python & R"], competencies: ["Data Modeling", "Dashboard Design"]
        },

        {
            id: "ksd_2",
            name: "Ir. Diana Novita, M.T.",
            position: "Kepala Subdirektorat Operasional Teknis & Logistik",
            division: "subdit2",
            photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Teknik Elektro - ITB", "S2 Magister Manajemen Proyek - UI"],
            eduNonFormal: ["Supply Chain Management Certification (CSCP)", "Six Sigma Green Belt Training"],
            competencies: ["Operations Management", "Supply Chain Logistics", "Process Optimization"]
        },
        // Staff Subdit 2 (6 staff)
        {
            id: "st2_1", name: "Hendra Setiawan, S.T.", position: "Staff Operasional Server", division: "subdit2",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Teknik Komputer - UNS"], eduNonFormal: ["AWS Solutions Architect Training"], competencies: ["Linux Admin", "Cloud Infrastructure"]
        },
        {
            id: "st2_2", name: "Rian Hidayat, S.Tr.T.", position: "Staff Logistik & Inventaris", division: "subdit2",
            photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["D4 Manajemen Logistik - POLBAN"], eduNonFormal: ["Warehouse Management Best Practices"], competencies: ["Inventory Auditing", "Procurement Planning"]
        },
        {
            id: "st2_3", name: "Novianti, A.Md.T.", position: "Teknisi Hardware & Troubleshooting", division: "subdit2",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["D3 Teknik Komputer - POLISRI"], eduNonFormal: ["CompTIA A+ (IT Technician) Course"], competencies: ["Hardware Diagnostics", "OS Deployment"]
        },
        {
            id: "st2_4", name: "Arief Wijaya, S.T.", position: "Staff Monitoring Jaringan", division: "subdit2",
            photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Teknik Elektro - Universitas Brawijaya"], eduNonFormal: ["Zabbix & Grafana Monitoring Training"], competencies: ["Network Monitoring", "SNMP Config"]
        },
        {
            id: "st2_5", name: "Ratih Indah, S.E.", position: "Staff Administrasi Teknis", division: "subdit2",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Manajemen Keuangan - UNILA"], eduNonFormal: ["Technical Report Writing Course"], competencies: ["Budget Tracking", "Invoicing & Archiving"]
        },
        {
            id: "st2_6", name: "Gilang Permana, S.Tr.T.", position: "Teknisi Kelistrikan & Pendingin Server", division: "subdit2",
            photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["D4 Teknik Kelistrikan - PNJ"], eduNonFormal: ["Precision Air Conditioning PAC Maintenance"], competencies: ["UPS Power Supply", "K3 Certification"]
        },

        {
            id: "ksd_3",
            name: "Hendra Kusuma, S.E., M.M.",
            position: "Kepala Subdirektorat Pengembangan SDM & Umum",
            division: "subdit3",
            photo: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Manajemen - UNAIR", "S2 Magister Manajemen SDM - UNPAD"],
            eduNonFormal: ["Human Resource Business Partner (HRBP) Certification", "Talent Management Course"],
            competencies: ["Talent Management", "Strategic HR Planning", "Industrial Relations"]
        },
        // Staff Subdit 3 (5 staff)
        {
            id: "st3_1", name: "Yulia Fitri, S.Psi.", position: "Staff Rekrutmen & Pelatihan", division: "subdit3",
            photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Psikologi - Universitas Indonesia"], eduNonFormal: ["Competency-Based Interviewing Course"], competencies: ["Psychometric Testing", "Behavioral Interview"]
        },
        {
            id: "st3_2", name: "Taufik Hidayat, S.H.", position: "Staff Legal & Tata Tertib", division: "subdit3",
            photo: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Hukum - UNDIP"], eduNonFormal: ["Drafting Employment Agreements Certification"], competencies: ["Legal Drafting", "Labor Law Compliance"]
        },
        {
            id: "st3_3", name: "Indra Kusuma, A.Md.", position: "Staff Rumah Tangga & Kearsipan", division: "subdit3",
            photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["D3 Kearsipan - UGM"], eduNonFormal: ["Modern Digital Archiving Systems"], competencies: ["Digital Archiving", "Facility Management"]
        },
        {
            id: "st3_4", name: "Dewi Sartika, S.Pd.", position: "Staff Administrasi Kepegawaian", division: "subdit3",
            photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Administrasi Pendidikan - UNJ"], eduNonFormal: ["Payroll Administration & PPh 21 Course"], competencies: ["HRIS Systems", "Attendance Tracking"]
        },
        {
            id: "st3_5", name: "Rizky Pratama, S.Sos.", position: "Staff Hubungan Antar Lembaga & CSR", division: "subdit3",
            photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=256&h=256",
            eduFormal: ["S1 Sosiologi - UNAIR"], eduNonFormal: ["Corporate Social Responsibility Strategy"], competencies: ["Stakeholder Relations", "CSR Executions"]
        }
    ],
    kontak: {
        address: "Gedung Utama Unit Kerja, Lantai 2, Jl. Merdeka No. 45, Jakarta Pusat, 10110",
        phone: "(021) 555-0199 / WA: +62 812-3456-7890",
        email: "kontak@unitkerja.go.id / ppid@unitkerja.go.id",
        hours: [
            { day: "Senin - Kamis", time: "08:00 - 16:00 WIB" },
            { day: "Jumat", time: "08:00 - 16:30 WIB" },
            { day: "Sabtu - Minggu / Libur Nasional", time: "Tutup (Pelayanan Online)" }
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664271810577!2d106.8249641!3d-6.1753924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2dbbe3e2d%3A0x2727142750e30d7b!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
    },
    galeri: [
        { id: "gal_1", title: "Rapat Koordinasi Evaluasi Kinerja Triwulan II", category: "kegiatan", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600", desc: "Pertemuan seluruh jajaran kepemimpinan dan staff untuk melakukan evaluasi kinerja." },
        { id: "gal_2", title: "Sosialisasi Standar Pelayanan Publik Baru", category: "sosialisasi", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=600", desc: "Pemaparan modul pelayanan publik terbaru guna menyelaraskan SOP eksternal." },
        { id: "gal_3", title: "Outbound & Team Building Tahunan", category: "umum", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=600", desc: "Membangun kekompakan dan sinergi antar direktorat lewat simulasi tantangan fisik." },
        { id: "gal_4", title: "Workshop Peningkatan Kapasitas SDM Bidang IT", category: "pelatihan", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=600", desc: "Pelatihan administrasi cloud dan keamanan data center untuk staff operasional." },
        { id: "gal_5", title: "Studi Banding Peningkatan Layanan Digital", category: "kegiatan", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=600", desc: "Kunjungan kerja komparatif ke Command Center Smart City Dinas terkait." },
        { id: "gal_6", title: "Penerimaan Penghargaan Wilayah Bebas Korupsi (WBK)", category: "kegiatan", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600", desc: "Penyerahan sertifikat WBK dari Kemenpan-RB atas konsistensi reformasi birokrasi." }
    ],
    prestasi: [
        { id: "pres_1", title: "Penghargaan Kepatuhan Standar Pelayanan Publik", year: "2025", issuer: "Ombudsman RI", img: "https://images.unsplash.com/photo-1589330694653-ded6df53f7ee?auto=format&fit=crop&q=80&w=600&h=450", desc: "Meraih Kategori Hijau (Kepatuhan Tinggi) dalam survei berkala standar pelayanan publik administrasi se-Indonesia." },
        { id: "pres_2", title: "Sertifikasi Sistem Manajemen Mutu ISO 9001:2015", year: "2024", issuer: "SUCOFINDO International", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=600&h=450", desc: "Standardisasi penjaminan mutu operasional internal dan proses pelayanan logistik pendukung." },
        { id: "pres_3", title: "Juara I Kompetisi Inovasi Pelayanan Publik", year: "2023", issuer: "Kementerian Pendayagunaan Aparatur Negara", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600&h=450", desc: "Penghargaan atas inovasi digitalisasi alur pengaduan masyarakat secara real-time dan terintegrasi." }
    ],
    sop: [
        {
            title: "SOP Pengajuan Pertanggungjawaban Keuangan (SPJ)",
            desc: "Alur formal pengajuan dana pengadaan barang/jasa operasional kantor.",
            steps: [
                { nr: 1, title: "Penyusunan Berkas & Kwitansi", desc: "Staff pelaksana menyusun draf SPJ dilengkapi kwitansi, nota, dan dokumentasi fisik.", pic: "Staff Administrasi", duration: "1 Hari Kerja" },
                { nr: 2, title: "Verifikasi Berkas", desc: "Pemeriksa memeriksa kelayakan berkas berdasarkan pos anggaran belanja.", pic: "Pejabat Pembuat Komitmen (PPK)", duration: "1 Hari Kerja" },
                { nr: 3, title: "Persetujuan & SPM", desc: "Pemberian tandatangan persetujuan dan penerbitan Surat Perintah Membayar.", pic: "Kuasa Pengguna Anggaran (KPA)", duration: "1 Hari Kerja" },
                { nr: 4, title: "Pencairan Dana Transfer", desc: "Penyaluran dana belanja langsung ke rekening vendor atau penanggungjawab kegiatan.", pic: "Bendahara Pengeluaran", duration: "1 Hari Kerja" }
            ]
        },
        {
            title: "SOP Layanan Permohonan Data & Informasi Publik",
            desc: "Alur permohonan informasi umum bagi masyarakat/lembaga eksternal.",
            steps: [
                { nr: 1, title: "Registrasi Pemohon", desc: "Pemohon mengisi formulir permohonan di website atau meja informasi PPID dengan kartu identitas.", pic: "Pemohon / Petugas Meja Informasi", duration: "15 Menit" },
                { nr: 2, title: "Klasifikasi & Disposisi", desc: "Petugas PPID menguji ketersediaan informasi (apakah berkala, serta-merta, atau dikecualikan).", pic: "Pejabat Pengelola Informasi (PPID)", duration: "2 Hari Kerja" },
                { nr: 3, title: "Pemrosesan Data", desc: "Subdirektorat terkait menyiapkan data mentah dan melakukan verifikasi keamanan informasi.", pic: "Staff Teknis Pengolah Data", duration: "3 Hari Kerja" },
                { nr: 4, title: "Penyerahan Dokumen", desc: "Informasi dikirim via email terenkripsi atau diserahkan dalam bentuk cetak resmi.", pic: "Petugas Pelayanan Publik", duration: "1 Hari Kerja" }
            ]
        }
    ],
    artikel: {
        title: "Peningkatan Kinerja Melalui Inovasi Pelayanan Publik Berbasis Digital",
        author: "Tim Riset Humas & Publikasi",
        date: "16 Juni 2026",
        category: "Teknologi & Informasi",
        content1: "Di era digitalisasi saat ini, peningkatan kinerja unit kerja mutlak memerlukan adopsi teknologi yang tepat guna. Transformasi pelayanan publik tidak hanya merestrukturisasi alur birokrasi dari tatap muka langsung menjadi serba online, melainkan juga mengubah paradigma para aparatur pelaksana pelayanan agar bertindak lebih responsif, transparan, cepat, dan akuntabel. Integrasi sistem informasi yang mapan menjadi pondasi utama untuk melahirkan layanan yang cepat saji dan tepercaya.",
        content2: "Menghadapi tantangan teknologi ke depan, kami telah memetakan beberapa langkah strategis yang didesain secara adaptif. Penerapan standar operasional prosedur digital ini terbukti menaikkan produktivitas kerja staff serta menekan angka keluhan operasional harian. Dukungan teknologi terenkripsi tinggi juga diaplikasikan guna menjamin kerahasiaan berkas sensitif milik pemohon layanan publik.",
        images: [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=450",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=450",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800&h=450"
        ],
        bullets: {
            check: [
                "Mengurangi waktu verifikasi berkas pengajuan hingga 75%.",
                "Memudahkan pemantauan progres permohonan secara real-time dan terbuka.",
                "Menjamin keamanan data dengan enkripsi database berlapis SSL."
            ],
            arrow: [
                "Melakukan audit berkala sistem IT dan data center keamanan.",
                "Menyelenggarakan pelatihan IT khusus untuk staff pelayanan lini depan.",
                "Mengumpulkan feedback masyarakat via survei kepuasan digital otomatis."
            ],
            star: [
                "Perolehan Indeks Kepuasan Masyarakat (IKM) berskala 3.82 dari 4.00.",
                "Sertifikat Keamanan Informasi berstandar nasional dan regional.",
                "Penghargaan Inovator Layanan Terintegrasi Terbaik Tahun 2025."
            ],
            number: [
                "Identifikasi masalah bottleneck pada pelayanan luring konvensional.",
                "Perancangan arsitektur database terpadu satu pintu.",
                "Uji coba lapangan (Beta testing) dan perbaikan bugs berkelanjutan.",
                "Peluncuran sistem (Go Live) secara menyeluruh disertai panduan panduan."
            ]
        }
    }
};

// Available Styles for each Page Type
const styleOptions = {
    sdm: [
        { value: "accordion", label: "Kartu Grid + Akordeon", desc: "Kotak profile modern dengan data pendidikan dropdown di dalam kartu." },
        { value: "modal", label: "Kartu Grid + Popup Modal", desc: "Membuka detail pendidikan, kompetensi di popup melayang yang interaktif." },
        { value: "tabbed", label: "Navigasi Tab Subdirektorat", desc: "Menyaring tampilan personel berdasarkan divisi/subdit melalui tab filter." }
    ],
    kontak: [
        { value: "split", label: "Belah Dua (Split Screen)", desc: "Layout responsif membagi panel Info Detail (Kiri) dan Formulir Kontak (Kanan)." },
        { value: "cards", label: "Kartu Tiga Kolom + Peta", desc: "Tiga kartu info mandiri (Telepon, Email, Alamat) di atas peta Google Map lebar." }
    ],
    galeri: [
        { value: "masonry", label: "Masonry Grid + Lightbox", desc: "Grid tidak sejajar estetik ala Pinterest dengan pembesar gambar melayang." },
        { value: "filter", label: "Filterable Grid Kategori", desc: "Memfilter gambar berdasarkan kategori (kegiatan, pelatihan) dengan efek hover." }
    ],
    prestasi: [
        { value: "grid", label: "Grid Sertifikat + Zoom", desc: "Menampilkan jajaran penghargaan dengan kartu dokumen yang bisa dizoom." },
        { value: "timeline", label: "Linimasa Prestasi", desc: "Menyusun perjalanan penghargaan secara kronologis vertikal per tahun." }
    ],
    sop: [
        { value: "flow", label: "Langkah Bagan Alur", desc: "Bagan kartu horizontal mengalir dihubungkan dengan panah penunjuk jalan." },
        { value: "tabs", label: "SOP Tabbed Diagram", desc: "Menyaring berkas SOP berdasarkan jenis dokumen menggunakan tab khusus." }
    ],
    artikel: [
        { value: "modern", label: "Artikel Karosel Modern", desc: "Post artikel dengan Karosel Foto, efek zoom, bullet checkmark & star kustom." },
        { value: "magazine", label: "Layout Majalah & Sidebar", desc: "Artikel berita dengan layout dua kolom, galeri foto melayang, dan list angka kustom." }
    ]
};

// Application State
const state = {
    pageType: "sdm",
    template: "accordion",
    primaryColor: "#3b82f6",
    cardRadius: 12,
    fontFamily: "inherit",
    photoStyle: "rounded"
};

// DOM Elements
const pageTypeSelect = document.getElementById("page-type");
const styleSelectorContainer = document.getElementById("style-selector-container");
const primaryColorInput = document.getElementById("primary-color");
const primaryColorTextInput = document.getElementById("primary-color-text");
const cardRadiusInput = document.getElementById("card-radius");
const cardRadiusValue = document.getElementById("card-radius-value");
const fontFamilySelect = document.getElementById("font-family");
const photoStyleSelect = document.getElementById("photo-style");
const photoStyleGroup = document.getElementById("photo-style-group");
const radiusControlGroup = document.getElementById("radius-control-group");
const tabTriggers = document.querySelectorAll(".tab-trigger");
const tabContents = document.querySelectorAll(".tab-content");
const previewIframe = document.getElementById("preview-iframe");
const codeOutput = document.getElementById("code-output");
const copyCodeBtn = document.getElementById("copy-code-btn");
const respBtns = document.querySelectorAll(".resp-btn");
const infoBoxText = document.getElementById("info-box-text");
const pageTitleDisplay = document.getElementById("page-title-display");

// Initialize application
function init() {
    setupEventListeners();
    renderStyleOptions();
    generate();
}

// Setup Event Listeners
function setupEventListeners() {
    // Page Type Select
    pageTypeSelect.addEventListener("change", (e) => {
        state.pageType = e.target.value;
        
        // Pick default style for new page type
        state.template = styleOptions[state.pageType][0].value;
        
        // Hide/show options that are irrelevant
        toggleOptionsPanel();
        
        // Rerender style selector and code
        renderStyleOptions();
        updateInfoText();
        generate();
    });

    // Color Pickers
    primaryColorInput.addEventListener("input", (e) => {
        state.primaryColor = e.target.value;
        primaryColorTextInput.value = e.target.value;
        generate();
    });

    primaryColorTextInput.addEventListener("input", (e) => {
        let val = e.target.value;
        if (val.match(/^#[0-9A-Fa-f]{6}$/)) {
            state.primaryColor = val;
            primaryColorInput.value = val;
            generate();
        }
    });

    // Card radius
    cardRadiusInput.addEventListener("input", (e) => {
        state.cardRadius = parseInt(e.target.value);
        cardRadiusValue.textContent = `${state.cardRadius}px`;
        generate();
    });

    // Font selection
    fontFamilySelect.addEventListener("change", (e) => {
        state.fontFamily = e.target.value;
        generate();
    });

    // Photo style selection
    photoStyleSelect.addEventListener("change", (e) => {
        state.photoStyle = e.target.value;
        generate();
    });

    // Tabs switcher (Preview vs Code)
    tabTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            tabTriggers.forEach(t => t.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            trigger.classList.add("active");
            const targetId = `tab-${trigger.dataset.tab}`;
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Responsive Simulator Buttons
    respBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            respBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            previewIframe.style.width = btn.dataset.width;
        });
    });

    // Copy to Clipboard
    copyCodeBtn.addEventListener("click", () => {
        const text = codeOutput.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyCodeBtn.innerHTML;
            copyCodeBtn.style.backgroundColor = "#10b981";
            copyCodeBtn.innerHTML = "✅ Berhasil Disalin!";
            setTimeout(() => {
                copyCodeBtn.style.backgroundColor = "";
                copyCodeBtn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            alert("Gagal menyalin kode.");
        });
    });
}

// Show/Hide context-sensitive setting inputs
function toggleOptionsPanel() {
    if (state.pageType === "kontak" || state.pageType === "sop" || state.pageType === "artikel") {
        photoStyleGroup.style.display = "none";
    } else {
        photoStyleGroup.style.display = "block";
    }

    if (state.pageType === "kontak") {
        radiusControlGroup.style.display = "none";
    } else {
        radiusControlGroup.style.display = "block";
    }
}

// Render available template options for the current page type
function renderStyleOptions() {
    styleSelectorContainer.innerHTML = "";
    const options = styleOptions[state.pageType];
    
    options.forEach((opt, idx) => {
        const button = document.createElement("button");
        button.className = `template-btn ${state.template === opt.value ? 'active' : ''}`;
        button.dataset.value = opt.value;
        
        let emoji = "📁";
        if (state.pageType === "kontak") emoji = idx === 0 ? "🔀" : "🗂️";
        else if (state.pageType === "galeri") emoji = idx === 0 ? "🖼️" : "🏷️";
        else if (state.pageType === "prestasi") emoji = idx === 0 ? "🏆" : "📈";
        else if (state.pageType === "sop") emoji = idx === 0 ? "🔀" : "📂";
        else if (state.pageType === "artikel") emoji = idx === 0 ? "📝" : "📖";
        
        button.innerHTML = `
            <div class="icon">${emoji}</div>
            <div class="details">
                <span class="title">${opt.label}</span>
                <span class="desc">${opt.desc}</span>
            </div>
        `;
        
        button.addEventListener("click", () => {
            document.querySelectorAll(".template-btn").forEach(b => b.classList.remove("active"));
            button.classList.add("active");
            state.template = opt.value;
            generate();
        });
        
        styleSelectorContainer.appendChild(button);
    });
}

// Update the informational panel based on page type selection
function updateInfoText() {
    let text = "";
    let title = "";
    switch (state.pageType) {
        case "sdm":
            title = "Struktur & SDM Page Builder";
            text = "Menyediakan grid data untuk 1 Direktur, 1 Sekretaris, 3 Kasubdit, dan 17 Staff. Lengkap dengan akordeon mandiri tanpa plugin.";
            break;
        case "kontak":
            title = "Kontak Hubungi Kami Page Builder";
            text = "Menghasilkan halaman kontak profesional dengan rincian jam kerja, data email/telepon, embed google maps dinamis, serta form pengiriman pesan.";
            break;
        case "galeri":
            title = "Galeri Foto Instansi Page Builder";
            text = "Menghasilkan grid gambar teratur dengan plugin-free Lightbox. Mengklik gambar memicu modal lightbox yang menampilkan resolusi penuh beserta navigasi.";
            break;
        case "prestasi":
            title = "Penghargaan & Prestasi Page Builder";
            text = "Menyajikan pencapaian penting unit kerja. Tersedia dalam layout grid sertifikat dengan modal-zoom ataupun layout linimasa (timeline) kronologis.";
            break;
        case "sop":
            title = "Bagan Alur & SOP Kerja Page Builder";
            text = "Menampilkan Standar Operasional Prosedur (SOP) secara visual. Rincian penanggungjawab (PIC) dan jangka waktu (SLA) disertakan pada setiap bagan.";
            break;
        case "artikel":
            title = "Posting Artikel & Blog Page Builder";
            text = "Menghasilkan posting artikel modern dengan Karosel Gambar responsif, efek zoom/hover foto, dan berbagai variasi bullet kustom (check, star, numbers) tanpa plugin.";
            break;
    }
    infoBoxText.innerHTML = text;
    pageTitleDisplay.textContent = title;
}

// Generate current page HTML
function generate() {
    const generatedHTML = generateTemplateCode(state);
    
    // Update visual preview iframe
    updatePreviewFrame(generatedHTML);
    
    // Update code output pre/code block
    codeOutput.textContent = generatedHTML;
}

function updatePreviewFrame(html) {
    const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
                    background-color: #f8fafc;
                    margin: 0;
                    padding: 40px 20px;
                }
                .wp-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                }
                .wp-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 25px;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 12px;
                }
            </style>
        </head>
        <body>
            <div class="wp-container">
                <h1 class="wp-title">${getPageHeaderTitle()}</h1>
                ${html}
            </div>
        </body>
        </html>
    `);
    iframeDoc.close();
}

function getPageHeaderTitle() {
    switch (state.pageType) {
        case "sdm": return "Profil & Struktur Organisasi SDM";
        case "kontak": return "Hubungi Kami (Kontak Unit Kerja)";
        case "galeri": return "Galeri Dokumentasi Kegiatan";
        case "prestasi": return "Penghargaan & Prestasi Kerja";
        case "sop": return "Bagan Alur Prosedur Kerja (SOP)";
        case "artikel": return "Publikasi Artikel & Opini";
    }
}

// Master HTML compiler based on current options
function generateTemplateCode(s) {
    const primary = s.primaryColor;
    const radius = s.cardRadius;
    const font = s.fontFamily;
    const photoStyle = s.photoStyle;
    
    let photoRadius = "8px";
    if (photoStyle === "circle") photoRadius = "50%";
    if (photoStyle === "square") photoRadius = "0px";
    if (photoStyle === "rounded") photoRadius = `${radius}px`;

    let generatedHTML = "";

    // ----------------------------------------------------
    // TYPE: PROFIL SDM
    // ----------------------------------------------------
    if (s.pageType === "sdm") {
        const direktur = database.sdm.find(p => p.id === "dir_1");
        const sekretaris = database.sdm.find(p => p.id === "sek_1");
        const kasubdit1 = database.sdm.find(p => p.id === "ksd_1");
        const kasubdit2 = database.sdm.find(p => p.id === "ksd_2");
        const kasubdit3 = database.sdm.find(p => p.id === "ksd_3");
        const staff1 = database.sdm.filter(p => p.division === "subdit1" && p.id !== "ksd_1");
        const staff2 = database.sdm.filter(p => p.division === "subdit2" && p.id !== "ksd_2");
        const staff3 = database.sdm.filter(p => p.division === "subdit3" && p.id !== "ksd_3");

        const styles = `
<style>
.wpsdm-wrapper { font-family: ${font}; color: #1f2937; margin: 20px 0; }
.wpsdm-section-heading { font-size: 1.3rem; font-weight: 700; color: #1f2937; margin: 40px 0 20px 0; padding-left: 12px; border-left: 4px solid ${primary}; }
.wpsdm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-bottom: 40px; }
.wpsdm-grid-center { display: flex; justify-content: center; flex-wrap: wrap; gap: 24px; }
.wpsdm-card { background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: ${radius}px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); padding: 24px; display: flex; flex-direction: column; align-items: center; text-align: center; transition: all 0.3s ease; width: 100%; max-width: 330px; }
.wpsdm-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.07); border-color: #cbd5e1; }
.wpsdm-photo-container { width: 110px; height: 110px; margin-bottom: 16px; overflow: hidden; border-radius: ${photoRadius}; border: 3px solid #ffffff; box-shadow: 0 3px 8px rgba(0,0,0,0.08); }
.wpsdm-photo { width: 100%; height: 100%; object-fit: cover; }
.wpsdm-name { font-size: 1rem; font-weight: 700; color: #111827; margin: 0 0 6px 0; }
.wpsdm-position { font-size: 0.8rem; font-weight: 600; color: ${primary}; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.03em; }
.wpsdm-detail-btn { background-color: #f3f4f6; color: #374151; border: none; border-radius: 6px; padding: 8px 16px; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s; width: 100%; margin-top: auto; }
.wpsdm-detail-btn:hover { background-color: ${primary}; color: #ffffff; }

/* Accordion */
.wpsdm-acc-container { width: 100%; margin-top: 15px; border-top: 1px solid #f3f4f6; padding-top: 10px; text-align: left; }
.wpsdm-acc-item { margin-bottom: 5px; }
.wpsdm-acc-header { width: 100%; background: none; border: none; padding: 6px 2px; font-size: 0.75rem; font-weight: 700; color: #4b5563; text-align: left; cursor: pointer; display: flex; justify-content: space-between; }
.wpsdm-acc-header:hover { color: ${primary}; }
.wpsdm-acc-header::after { content: '▼'; font-size: 0.6rem; color: #9ca3af; transition: transform 0.2s; }
.wpsdm-acc-item.wpsdm-active .wpsdm-acc-header::after { transform: rotate(180deg); color: ${primary}; }
.wpsdm-acc-content { max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out; font-size: 0.72rem; color: #6b7280; background-color: #f9fafb; border-radius: 4px; }
.wpsdm-acc-content-inner { padding: 8px; }
.wpsdm-acc-item.wpsdm-active .wpsdm-acc-content { max-height: 180px; }
.wpsdm-list { padding-left: 14px; margin: 0; }
.wpsdm-list li { margin-bottom: 3px; }
.wpsdm-tags { display: flex; flex-wrap: wrap; gap: 4px; padding: 0; list-style: none; margin: 0; }
.wpsdm-tag { background: #eef2f6; color: #475569; padding: 2px 6px; border-radius: 4px; font-size: 0.65rem; font-weight: 500; }

/* Modal */
.wpsdm-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
.wpsdm-modal-open { opacity: 1; pointer-events: auto; }
.wpsdm-modal-card { background: white; border-radius: ${radius}px; width: 90%; max-width: 500px; max-height: 85vh; overflow-y: auto; position: relative; transform: scale(0.95); transition: transform 0.3s; padding: 24px; }
.wpsdm-modal-open .wpsdm-modal-card { transform: scale(1); }
.wpsdm-modal-close { position: absolute; top: 16px; right: 16px; background: #f3f4f6; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; }
.wpsdm-modal-header { display: flex; align-items: center; gap: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px; margin-bottom: 16px; }
.wpsdm-modal-photo { width: 80px; height: 80px; border-radius: ${photoRadius}; object-fit: cover; }
.wpsdm-modal-name { font-size: 1.15rem; font-weight: 700; margin: 0; }
.wpsdm-modal-pos { font-size: 0.8rem; font-weight: 600; color: ${primary}; text-transform: uppercase; margin-top: 4px; }
.wpsdm-m-sec { margin-bottom: 16px; }
.wpsdm-m-title { font-size: 0.85rem; font-weight: 700; color: #374151; margin-bottom: 6px; text-transform: uppercase; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; }

/* Tabs */
.wpsdm-tabs { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; margin-bottom: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; }
.wpsdm-tab-btn { background: none; border: 1px solid #cbd5e1; border-radius: 20px; padding: 6px 16px; font-size: 0.8rem; font-weight: 600; color: #475569; cursor: pointer; transition: all 0.2s; }
.wpsdm-tab-btn.active { background: ${primary}; border-color: ${primary}; color: white; }
.wpsdm-pane { display: none; }
.wpsdm-pane.active { display: block; animation: wpsdmFade 0.3s ease; }
@keyframes wpsdmFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
</style>
`;

        function buildAcc(p) {
            return `
            <div class="wpsdm-acc-container">
                <div class="wpsdm-acc-item">
                    <button class="wpsdm-acc-header">Pendidikan Formal</button>
                    <div class="wpsdm-acc-content">
                        <div class="wpsdm-acc-content-inner">
                            <ul class="wpsdm-list">${p.eduFormal.map(x => `<li>${x}</li>`).join("")}</ul>
                        </div>
                    </div>
                </div>
                <div class="wpsdm-acc-item">
                    <button class="wpsdm-acc-header">Sertifikasi & Pelatihan</button>
                    <div class="wpsdm-acc-content">
                        <div class="wpsdm-acc-content-inner">
                            <ul class="wpsdm-list">${p.eduNonFormal.map(x => `<li>${x}</li>`).join("")}</ul>
                        </div>
                    </div>
                </div>
                <div class="wpsdm-acc-item">
                    <button class="wpsdm-acc-header">Kompetensi</button>
                    <div class="wpsdm-acc-content">
                        <div class="wpsdm-acc-content-inner">
                            <ul class="wpsdm-tags">${p.competencies.map(x => `<li class="wpsdm-tag">${x}</li>`).join("")}</ul>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        function buildCard(p, mode) {
            return `
            <div class="wpsdm-card">
                <div class="wpsdm-photo-container">
                    <img class="wpsdm-photo" src="${p.photo}" alt="${p.name}">
                </div>
                <h3 class="wpsdm-name">${p.name}</h3>
                <div class="wpsdm-position">${p.position}</div>
                ${mode === "accordion" || mode === "tabbed" ? buildAcc(p) : `
                <button class="wpsdm-detail-btn" onclick="wpsdmOpen('${p.id}')">Lihat Profil Lengkap</button>
                `}
            </div>
            `;
        }

        let bodyHTML = "";
        let inlineJS = "";

        if (s.template === "accordion" || s.template === "modal") {
            bodyHTML = `
            <div class="wpsdm-wrapper">
                <h3 class="wpsdm-section-heading">Direksi</h3>
                <div class="wpsdm-grid-center">
                    ${buildCard(direktur, s.template)}
                    ${buildCard(sekretaris, s.template)}
                </div>

                <h3 class="wpsdm-section-heading">Subdirektorat Perencanaan & Pelayanan Informasi</h3>
                <div class="wpsdm-grid">
                    ${buildCard(kasubdit1, s.template)}
                    ${staff1.map(x => buildCard(x, s.template)).join("")}
                </div>

                <h3 class="wpsdm-section-heading">Subdirektorat Operasional Teknis & Logistik</h3>
                <div class="wpsdm-grid">
                    ${buildCard(kasubdit2, s.template)}
                    ${staff2.map(x => buildCard(x, s.template)).join("")}
                </div>

                <h3 class="wpsdm-section-heading">Subdirektorat Pengembangan SDM & Umum</h3>
                <div class="wpsdm-grid">
                    ${buildCard(kasubdit3, s.template)}
                    ${staff3.map(x => buildCard(x, s.template)).join("")}
                </div>
            </div>
            `;
        } else if (s.template === "tabbed") {
            bodyHTML = `
            <div class="wpsdm-wrapper">
                <div class="wpsdm-tabs">
                    <button class="wpsdm-tab-btn active" onclick="wpsdmTab('all')">Semua</button>
                    <button class="wpsdm-tab-btn" onclick="wpsdmTab('direksi')">Direksi</button>
                    <button class="wpsdm-tab-btn" onclick="wpsdmTab('subdit1')">Perencanaan</button>
                    <button class="wpsdm-tab-btn" onclick="wpsdmTab('subdit2')">Operasional & Logistik</button>
                    <button class="wpsdm-tab-btn" onclick="wpsdmTab('subdit3')">SDM & Umum</button>
                </div>

                <div class="wpsdm-panes">
                    <div class="wpsdm-pane active" id="pane-all">
                        <h3 class="wpsdm-section-heading">Direksi</h3>
                        <div class="wpsdm-grid-center">
                            ${buildCard(direktur, "tabbed")}
                            ${buildCard(sekretaris, "tabbed")}
                        </div>
                        <h3 class="wpsdm-section-heading">Subdit Perencanaan</h3>
                        <div class="wpsdm-grid">${buildCard(kasubdit1, "tabbed")}${staff1.map(x => buildCard(x, "tabbed")).join("")}</div>
                        <h3 class="wpsdm-section-heading">Subdit Operasional</h3>
                        <div class="wpsdm-grid">${buildCard(kasubdit2, "tabbed")}${staff2.map(x => buildCard(x, "tabbed")).join("")}</div>
                        <h3 class="wpsdm-section-heading">Subdit SDM & Umum</h3>
                        <div class="wpsdm-grid">${buildCard(kasubdit3, "tabbed")}${staff3.map(x => buildCard(x, "tabbed")).join("")}</div>
                    </div>
                    
                    <div class="wpsdm-pane" id="pane-direksi">
                        <div class="wpsdm-grid-center">
                            ${buildCard(direktur, "tabbed")}
                            ${buildCard(sekretaris, "tabbed")}
                        </div>
                    </div>
                    
                    <div class="wpsdm-pane" id="pane-subdit1">
                        <div class="wpsdm-grid">
                            ${buildCard(kasubdit1, "tabbed")}
                            ${staff1.map(x => buildCard(x, "tabbed")).join("")}
                        </div>
                    </div>
                    
                    <div class="wpsdm-pane" id="pane-subdit2">
                        <div class="wpsdm-grid">
                            ${buildCard(kasubdit2, "tabbed")}
                            ${staff2.map(x => buildCard(x, "tabbed")).join("")}
                        </div>
                    </div>
                    
                    <div class="wpsdm-pane" id="pane-subdit3">
                        <div class="wpsdm-grid">
                            ${buildCard(kasubdit3, "tabbed")}
                            ${staff3.map(x => buildCard(x, "tabbed")).join("")}
                        </div>
                    </div>
                </div>
            </div>
            `;

            inlineJS += `
<script>
function wpsdmTab(id) {
    document.querySelectorAll('.wpsdm-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    document.querySelectorAll('.wpsdm-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById('pane-' + id).classList.add('active');
}
</script>
`;
        }

        if (s.template === "accordion" || s.template === "tabbed") {
            inlineJS += `
<script>
document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.wpsdm-acc-header');
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var item = this.parentElement;
            var isActive = item.classList.contains('wpsdm-active');
            
            // Close siblings
            item.parentElement.querySelectorAll('.wpsdm-acc-item').forEach(x => x.classList.remove('wpsdm-active'));
            
            if (!isActive) {
                item.classList.add('wpsdm-active');
            }
        });
    });
});
</script>
`;
        }

        let modalHTML = "";
        if (s.template === "modal") {
            modalHTML = `
            <div class="wpsdm-modal" id="sdm-modal">
                <div class="wpsdm-modal-card">
                    <button class="wpsdm-modal-close" onclick="wpsdmClose()">✕</button>
                    <div class="wpsdm-modal-header">
                        <img class="wpsdm-modal-photo" id="m-photo" src="">
                        <div>
                            <h4 class="wpsdm-modal-name" id="m-name">Nama</h4>
                            <div class="wpsdm-modal-pos" id="m-pos">Jabatan</div>
                        </div>
                    </div>
                    <div class="wpsdm-m-sec">
                        <div class="wpsdm-m-title">🎓 Pendidikan Formal</div>
                        <ul class="wpsdm-list" id="m-formal"></ul>
                    </div>
                    <div class="wpsdm-m-sec">
                        <div class="wpsdm-m-title">📜 Sertifikasi & Pelatihan</div>
                        <ul class="wpsdm-list" id="m-nonformal"></ul>
                    </div>
                    <div class="wpsdm-m-sec">
                        <div class="wpsdm-m-title">⚡ Kompetensi</div>
                        <ul class="wpsdm-tags" id="m-comp"></ul>
                    </div>
                </div>
            </div>
            `;

            inlineJS += `
<script>
const wpsdmDb = ${JSON.stringify(database.sdm.reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {}))};

function wpsdmOpen(id) {
    const data = wpsdmDb[id];
    if(!data) return;
    document.getElementById('m-photo').src = data.photo;
    document.getElementById('m-name').innerText = data.name;
    document.getElementById('m-pos').innerText = data.position;
    
    document.getElementById('m-formal').innerHTML = data.eduFormal.map(x => '<li>' + x + '</li>').join('');
    document.getElementById('m-nonformal').innerHTML = data.eduNonFormal.map(x => '<li>' + x + '</li>').join('');
    document.getElementById('m-comp').innerHTML = data.competencies.map(x => '<li class="wpsdm-tag">' + x + '</li>').join('');
    
    document.getElementById('sdm-modal').classList.add('wpsdm-modal-open');
    document.body.style.overflow = 'hidden';
}

function wpsdmClose() {
    document.getElementById('sdm-modal').classList.remove('wpsdm-modal-open');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('sdm-modal');
    if(modal) {
        modal.addEventListener('click', function(e) {
            if(e.target === modal) wpsdmClose();
        });
    }
});
</script>
`;
        }

        generatedHTML = `${styles}\n${bodyHTML}\n${modalHTML}\n${inlineJS}`;
    }

    // ----------------------------------------------------
    // TYPE: KONTAK WEBSITE
    // ----------------------------------------------------
    else if (s.pageType === "kontak") {
        const k = database.kontak;
        const styles = `
<style>
.wpcon-wrapper { font-family: ${font}; color: #1e293b; margin: 20px 0; }
.wpcon-container { display: flex; gap: 30px; flex-wrap: wrap; margin-bottom: 30px; }
.wpcon-left { flex: 1; min-width: 320px; display: flex; flex-direction: column; gap: 20px; }
.wpcon-right { flex: 1.2; min-width: 350px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
.wpcon-info-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; display: flex; gap: 16px; align-items: flex-start; }
.wpcon-icon-box { background: ${primary}15; color: ${primary}; border-radius: 8px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
.wpcon-info-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; }
.wpcon-info-text { font-size: 0.85rem; color: #475569; margin: 0; line-height: 1.4; }

/* Grid version */
.wpcon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 30px; }
.wpcon-grid-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
.wpcon-grid-card .wpcon-icon-box { margin-bottom: 16px; }

/* Form styles */
.wpcon-form-title { font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; }
.wpcon-form-group { margin-bottom: 16px; display: flex; flex-direction: column; gap: 6px; }
.wpcon-form-group label { font-size: 0.8rem; font-weight: 600; color: #475569; }
.wpcon-input, .wpcon-textarea { width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px 14px; font-size: 0.85rem; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
.wpcon-input:focus, .wpcon-textarea:focus { border-color: ${primary}; box-shadow: 0 0 0 3px ${primary}1a; }
.wpcon-textarea { resize: vertical; min-height: 110px; }
.wpcon-submit-btn { background-color: ${primary}; color: white; border: none; border-radius: 6px; padding: 12px 24px; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: background-color 0.2s; width: 100%; }
.wpcon-submit-btn:hover { filter: brightness(0.9); }
.wpcon-success-msg { display: none; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; border-radius: 6px; padding: 16px; font-size: 0.85rem; text-align: center; margin-top: 15px; }

/* Map container */
.wpcon-map-container { width: 100%; height: 350px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-top: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
.wpcon-map-container iframe { width: 100%; height: 100%; border: none; }
</style>
`;

        const formHTML = `
        <div class="wpcon-right">
            <h3 class="wpcon-form-title">Kirim Pesan Langsung</h3>
            <form id="wpcon-form" onsubmit="wpconSubmitForm(event)">
                <div class="wpcon-form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" class="wpcon-input" required placeholder="Masukkan nama Anda">
                </div>
                <div class="wpcon-form-group">
                    <label>Alamat Email</label>
                    <input type="email" class="wpcon-input" required placeholder="Masukkan email aktif">
                </div>
                <div class="wpcon-form-group">
                    <label>Subjek</label>
                    <input type="text" class="wpcon-input" required placeholder="Subjek pesan">
                </div>
                <div class="wpcon-form-group">
                    <label>Pesan Anda</label>
                    <textarea class="wpcon-textarea" required placeholder="Tuliskan pesan atau laporan Anda di sini..."></textarea>
                </div>
                <button type="submit" class="wpcon-submit-btn">Kirim Pesan</button>
            </form>
            <div class="wpcon-success-msg" id="wpcon-success">
                <strong>✓ Pesan Terkirim!</strong> Terimakasih telah menghubungi kami. Kami akan membalas pesan Anda sesegera mungkin.
            </div>
        </div>
        `;

        let bodyHTML = "";
        if (s.template === "split") {
            bodyHTML = `
            <div class="wpcon-wrapper">
                <div class="wpcon-container">
                    <div class="wpcon-left">
                        <div class="wpcon-info-card">
                            <div class="wpcon-icon-box">📍</div>
                            <div>
                                <h4 class="wpcon-info-title">Alamat Kantor</h4>
                                <p class="wpcon-info-text">${k.address}</p>
                            </div>
                        </div>
                        <div class="wpcon-info-card">
                            <div class="wpcon-icon-box">📞</div>
                            <div>
                                <h4 class="wpcon-info-title">Telepon & WhatsApp</h4>
                                <p class="wpcon-info-text">${k.phone}</p>
                            </div>
                        </div>
                        <div class="wpcon-info-card">
                            <div class="wpcon-icon-box">✉️</div>
                            <div>
                                <h4 class="wpcon-info-title">Email Resmi</h4>
                                <p class="wpcon-info-text">${k.email}</p>
                            </div>
                        </div>
                        <div class="wpcon-info-card">
                            <div class="wpcon-icon-box">🕒</div>
                            <div>
                                <h4 class="wpcon-info-title">Jam Pelayanan</h4>
                                <p class="wpcon-info-text">
                                    ${k.hours.map(h => `<strong>${h.day}</strong>: ${h.time}<br>`).join("")}
                                </p>
                            </div>
                        </div>
                    </div>
                    ${formHTML}
                </div>
                <div class="wpcon-map-container">
                    <iframe src="${k.mapUrl}" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            `;
        } else if (s.template === "cards") {
            bodyHTML = `
            <div class="wpcon-wrapper">
                <div class="wpcon-grid">
                    <div class="wpcon-grid-card">
                        <div class="wpcon-icon-box">📍</div>
                        <h4 class="wpcon-info-title">Lokasi Kantor</h4>
                        <p class="wpcon-info-text">${k.address}</p>
                    </div>
                    <div class="wpcon-grid-card">
                        <div class="wpcon-icon-box">📞</div>
                        <h4 class="wpcon-info-title">Telepon & WA</h4>
                        <p class="wpcon-info-text">${k.phone}</p>
                    </div>
                    <div class="wpcon-grid-card">
                        <div class="wpcon-icon-box">✉️</div>
                        <h4 class="wpcon-info-title">Hubungi Email</h4>
                        <p class="wpcon-info-text">${k.email}</p>
                    </div>
                </div>

                <div class="wpcon-map-container">
                    <iframe src="${k.mapUrl}" allowfullscreen="" loading="lazy"></iframe>
                </div>
                
                <div style="margin-top: 30px; display: flex; justify-content: center;">
                    <div style="width: 100%; max-width: 700px;">
                        ${formHTML}
                    </div>
                </div>
            </div>
            `;
        }

        const inlineJS = `
<script>
function wpconSubmitForm(e) {
    e.preventDefault();
    document.getElementById('wpcon-form').style.display = 'none';
    document.getElementById('wpcon-success').style.display = 'block';
}
</script>
`;

        generatedHTML = `${styles}\n${bodyHTML}\n${inlineJS}`;
    }

    // ----------------------------------------------------
    // TYPE: GALERI FOTO
    // ----------------------------------------------------
    else if (s.pageType === "galeri") {
        const styles = `
<style>
.wpgal-wrapper { font-family: ${font}; color: #1e293b; margin: 20px 0; }
.wpgal-filter { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.wpgal-filter-btn { background: none; border: 1px solid #cbd5e1; border-radius: 20px; padding: 6px 14px; font-size: 0.8rem; font-weight: 600; color: #475569; cursor: pointer; transition: all 0.2s; }
.wpgal-filter-btn.active { background: ${primary}; border-color: ${primary}; color: white; }

/* Grid systems */
.wpgal-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.wpgal-masonry { display: columns; column-width: 280px; column-gap: 20px; }
.wpgal-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: ${radius}px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.02); display: inline-block; width: 100%; margin-bottom: 18px; transition: transform 0.25s, box-shadow 0.25s; cursor: pointer; }
.wpgal-card:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0,0,0,0.06); }
.wpgal-img-box { width: 100%; position: relative; overflow: hidden; background: #e2e8f0; }
.wpgal-img { width: 100%; height: auto; display: block; object-fit: cover; transition: transform 0.3s; }
.wpgal-card:hover .wpgal-img { transform: scale(1.04); }
.wpgal-category-badge { position: absolute; top: 12px; left: 12px; background: rgba(15,23,42,0.7); backdrop-filter: blur(4px); color: white; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; z-index: 2; }
.wpgal-info { padding: 16px; }
.wpgal-title { font-size: 0.9rem; font-weight: 700; color: #0f172a; margin: 0 0 6px 0; line-height: 1.35; }
.wpgal-desc { font-size: 0.75rem; color: #64748b; margin: 0; line-height: 1.4; }

/* Lightbox Modal */
.wpgal-lightbox { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.9); backdrop-filter: blur(6px); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 99999; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
.wpgal-lightbox.active { opacity: 1; pointer-events: auto; }
.wpgal-lb-close { position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: none; border-radius: 50%; width: 36px; height: 36px; color: white; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.wpgal-lb-close:hover { background: rgba(255,255,255,0.2); }
.wpgal-lb-content { max-width: 90%; max-height: 75vh; display: flex; justify-content: center; align-items: center; position: relative; }
.wpgal-lb-img { max-width: 100%; max-height: 75vh; object-fit: contain; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.wpgal-lb-info { margin-top: 16px; text-align: center; color: white; max-width: 600px; padding: 0 15px; }
.wpgal-lb-title { font-size: 1.05rem; font-weight: 700; margin: 0 0 6px 0; }
.wpgal-lb-desc { font-size: 0.8rem; color: #cbd5e1; margin: 0; }
.wpgal-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); color: white; border: none; width: 44px; height: 44px; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; cursor: pointer; border-radius: 50%; z-index: 3; transition: background 0.2s; }
.wpgal-lb-nav:hover { background: rgba(255,255,255,0.2); }
.wpgal-lb-prev { left: 20px; }
.wpgal-lb-next { right: 20px; }
</style>
`;

        function renderGalCard(item) {
            return `
            <div class="wpgal-card" data-category="${item.category}" onclick="wpgalOpen('${item.id}')">
                <div class="wpgal-img-box">
                    <span class="wpgal-category-badge">${item.category}</span>
                    <img class="wpgal-img" src="${item.img}" alt="${item.title}">
                </div>
                <div class="wpgal-info">
                    <h4 class="wpgal-title">${item.title}</h4>
                    <p class="wpgal-desc">${item.desc}</p>
                </div>
            </div>
            `;
        }

        let bodyHTML = "";
        if (s.template === "masonry") {
            bodyHTML = `
            <div class="wpgal-wrapper">
                <div class="wpgal-masonry">
                    ${database.galeri.map(renderGalCard).join("")}
                </div>
            </div>
            `;
        } else if (s.template === "filter") {
            bodyHTML = `
            <div class="wpgal-wrapper">
                <div class="wpgal-filter">
                    <button class="wpgal-filter-btn active" onclick="wpgalFilter('all')">Semua Dokumentasi</button>
                    <button class="wpgal-filter-btn" onclick="wpgalFilter('kegiatan')">Kegiatan Kerja</button>
                    <button class="wpgal-filter-btn" onclick="wpgalFilter('sosialisasi')">Sosialisasi</button>
                    <button class="wpgal-filter-btn" onclick="wpgalFilter('pelatihan')">Pelatihan</button>
                    <button class="wpgal-filter-btn" onclick="wpgalFilter('umum')">Umum</button>
                </div>
                <div class="wpgal-grid" id="wpgal-grid-box">
                    ${database.galeri.map(renderGalCard).join("")}
                </div>
            </div>
            `;
        }

        const lightboxHTML = `
        <div class="wpgal-lightbox" id="wpgal-lightbox-modal">
            <button class="wpgal-lb-close" onclick="wpgalClose()">✕</button>
            <button class="wpgal-lb-nav wpgal-lb-prev" onclick="wpgalPrev()">‹</button>
            <div class="wpgal-lb-content">
                <img class="wpgal-lb-img" id="wpgal-lb-img-src" src="">
            </div>
            <button class="wpgal-lb-nav wpgal-lb-next" onclick="wpgalNext()">›</button>
            <div class="wpgal-lb-info">
                <h4 class="wpgal-lb-title" id="wpgal-lb-title-src">Judul Foto</h4>
                <p class="wpgal-lb-desc" id="wpgal-lb-desc-src">Deskripsi dokumentasi kegiatan</p>
            </div>
        </div>
        `;

        const inlineJS = `
<script>
const wpgalDb = ${JSON.stringify(database.galeri)};
let wpgalCurrentIdx = 0;
let wpgalActiveIds = wpgalDb.map(x => x.id);

function wpgalOpen(id) {
    wpgalCurrentIdx = wpgalActiveIds.indexOf(id);
    if(wpgalCurrentIdx === -1) return;
    
    wpgalUpdateModal();
    document.getElementById('wpgal-lightbox-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function wpgalClose() {
    document.getElementById('wpgal-lightbox-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function wpgalUpdateModal() {
    const data = wpgalDb.find(x => x.id === wpgalActiveIds[wpgalCurrentIdx]);
    if(!data) return;
    document.getElementById('wpgal-lb-img-src').src = data.img;
    document.getElementById('wpgal-lb-title-src').innerText = data.title;
    document.getElementById('wpgal-lb-desc-src').innerText = data.desc;
}

function wpgalPrev() {
    wpgalCurrentIdx--;
    if(wpgalCurrentIdx < 0) wpgalCurrentIdx = wpgalActiveIds.length - 1;
    wpgalUpdateModal();
}

function wpgalNext() {
    wpgalCurrentIdx++;
    if(wpgalCurrentIdx >= wpgalActiveIds.length) wpgalCurrentIdx = 0;
    wpgalUpdateModal();
}

function wpgalFilter(category) {
    document.querySelectorAll('.wpgal-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const cards = document.querySelectorAll('.wpgal-card');
    cards.forEach(card => {
        const cat = card.dataset.category;
        if(category === 'all' || cat === category) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });

    wpgalActiveIds = wpgalDb.filter(x => category === 'all' || x.category === category).map(x => x.id);
}

document.addEventListener('DOMContentLoaded', function() {
    const lb = document.getElementById('wpgal-lightbox-modal');
    if(lb) {
        lb.addEventListener('click', function(e) {
            if(e.target === lb || e.target.classList.contains('wpgal-lb-content')) wpgalClose();
        });
    }
});
</script>
`;

        generatedHTML = `${styles}\n${bodyHTML}\n${lightboxHTML}\n${inlineJS}`;
    }

    // ----------------------------------------------------
    // TYPE: PRESTASI & PENGHARGAAN
    // ----------------------------------------------------
    else if (s.pageType === "prestasi") {
        const styles = `
<style>
.wppres-wrapper { font-family: ${font}; color: #1e293b; margin: 20px 0; }
.wppres-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
.wppres-card { background: white; border: 1px solid #e2e8f0; border-radius: ${radius}px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 4px 10px rgba(0,0,0,0.02); transition: transform 0.25s, box-shadow 0.25s; }
.wppres-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
.wppres-img-box { position: relative; width: 100%; height: 210px; background: #cbd5e1; cursor: zoom-in; overflow: hidden; }
.wppres-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
.wppres-card:hover .wppres-img { transform: scale(1.05); }
.wppres-year-badge { position: absolute; top: 12px; left: 12px; background: ${primary}; color: white; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; box-shadow: 0 2px 8px ${primary}40; }
.wppres-body { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
.wppres-issuer { font-size: 0.72rem; font-weight: 700; color: ${primary}; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.05em; }
.wppres-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; line-height: 1.4; }
.wppres-desc { font-size: 0.8rem; color: #64748b; margin: 0; line-height: 1.45; }

/* Timeline design */
.wppres-timeline { position: relative; max-width: 800px; margin: 0 auto; padding: 20px 0; }
.wppres-timeline::before { content: ''; position: absolute; top: 0; bottom: 0; left: 24px; width: 4px; background: #e2e8f0; border-radius: 2px; }
.wppres-tl-item { position: relative; margin-bottom: 40px; padding-left: 60px; }
.wppres-tl-node { position: absolute; left: 14px; top: 4px; width: 24px; height: 24px; background: white; border: 4px solid ${primary}; border-radius: 50%; box-sizing: border-box; z-index: 2; box-shadow: 0 0 0 4px ${primary}15; }
.wppres-tl-card { background: white; border: 1px solid #e2e8f0; border-radius: ${radius}px; padding: 24px; display: flex; gap: 20px; flex-wrap: wrap; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
.wppres-tl-img-box { width: 140px; height: 105px; border-radius: 6px; overflow: hidden; flex-shrink: 0; cursor: zoom-in; border: 1px solid #e2e8f0; }
.wppres-tl-img { width: 100%; height: 100%; object-fit: cover; }
.wppres-tl-info { flex: 1; min-width: 250px; }

/* Modal Zoom Certificate */
.wppres-zoom { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.85); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 99999; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
.wppres-zoom.active { opacity: 1; pointer-events: auto; }
.wppres-z-close { position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: none; border-radius: 50%; width: 36px; height: 36px; color: white; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.wppres-z-img { max-width: 90%; max-height: 85vh; border-radius: 6px; box-shadow: 0 10px 40px rgba(0,0,0,0.4); transform: scale(0.95); transition: transform 0.3s; }
.wppres-zoom.active .wppres-z-img { transform: scale(1); }
</style>
`;

        let bodyHTML = "";
        if (s.template === "grid") {
            bodyHTML = `
            <div class="wppres-wrapper">
                <div class="wppres-grid">
                    ${database.prestasi.map(item => `
                    <div class="wppres-card">
                        <div class="wppres-img-box" onclick="wppresZoom('${item.img}')">
                            <span class="wppres-year-badge">${item.year}</span>
                            <img class="wppres-img" src="${item.img}" alt="${item.title}">
                        </div>
                        <div class="wppres-body">
                            <span class="wppres-issuer">${item.issuer}</span>
                            <h4 class="wppres-title">${item.title}</h4>
                            <p class="wppres-desc">${item.desc}</p>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
            `;
        } else if (s.template === "timeline") {
            bodyHTML = `
            <div class="wppres-wrapper">
                <div class="wppres-timeline">
                    ${database.prestasi.map(item => `
                    <div class="wppres-tl-item">
                        <div class="wppres-tl-node"></div>
                        <div class="wppres-tl-card">
                            <div class="wppres-tl-img-box" onclick="wppresZoom('${item.img}')">
                                <img class="wppres-tl-img" src="${item.img}" alt="${item.title}">
                            </div>
                            <div class="wppres-tl-info">
                                <span class="wppres-year-badge" style="position:static; display:inline-block; margin-bottom:8px;">Tahun ${item.year}</span>
                                <span class="wppres-issuer" style="display:block; margin-bottom:4px;">${item.issuer}</span>
                                <h4 class="wppres-title" style="margin-bottom:8px;">${item.title}</h4>
                                <p class="wppres-desc">${item.desc}</p>
                            </div>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
            `;
        }

        const zoomModalHTML = `
        <div class="wppres-zoom" id="wppres-zoom-modal">
            <button class="wppres-z-close" onclick="wppresZoomClose()">✕</button>
            <img class="wppres-z-img" id="wppres-z-img-src" src="">
        </div>
        `;

        const inlineJS = `
<script>
function wppresZoom(src) {
    document.getElementById('wppres-z-img-src').src = src;
    document.getElementById('wppres-zoom-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function wppresZoomClose() {
    document.getElementById('wppres-zoom-modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const zoomModal = document.getElementById('wppres-zoom-modal');
    if(zoomModal) {
        zoomModal.addEventListener('click', function(e) {
            if(e.target === zoomModal) wppresZoomClose();
        });
    }
});
</script>
`;

        generatedHTML = `${styles}\n${bodyHTML}\n${zoomModalHTML}\n${inlineJS}`;
    }

    // ----------------------------------------------------
    // TYPE: BAGAN SOP
    // ----------------------------------------------------
    else if (s.pageType === "sop") {
        const styles = `
<style>
.wpsop-wrapper { font-family: ${font}; color: #1e293b; margin: 20px 0; }
.wpsop-heading { font-size: 1.2rem; font-weight: 700; color: #0f172a; margin: 30px 0 12px 0; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0; }
.wpsop-desc { font-size: 0.85rem; color: #64748b; margin-top: -8px; margin-bottom: 20px; line-height: 1.4; }

/* Horizontal Flow Cards */
.wpsop-flow { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
.wpsop-step-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: ${radius}px; padding: 20px; display: flex; align-items: center; gap: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.02); position: relative; }
.wpsop-step-nr { background: ${primary}; color: white; width: 38px; height: 38px; border-radius: 50%; font-weight: 700; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; box-shadow: 0 3px 8px ${primary}30; }
.wpsop-step-info { flex: 1; }
.wpsop-step-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; }
.wpsop-step-desc { font-size: 0.8rem; color: #475569; margin: 0 0 10px 0; line-height: 1.4; }
.wpsop-meta-row { display: flex; gap: 16px; flex-wrap: wrap; }
.wpsop-meta-badge { background: #f1f5f9; color: #475569; font-size: 0.72rem; font-weight: 600; padding: 3px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; }
.wpsop-meta-badge::before { content: '•'; color: ${primary}; font-weight: bold; }

@media (min-width: 768px) {
    .wpsop-step-card:not(:last-child)::after { content: '↓'; position: absolute; bottom: -18px; left: 32px; font-size: 1.2rem; font-weight: bold; color: #cbd5e1; }
}

/* Tabs SOP Version */
.wpsop-tabs { display: flex; gap: 8px; border-bottom: 2px solid #e2e8f0; padding-bottom: 1px; margin-bottom: 25px; overflow-x: auto; }
.wpsop-tab-btn { background: none; border: none; border-bottom: 3px solid transparent; padding: 10px 18px; font-weight: 700; font-size: 0.85rem; color: #64748b; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
.wpsop-tab-btn.active { color: ${primary}; border-bottom-color: ${primary}; }
.wpsop-pane { display: none; }
.wpsop-pane.active { display: block; animation: wpsopFade 0.3s ease; }
@keyframes wpsopFade { from { opacity: 0; } to { opacity: 1; } }
</style>
`;

        function renderSopStep(step) {
            return `
            <div class="wpsop-step-card">
                <div class="wpsop-step-nr">${step.nr}</div>
                <div class="wpsop-step-info">
                    <h4 class="wpsop-step-title">${step.title}</h4>
                    <p class="wpsop-step-desc">${step.desc}</p>
                    <div class="wpsop-meta-row">
                        <span class="wpsop-meta-badge"><strong>PIC:</strong> ${step.pic}</span>
                        <span class="wpsop-meta-badge"><strong>SLA:</strong> ${step.duration}</span>
                    </div>
                </div>
            </div>
            `;
        }

        let bodyHTML = "";
        let inlineJS = "";

        if (s.template === "flow") {
            bodyHTML = `
            <div class="wpsop-wrapper">
                ${database.sop.map(item => `
                <h3 class="wpsop-heading">${item.title}</h3>
                <p class="wpsop-desc">${item.desc}</p>
                <div class="wpsop-flow">
                    ${item.steps.map(renderSopStep).join("")}
                </div>
                `).join("")}
            </div>
            `;
        } else if (s.template === "tabs") {
            bodyHTML = `
            <div class="wpsop-wrapper">
                <div class="wpsop-tabs">
                    ${database.sop.map((item, idx) => `
                    <button class="wpsop-tab-btn ${idx === 0 ? 'active' : ''}" onclick="wpsopTab(event, 'sop-${idx}')">${item.title.replace("SOP ", "")}</button>
                    `).join("")}
                </div>
                <div class="wpsop-panes">
                    ${database.sop.map((item, idx) => `
                    <div class="wpsop-pane ${idx === 0 ? 'active' : ''}" id="sop-${idx}">
                        <p class="wpsop-desc" style="margin-top:0;">${item.desc}</p>
                        <div class="wpsop-flow">
                            ${item.steps.map(renderSopStep).join("")}
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
            `;

            inlineJS = `
<script>
function wpsopTab(e, id) {
    document.querySelectorAll('.wpsop-tab-btn').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    document.querySelectorAll('.wpsop-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
</script>
`;
        }

        generatedHTML = `${styles}\n${bodyHTML}\n${inlineJS}`;
    }

    // ----------------------------------------------------
    // TYPE: POSTING ARTIKEL & BLOG
    // ----------------------------------------------------
    else if (s.pageType === "artikel") {
        const art = database.artikel;
        const styles = `
<style>
.wpart-wrapper { font-family: ${font}; color: #1e293b; margin: 20px 0; line-height: 1.6; }
.wpart-meta { display: flex; gap: 12px; align-items: center; color: #64748b; font-size: 0.85rem; margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; }
.wpart-badge { background-color: ${primary}15; color: ${primary}; font-weight: 700; font-size: 0.72rem; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; }

/* Image Effects */
.wpart-img-zoom-box { overflow: hidden; border-radius: ${radius}px; border: 1px solid #e2e8f0; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
.wpart-img-zoom { width: 100%; height: auto; display: block; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.wpart-img-zoom-box:hover .wpart-img-zoom { transform: scale(1.05); }

.wpart-img-float-box { transition: all 0.3s ease; border-radius: ${radius}px; overflow: hidden; margin: 20px 0; border: 1px solid #e2e8f0; }
.wpart-img-float-box:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.12); }
.wpart-img-float { width: 100%; height: auto; display: block; }

/* Carousel Slider */
.wpart-carousel { position: relative; width: 100%; height: 380px; overflow: hidden; border-radius: ${radius}px; margin-bottom: 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.wpart-slides { width: 100%; height: 100%; position: relative; }
.wpart-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 0.5s ease; z-index: 1; }
.wpart-slide.active { opacity: 1; z-index: 2; }
.wpart-slide img { width: 100%; height: 100%; object-fit: cover; }
.wpart-slide-caption { position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 25px 20px 15px 20px; color: white; box-sizing: border-box; z-index: 3; }
.wpart-slide-caption p { margin: 0; font-size: 0.9rem; font-weight: 600; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
.wpart-car-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.7); color: #0f172a; border: none; width: 36px; height: 36px; font-size: 1.3rem; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: background 0.2s; }
.wpart-car-btn:hover { background: #ffffff; color: ${primary}; }
.wpart-car-prev { left: 16px; }
.wpart-car-next { right: 16px; }
.wpart-car-dots { position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10; }
.wpart-car-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.3s; }
.wpart-car-dot.active { background: white; width: 20px; border-radius: 4px; }

/* Custom Bullet Styles */
.wpart-list-check { list-style: none; padding-left: 0; margin: 15px 0; }
.wpart-list-check li { position: relative; padding-left: 28px; margin-bottom: 10px; font-size: 0.9rem; color: #334155; }
.wpart-list-check li::before { content: '✓'; position: absolute; left: 0; top: 1px; color: var(--success-color); font-weight: 900; font-size: 1.05rem; }

.wpart-list-arrow { list-style: none; padding-left: 0; margin: 15px 0; }
.wpart-list-arrow li { position: relative; padding-left: 28px; margin-bottom: 10px; font-size: 0.9rem; color: #334155; }
.wpart-list-arrow li::before { content: '➔'; position: absolute; left: 0; top: 1px; color: ${primary}; font-size: 0.85rem; }

.wpart-list-star { list-style: none; padding-left: 0; margin: 15px 0; }
.wpart-list-star li { position: relative; padding-left: 28px; margin-bottom: 10px; font-size: 0.9rem; color: #334155; }
.wpart-list-star li::before { content: '★'; position: absolute; left: 0; top: 0; color: #eab308; font-size: 1rem; }

.wpart-list-num { list-style: none; padding-left: 0; margin: 20px 0; counter-reset: wpart-counter; }
.wpart-list-num li { position: relative; padding-left: 36px; margin-bottom: 14px; font-size: 0.9rem; color: #334155; }
.wpart-list-num li::before { counter-increment: wpart-counter; content: counter(wpart-counter); position: absolute; left: 0; top: 1px; width: 22px; height: 22px; background-color: ${primary}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: bold; }

/* Sub-sections */
.wpart-subheading { font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 25px 0 12px 0; display: flex; align-items: center; gap: 8px; }
.wpart-subheading::before { content: ''; display: inline-block; width: 4px; height: 18px; background-color: ${primary}; border-radius: 2px; }

/* Typography */
.wpart-dropcap::first-letter { font-size: 3.5rem; font-weight: 800; float: left; margin-top: 4px; margin-right: 8px; color: ${primary}; line-height: 0.8; }
.wpart-quote { border-left: 4px solid ${primary}; padding: 10px 20px; margin: 20px 0; background-color: #f8fafc; font-style: italic; color: #475569; font-size: 0.95rem; border-radius: 0 ${radius}px ${radius}px 0; }

/* Two-column layout */
.wpart-grid { display: flex; gap: 30px; flex-wrap: wrap; margin-top: 20px; }
.wpart-main-col { flex: 2; min-width: 350px; }
.wpart-side-col { flex: 0.9; min-width: 250px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: ${radius}px; padding: 20px; height: fit-content; }
.wpart-widget-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; border-bottom: 2px solid ${primary}; padding-bottom: 6px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.05em; }
.wpart-widget-body { font-size: 0.8rem; color: #475569; }
.wpart-author-card { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
.wpart-author-img { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
</style>
`;

        let bodyHTML = "";
        let inlineJS = "";

        if (s.template === "modern") {
            bodyHTML = `
            <div class="wpart-wrapper">
                <div class="wpart-meta">
                    <span class="wpart-badge">${art.category}</span>
                    <span>Oleh: <strong>${art.author}</strong></span>
                    <span>•</span>
                    <span>${art.date}</span>
                </div>

                <!-- 1. Efek Gambar: Carousel Slider -->
                <div class="wpart-carousel">
                    <div class="wpart-slides">
                        <div class="wpart-slide active">
                            <img src="${art.images[0]}" alt="Slide 1">
                            <div class="wpart-slide-caption"><p>Rapat Koordinasi Penerapan Sistem Pelayanan Terintegrasi Baru</p></div>
                        </div>
                        <div class="wpart-slide">
                            <img src="${art.images[1]}" alt="Slide 2">
                            <div class="wpart-slide-caption"><p>Infrastruktur Server Cloud Terenkripsi untuk Proteksi Data Publik</p></div>
                        </div>
                        <div class="wpart-slide">
                            <img src="${art.images[2]}" alt="Slide 3">
                            <div class="wpart-slide-caption"><p>Monitoring Dashboard Evaluasi Kinerja Publik Secara Real-time</p></div>
                        </div>
                    </div>
                    <button class="wpart-car-btn wpart-car-prev" onclick="wpartPrevSlide()">‹</button>
                    <button class="wpart-car-btn wpart-car-next" onclick="wpartNextSlide()">›</button>
                    <div class="wpart-car-dots">
                        <span class="wpart-car-dot active" onclick="wpartSetSlide(0)"></span>
                        <span class="wpart-car-dot" onclick="wpartSetSlide(1)"></span>
                        <span class="wpart-car-dot" onclick="wpartSetSlide(2)"></span>
                    </div>
                </div>

                <p class="wpart-dropcap">${art.content1}</p>
                
                <blockquote class="wpart-quote">
                    "Efisiensi sistem bukan diukur dari seberapa banyak aplikasi digital yang kita miliki, melainkan seberapa cepat masyarakat bisa menyelesaikan kepentingannya dengan andal."
                </blockquote>

                <!-- 2. Efek Gambar: Zoom on Hover -->
                <h4 class="wpart-subheading">Akselerasi Pengolahan Data Layanan</h4>
                <p>Untuk mengimbangi lonjakan data, optimalisasi infrastruktur terus dilakukan secara berkala. Gambar di bawah menunjukkan penataan infrastruktur yang scalable:</p>
                <div class="wpart-img-zoom-box">
                    <img class="wpart-img-zoom" src="${art.images[2]}" alt="Zoom Image">
                </div>

                <!-- 3. Variasi Bullets: Checkmark, Star, Arrow -->
                <h4 class="wpart-subheading">Indikator Keberhasilan Digitalisasi Pelayanan</h4>
                <p>Dalam kurun waktu evaluasi triwulan terakhir, unit kerja mencatat beberapa pencapaian terukur:</p>
                <ul class="wpart-list-check">
                    ${art.bullets.check.map(x => `<li>${x}</li>`).join("")}
                </ul>

                <h4 class="wpart-subheading">Langkah Penerapan SOP di Lapangan</h4>
                <p>Metode transisi birokrasi dilakukan secara terstruktur melalui alur taktis berikut:</p>
                <ul class="wpart-list-arrow">
                    ${art.bullets.arrow.map(x => `<li>${x}</li>`).join("")}
                </ul>

                <h4 class="wpart-subheading">Penghargaan Nasional yang Diraih</h4>
                <p>Konsistensi pengembangan membuahkan hasil positif yang diakui secara nasional:</p>
                <ul class="wpart-list-star">
                    ${art.bullets.star.map(x => `<li>${x}</li>`).join("")}
                </ul>
            </div>
            `;

            inlineJS = `
<script>
let wpartIdx = 0;
function wpartShowSlide(n) {
    const slides = document.querySelectorAll('.wpart-slide');
    const dots = document.querySelectorAll('.wpart-car-dot');
    if(!slides.length) return;
    if(n >= slides.length) wpartIdx = 0;
    if(n < 0) wpartIdx = slides.length - 1;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[wpartIdx].classList.add('active');
    dots[wpartIdx].classList.add('active');
}
function wpartNextSlide() { wpartIdx++; wpartShowSlide(wpartIdx); }
function wpartPrevSlide() { wpartIdx--; wpartShowSlide(wpartIdx); }
function wpartSetSlide(n) { wpartIdx = n; wpartShowSlide(wpartIdx); }

// Auto play carousel
document.addEventListener('DOMContentLoaded', function() {
    setInterval(wpartNextSlide, 6000);
});
</script>
`;
        } else if (s.template === "magazine") {
            bodyHTML = `
            <div class="wpart-wrapper">
                <div class="wpart-meta">
                    <span class="wpart-badge" style="background-color:#05966915; color:#059669;">BERITA UTAMA</span>
                    <span>Diunggah: ${art.date}</span>
                </div>

                <div class="wpart-grid">
                    <div class="wpart-main-col">
                        <p class="wpart-dropcap">${art.content1}</p>

                        <!-- Efek Gambar: Float Up & Soft Shadow on Hover -->
                        <div class="wpart-img-float-box">
                            <img class="wpart-img-float" src="${art.images[1]}" alt="Float Image">
                        </div>

                        <p>${art.content2}</p>

                        <!-- Variasi Bullet: Number Badges -->
                        <h4 class="wpart-subheading">Tahapan Implementasi Sistem Digital</h4>
                        <ol class="wpart-list-num">
                            ${art.bullets.number.map(x => `<li>${x}</li>`).join("")}
                        </ol>
                    </div>

                    <!-- Sidebar Column -->
                    <div class="wpart-side-col">
                        <h4 class="wpart-widget-title">Profil Penulis</h4>
                        <div class="wpart-author-card">
                            <img class="wpart-author-img" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=128&h=128" alt="Author">
                            <div>
                                <strong style="font-size:0.85rem; color:#0f172a; display:block;">Ir. Diana Novita, M.T.</strong>
                                <span style="font-size:0.7rem; color:#64748b;">Praktisi Layanan & Kepala Subdit</span>
                            </div>
                        </div>
                        <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin-bottom: 20px;">Berfokus pada pengembangan integrasi data center instansi pemerintah serta reformasi alur layanan publik.</p>

                        <h4 class="wpart-widget-title">Statistik Layanan</h4>
                        <div class="wpart-widget-body">
                            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                <span>Efisiensi Waktu</span>
                                <strong>75%</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                <span>Indeks Kepuasan</span>
                                <strong>3.82 / 4.00</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between;">
                                <span>User Aktif Harian</span>
                                <strong>2,400+ User</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        generatedHTML = `${styles}\n${bodyHTML}\n${inlineJS}`;
    }

    return generatedHTML;
}

// Start application when DOM is fully loaded
window.addEventListener("DOMContentLoaded", init);
