// app.js - WP SDM Profile Page Generator Core Logic

// 1. Default Database of 20 Personnel matching the requested hierarchy and sequence
const defaultPersonnel = [
    {
        id: "p1",
        name: "Drs. H. M. Yusuf, M.Si.",
        nip: "19670814 199303 1 002",
        position: "Direktur",
        subdirectorate: "Direksi",
        photo: "foto_web/1.jpg",
        education: ["S1 Ilmu Administrasi Negara - Universitas Indonesia", "S2 Magister Sains Manajemen - Universitas Gadjah Mada"],
        training: ["Diklat Kepemimpinan Nasional Tingkat I (LAN RI)", "Workshop Strategic Leadership in Public Sector"],
        certification: ["Certified Executive Officer (CXO)", "Certified Management Specialist"]
    },
    {
        id: "p2",
        name: "Dewi Lestari, S.Sos.",
        nip: "19820512 200501 2 003",
        position: "Sekretaris Direktur",
        subdirectorate: "Direksi",
        photo: "foto_web/2.jpg",
        education: ["S1 Ilmu Komunikasi - Universitas Padjadjaran"],
        training: ["Executive Secretary Development Program", "Workshop Kearsipan dan Tata Persuratan Digital"],
        certification: ["Certified Professional Secretary (CPS)", "Sertifikasi Tata Kelola Administrasi Perkantoran"]
    },
    {
        id: "p3",
        name: "Ir. Bambang Triyono, M.T.",
        nip: "19741022 199903 1 001",
        position: "Kepala Subdirektorat Optimalisasi",
        subdirectorate: "Subdirektorat Optimalisasi",
        photo: "foto_web/3.jpg",
        education: ["S1 Teknik Industri - Institut Teknologi Bandung", "S2 Magister Teknik Sistem dan Perencanaan - UGM"],
        training: ["Diklat Kepemimpinan Administrator (PIM III)", "Workshop Optimalisasi Sumber Daya Organisasi"],
        certification: ["Project Management Professional (PMP)", "Certified Supply Chain Manager (CSCM)"]
    },
    {
        id: "p4",
        name: "Rizky Pratama, S.T.",
        nip: "19900215 201503 1 004",
        position: "Staf Optimalisasi Kinerja & Proses",
        subdirectorate: "Subdirektorat Optimalisasi",
        photo: "foto_web/4.jpg",
        education: ["S1 Teknik Industri - Universitas Diponegoro"],
        training: ["Workshop Business Process Reengineering", "Pelatihan Lean Six Sigma Green Belt"],
        certification: ["Certified Lean Six Sigma Green Belt (CLSSGB)"]
    },
    {
        id: "p5",
        name: "Siti Rahmah, S.Kom., M.TI.",
        nip: "19930418 201801 2 005",
        position: "Staf Optimalisasi Sistem Informasi",
        subdirectorate: "Subdirektorat Optimalisasi",
        photo: "foto_web/5.jpg",
        education: ["S1 Sistem Informasi - Universitas Brawijaya", "S2 Magister Teknologi Informasi - Universitas Indonesia"],
        training: ["Seminar Digital Transformation in Government", "Workshop Enterprise Architecture Plan"],
        certification: ["TOGAF 9 Certified (Enterprise Architecture)"]
    },
    {
        id: "p6",
        name: "Dian Kusuma, S.Si.",
        nip: "19951108 202012 2 010",
        position: "Staf Analisis Optimalisasi Data",
        subdirectorate: "Subdirektorat Optimalisasi",
        photo: "foto_web/6.jpg",
        education: ["S1 Statistika - Universitas Airlangga"],
        training: ["Workshop Data Analytics and Dashboarding", "Seminar Big Data for Public Policy"],
        certification: ["Certified Data Associate (CDA)"]
    },
    {
        id: "p7",
        name: "Fajar Nugroho, S.T.",
        nip: "19910824 201602 1 003",
        position: "Staf Optimalisasi Infrastruktur",
        subdirectorate: "Subdirektorat Optimalisasi",
        photo: "foto_web/7.jpg",
        education: ["S1 Teknik Elektro - Universitas Sebelas Maret"],
        training: ["Workshop Manajemen Aset Fisik & Infrastruktur", "Pelatihan K3 Umum"],
        certification: ["Ahli K3 Umum (Kemnaker RI)"]
    },
    {
        id: "p8",
        name: "Hesti Wulandari, S.E.",
        nip: "19940305 201903 2 012",
        position: "Staf Optimalisasi Sumber Daya Manusia",
        subdirectorate: "Subdirektorat Optimalisasi",
        photo: "foto_web/8.jpg",
        education: ["S1 Manajemen - Universitas Padjadjaran"],
        training: ["Workshop Manpower Planning & Audit", "Seminar Talent Management Strategy"],
        certification: ["Certified Human Resources Associate (CHRA)"]
    },
    {
        id: "p9",
        name: "Sri Wahyuni, S.E., M.Ak.",
        nip: "19760515 200003 2 002",
        position: "Kepala Subdirektorat Keuangan",
        subdirectorate: "Subdirektorat Keuangan",
        photo: "foto_web/9.jpg",
        education: ["S1 Akuntansi - Universitas Airlangga", "S2 Magister Akuntansi - Universitas Indonesia"],
        training: ["Diklat Kepemimpinan Administrator (PIM III)", "Workshop Standar Akuntansi Pemerintahan"],
        certification: ["Chartered Accountant (CA) - IAI", "Certified Public Accountant (CPA)"]
    },
    {
        id: "p10",
        name: "Ahmad Faisal, S.E.",
        nip: "19881112 201403 1 002",
        position: "Staf Penyusunan Anggaran",
        subdirectorate: "Subdirektorat Keuangan",
        photo: "foto_web/10.jpg",
        education: ["S1 Ekonomi Pembangunan - Universitas Diponegoro"],
        training: ["Pelatihan Aplikasi RKA-KL dan Krisna", "Workshop Penganggaran Berbasis Kinerja"],
        certification: ["Sertifikasi Perencana Anggaran (Kemenkeu)"]
    },
    {
        id: "p11",
        name: "Rina Amalia, S.E., M.Si.",
        nip: "19910222 201602 2 006",
        position: "Staf Verifikasi & Pembukuan",
        subdirectorate: "Subdirektorat Keuangan",
        photo: "foto_web/11.jpg",
        education: ["S1 Akuntansi - Universitas Brawijaya", "S2 Magister Sains Akuntansi - UGM"],
        training: ["Workshop Sistem Akuntansi Instansi (SAIBA)", "Seminar Pencegahan Fraud di Sektor Publik"],
        certification: ["Certified Fraud Examiner (CFE)"]
    },
    {
        id: "p12",
        name: "Hendra Wijaya, A.Md.Ak.",
        nip: "19950715 201803 1 005",
        position: "Staf Perbendaharaan",
        subdirectorate: "Subdirektorat Keuangan",
        photo: "foto_web/12.jpg",
        education: ["D3 Akuntansi - Sekolah Tinggi Akuntansi Negara (STAN)"],
        training: ["Diklat Bendahara Pengeluaran (Kemenkeu)", "Workshop Pengelolaan Kas Negara"],
        certification: ["Sertifikat Bendahara Pengeluaran Bersertifikasi (BNSP)"]
    },
    {
        id: "p13",
        name: "Mega Lestari, S.Ak.",
        nip: "19961014 202012 2 015",
        position: "Staf Analisis Laporan Keuangan",
        subdirectorate: "Subdirektorat Keuangan",
        photo: "foto_web/13.jpg",
        education: ["S1 Akuntansi - Universitas Sebelas Maret"],
        training: ["Workshop Analisis Laporan Keuangan Negara", "Pelatihan Perpajakan (Brevet A & B)"],
        certification: ["Certified Financial Report Analyst (CFRA)"]
    },
    {
        id: "p14",
        name: "Taufik Rahman, S.E.",
        nip: "19920530 201703 1 008",
        position: "Staf Perpajakan & Pelaporan",
        subdirectorate: "Subdirektorat Keuangan",
        photo: "foto_web/14.jpg",
        education: ["S1 Akuntansi - Universitas Hasanuddin"],
        training: ["Diklat Pajak Pertambahan Nilai dan PPh Badan", "Workshop Aplikasi e-Faktur & e-SPT"],
        certification: ["Brevet Pajak A & B (Ikatan Akuntan Indonesia)"]
    },
    {
        id: "p15",
        name: "Dr. Ir. Hermawan, M.Eng.",
        nip: "19730412 199803 1 003",
        position: "Kepala Subdirektorat Evaluasi",
        subdirectorate: "Subdirektorat Evaluasi",
        photo: "foto_web/15.jpg",
        education: ["S1 Teknik Kimia - Institut Teknologi Sepuluh Nopember", "S2 Master of Engineering - Tokyo Institute of Technology", "S3 Doktor Teknik Sistem - Kyoto University"],
        training: ["Diklat Kepemimpinan Administrator (PIM III)", "Workshop Monitoring dan Evaluasi Program Nasional"],
        certification: ["Certified Evaluation Specialist (CES)", "Professional Engineer (Ir. Professional)"]
    },
    {
        id: "p16",
        name: "Wulan Dari, S.Si., M.Sc.",
        nip: "19900918 201503 2 008",
        position: "Staf Pemantauan Kinerja Program",
        subdirectorate: "Subdirektorat Evaluasi",
        photo: "foto_web/16.jpg",
        education: ["S1 Matematika - Universitas Gadjah Mada", "S2 Master of Science in Statistics - University of Groningen"],
        training: ["Pelatihan Evaluasi Dampak Program (Impact Evaluation)", "Workshop Penyusunan Indikator Kinerja Utama (IKU)"],
        certification: ["Certified Program Evaluator (CPE)"]
    },
    {
        id: "p17",
        name: "Rudi Hermawan, S.Kom.",
        nip: "19921204 201703 1 004",
        position: "Staf Sistem Informasi Monitoring",
        subdirectorate: "Subdirektorat Evaluasi",
        photo: "foto_web/17.jpg",
        education: ["S1 Ilmu Komputer - Universitas Indonesia"],
        training: ["Workshop Sistem Monitoring Elektronik (e-Monev)", "Seminar Database Management & Analytics"],
        certification: ["Oracle Certified Professional (OCP)"]
    },
    {
        id: "p18",
        name: "Siska Amalia, S.Sos.",
        nip: "19940615 201903 2 011",
        position: "Staf Evaluasi Dampak Sosial",
        subdirectorate: "Subdirektorat Evaluasi",
        photo: "foto_web/18.jpg",
        education: ["S1 Sosiologi - Universitas Padjadjaran"],
        training: ["Workshop Social Impact Assessment", "Seminar Analisis Kebijakan Publik"],
        certification: ["Certified Policy Analyst (CPA)"]
    },
    {
        id: "p19",
        name: "Arif Budiman, S.T.",
        nip: "19930729 201801 1 003",
        position: "Staf Evaluasi Teknis & Mutu",
        subdirectorate: "Subdirektorat Evaluasi",
        photo: "foto_web/19.jpg",
        education: ["S1 Teknik Sipil - Universitas Diponegoro"],
        training: ["Pelatihan Quality Assurance and Quality Control (QA/QC)", "Workshop Audit Kinerja Infrastruktur"],
        certification: ["Ahli Teknik Konstruksi / Professional Quality Auditor"]
    },
    {
        id: "p20",
        name: "Lia Natalia, S.E.",
        nip: "19960208 202112 2 010",
        position: "Staf Pelaporan Hasil Evaluasi",
        subdirectorate: "Subdirektorat Evaluasi",
        photo: "foto_web/20.jpg",
        education: ["S1 Manajemen - Universitas Brawijaya"],
        training: ["Workshop Technical Report Writing & Presentation", "Seminar Manajemen Risiko Organisasi"],
        certification: ["Enterprise Risk Associate (ERA)"]
    }
];

// Default Theme Settings
const defaultSettings = {
    accentColor: "#1e40af",
    radius: 12,
    fontFamily: "inherit",
    photoStyle: "rounded"
};

// State Manager
let state = {
    personnel: [],
    settings: {}
};

// DOM Cache
const dom = {
    primaryColor: document.getElementById("primary-color"),
    primaryColorText: document.getElementById("primary-color-text"),
    presetBtns: document.querySelectorAll(".preset-btn"),
    cardRadius: document.getElementById("card-radius"),
    cardRadiusValue: document.getElementById("card-radius-value"),
    fontFamily: document.getElementById("font-family"),
    photoStyle: document.getElementById("photo-style"),
    btnResetData: document.getElementById("btn-reset-data"),
    tabTriggers: document.querySelectorAll(".tab-trigger"),
    tabContents: document.querySelectorAll(".tab-content"),
    previewIframe: document.getElementById("preview-iframe"),
    respBtns: document.querySelectorAll(".resp-btn"),
    codeOutput: document.getElementById("code-output"),
    copyCodeBtn: document.getElementById("copy-code-btn"),
    crudSearch: document.getElementById("crud-search"),
    btnAddPersonnel: document.getElementById("btn-add-personnel"),
    personnelListContainer: document.getElementById("personnel-list-container"),
    
    // Modal elements
    modal: document.getElementById("personnel-modal"),
    modalTitle: document.getElementById("modal-title"),
    modalForm: document.getElementById("personnel-form"),
    fieldId: document.getElementById("field-id"),
    fieldName: document.getElementById("field-name"),
    fieldNip: document.getElementById("field-nip"),
    fieldPosition: document.getElementById("field-position"),
    fieldSubdit: document.getElementById("field-subdit"),
    fieldPhoto: document.getElementById("field-photo"),
    fieldEdu: document.getElementById("field-edu"),
    fieldTraining: document.getElementById("field-training"),
    fieldCert: document.getElementById("field-cert"),
    btnCloseModal: document.getElementById("btn-close-modal"),
    btnCancelModal: document.getElementById("btn-cancel-modal")
};

// Initialize App
function init() {
    loadData();
    setupEventListeners();
    applySettingsToUI();
    renderPersonnelList();
    generate();
}

// Load settings and database from LocalStorage or Defaults
function loadData() {
    const storedPersonnel = localStorage.getItem("wpsdm_personnel");
    const storedSettings = localStorage.getItem("wpsdm_settings");

    if (storedPersonnel) {
        state.personnel = JSON.parse(storedPersonnel);
    } else {
        state.personnel = [...defaultPersonnel];
        localStorage.setItem("wpsdm_personnel", JSON.stringify(state.personnel));
    }

    if (storedSettings) {
        state.settings = JSON.parse(storedSettings);
    } else {
        state.settings = { ...defaultSettings };
        localStorage.setItem("wpsdm_settings", JSON.stringify(state.settings));
    }
}

// Save state to LocalStorage
function saveData() {
    localStorage.setItem("wpsdm_personnel", JSON.stringify(state.personnel));
    localStorage.setItem("wpsdm_settings", JSON.stringify(state.settings));
}

// Apply settings to workspace UI variables
function applySettingsToUI() {
    const s = state.settings;
    
    // Set theme customizer form values
    dom.primaryColor.value = s.accentColor;
    dom.primaryColorText.value = s.accentColor;
    dom.cardRadius.value = s.radius;
    dom.cardRadiusValue.textContent = `${s.radius}px`;
    dom.fontFamily.value = s.fontFamily;
    dom.photoStyle.value = s.photoStyle;
    
    // Update active state in preset buttons
    dom.presetBtns.forEach(btn => {
        if (btn.dataset.color === s.accentColor) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update CSS variables on root
    document.documentElement.style.setProperty('--accent-color', s.accentColor);
    document.documentElement.style.setProperty('--accent-glow', s.accentColor + "26"); // 15% opacity hex
}

// Setup Event Listeners
function setupEventListeners() {
    // 1. Tab triggers
    dom.tabTriggers.forEach(btn => {
        btn.addEventListener("click", () => {
            dom.tabTriggers.forEach(t => t.classList.remove("active"));
            dom.tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
            
            if (btn.dataset.tab === "preview") {
                generate();
            } else if (btn.dataset.tab === "code") {
                generate();
            }
        });
    });

    // 2. Responsive toggles
    dom.respBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            dom.respBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            dom.previewIframe.style.width = btn.dataset.width;
        });
    });

    // 3. Theme Customizer Events
    dom.primaryColor.addEventListener("input", (e) => {
        state.settings.accentColor = e.target.value;
        dom.primaryColorText.value = e.target.value;
        applySettingsToUI();
        saveData();
        generate();
    });

    dom.primaryColorText.addEventListener("input", (e) => {
        const val = e.target.value;
        if (val.match(/^#[0-9A-Fa-f]{6}$/)) {
            state.settings.accentColor = val;
            dom.primaryColor.value = val;
            applySettingsToUI();
            saveData();
            generate();
        }
    });

    dom.presetBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const color = btn.dataset.color;
            state.settings.accentColor = color;
            applySettingsToUI();
            saveData();
            generate();
        });
    });

    dom.cardRadius.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        state.settings.radius = val;
        dom.cardRadiusValue.textContent = `${val}px`;
        saveData();
        generate();
    });

    dom.fontFamily.addEventListener("change", (e) => {
        state.settings.fontFamily = e.target.value;
        saveData();
        generate();
    });

    dom.photoStyle.addEventListener("change", (e) => {
        state.settings.photoStyle = e.target.value;
        saveData();
        generate();
    });

    // Reset Data Action
    dom.btnResetData.addEventListener("click", () => {
        if (confirm("Apakah Anda yakin ingin mereset seluruh data personnel ke data default awal? Perubahan kustom Anda akan hilang.")) {
            state.personnel = [...defaultPersonnel];
            state.settings = { ...defaultSettings };
            applySettingsToUI();
            saveData();
            renderPersonnelList();
            generate();
        }
    });

    // 4. CRUD Actions
    dom.crudSearch.addEventListener("input", () => {
        renderPersonnelList();
    });

    dom.btnAddPersonnel.addEventListener("click", () => {
        openModal(null);
    });

    dom.btnCloseModal.addEventListener("click", closeModal);
    dom.btnCancelModal.addEventListener("click", closeModal);
    
    dom.modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        savePersonnelForm();
    });

    // 5. Code Copy Action
    dom.copyCodeBtn.addEventListener("click", () => {
        const text = dom.codeOutput.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const origHTML = dom.copyCodeBtn.innerHTML;
            dom.copyCodeBtn.style.backgroundColor = "#047857";
            dom.copyCodeBtn.innerHTML = "✅ Berhasil Disalin!";
            setTimeout(() => {
                dom.copyCodeBtn.style.backgroundColor = "";
                dom.copyCodeBtn.innerHTML = origHTML;
            }, 2000);
        }).catch(err => {
            alert("Gagal menyalin kode. Silakan salin secara manual.");
        });
    });
}

// Render the CRUD list interface
function renderPersonnelList() {
    const searchVal = dom.crudSearch.value.toLowerCase();
    dom.personnelListContainer.innerHTML = "";
    
    const filtered = state.personnel.filter(p => 
        p.name.toLowerCase().includes(searchVal) || 
        p.nip.toLowerCase().includes(searchVal) || 
        p.position.toLowerCase().includes(searchVal)
    );

    if (filtered.length === 0) {
        dom.personnelListContainer.innerHTML = `
            <div style="padding: 30px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
                Tidak ada personel yang cocok dengan pencarian.
            </div>
        `;
        return;
    }

    filtered.forEach((p, idx) => {
        // Find index in main state array
        const mainIdx = state.personnel.findIndex(item => item.id === p.id);
        
        const row = document.createElement("div");
        row.className = "personnel-item";
        
        const isFirst = mainIdx === 0;
        const isLast = mainIdx === state.personnel.length - 1;
        
        row.innerHTML = `
            <div class="col-info">
                <img class="thumb" src="${p.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop'}" alt="${p.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><rect width=\'100\' height=\'100\' rx=\'8\' fill=\'%231e293b\'/><circle cx=\'50\' cy=\'40\' r=\'18\' fill=\'%23475569\'/><path d=\'M20 85c0-10 10-18 30-18s30 8 30 18z\' fill=\'%23475569\'/></svg>'">
                <div class="name-box">
                    <span class="name">${p.name}</span>
                    <span class="nip">NIP. ${p.nip}</span>
                    <span class="jabatan">${p.position}</span>
                </div>
            </div>
            <div class="col-subdit">${p.subdirectorate}</div>
            <div class="col-order">
                <button class="order-btn" title="Pindahkan ke atas" onclick="movePersonnel(${mainIdx}, -1)" ${isFirst ? 'disabled' : ''}>▲</button>
                <button class="order-btn" title="Pindahkan ke bawah" onclick="movePersonnel(${mainIdx}, 1)" ${isLast ? 'disabled' : ''}>▼</button>
            </div>
            <div class="col-actions">
                <button class="crud-btn edit" onclick="editPersonnel('${p.id}')">Edit</button>
                <button class="crud-btn delete" onclick="deletePersonnel('${p.id}')">Hapus</button>
            </div>
        `;
        
        dom.personnelListContainer.appendChild(row);
    });
}

// Swap items for ordering
window.movePersonnel = function(index, direction) {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= state.personnel.length) return;
    
    // Swap items
    const temp = state.personnel[index];
    state.personnel[index] = state.personnel[targetIdx];
    state.personnel[targetIdx] = temp;
    
    saveData();
    renderPersonnelList();
    generate();
};

// Delete personnel from database
window.deletePersonnel = function(id) {
    const index = state.personnel.findIndex(p => p.id === id);
    if (index === -1) return;
    
    const pName = state.personnel[index].name;
    if (confirm(`Apakah Anda yakin ingin menghapus data "${pName}"?`)) {
        state.personnel.splice(index, 1);
        saveData();
        renderPersonnelList();
        generate();
    }
};

// Edit personnel (opens form modal)
window.editPersonnel = function(id) {
    const person = state.personnel.find(p => p.id === id);
    if (person) {
        openModal(person);
    }
};

// Open CRUD Form Modal (New or Edit)
function openModal(person) {
    dom.modalForm.reset();
    
    if (person) {
        // Edit Mode
        dom.modalTitle.textContent = "Edit Data Personel";
        dom.fieldId.value = person.id;
        dom.fieldName.value = person.name;
        dom.fieldNip.value = person.nip;
        dom.fieldPosition.value = person.position;
        dom.fieldSubdit.value = person.subdirectorate;
        dom.fieldPhoto.value = person.photo;
        dom.fieldEdu.value = person.education ? person.education.join("\n") : "";
        dom.fieldTraining.value = person.training ? person.training.join("\n") : "";
        dom.fieldCert.value = person.certification ? person.certification.join("\n") : "";
    } else {
        // Add Mode
        dom.modalTitle.textContent = "Tambah Personel Baru";
        dom.fieldId.value = "";
        // Default photo name suggestions based on sequence number
        const nextNum = state.personnel.length + 1;
        dom.fieldPhoto.value = `foto_web/${nextNum}.jpg`;
    }
    
    dom.modal.classList.add("active");
}

function closeModal() {
    dom.modal.classList.remove("active");
}

// Save modal form data
function savePersonnelForm() {
    const id = dom.fieldId.value;
    const name = dom.fieldName.value.trim();
    const nip = dom.fieldNip.value.trim();
    const position = dom.fieldPosition.value.trim();
    const subdirectorate = dom.fieldSubdit.value;
    const photo = dom.fieldPhoto.value.trim() || `foto_web/${state.personnel.length + 1}.jpg`;
    
    // Parse textareas to arrays (split by newline and remove empty rows)
    const parseTextarea = (textarea) => {
        return textarea.value.split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);
    };
    
    const education = parseTextarea(dom.fieldEdu);
    const training = parseTextarea(dom.fieldTraining);
    const certification = parseTextarea(dom.fieldCert);
    
    if (id) {
        // Edit
        const idx = state.personnel.findIndex(p => p.id === id);
        if (idx !== -1) {
            state.personnel[idx] = {
                id, name, nip, position, subdirectorate, photo, education, training, certification
            };
        }
    } else {
        // Add
        const newId = "p_" + Date.now();
        state.personnel.push({
            id: newId, name, nip, position, subdirectorate, photo, education, training, certification
        });
    }
    
    saveData();
    closeModal();
    renderPersonnelList();
    generate();
}

// Generate the final HTML code
function generate() {
    const generatedHTML = generateTemplateCode(state);
    
    // Update live preview in iframe
    updatePreviewFrame(generatedHTML);
    
    // Update raw output code block
    dom.codeOutput.textContent = generatedHTML;
}

// Write the compiled code into the preview iframe
function updatePreviewFrame(html) {
    const iframeDoc = dom.previewIframe.contentDocument || dom.previewIframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pratinjau Profil SDM</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
                    background-color: #f8fafc;
                    margin: 0;
                    padding: 30px 15px;
                }
                .wp-sim-container {
                    max-width: 1140px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 30px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                }
                .wp-sim-header {
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 15px;
                    margin-bottom: 30px;
                }
                .wp-sim-title {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #0f172a;
                    margin: 0 0 6px 0;
                }
                .wp-sim-meta {
                    font-size: 0.8rem;
                    color: #64748b;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="wp-sim-container">
                <div class="wp-sim-header">
                    <h1 class="wp-sim-title">Profil Pegawai & SDM</h1>
                    <p class="wp-sim-meta">Halaman Struktur Organisasi Kantor Utama</p>
                </div>
                ${html}
            </div>
        </body>
        </html>
    `);
    iframeDoc.close();
}

// Master HTML compiler for copy-pasteable WordPress code
function generateTemplateCode(s) {
    const primary = s.settings.accentColor;
    const radius = s.settings.radius;
    const font = s.settings.fontFamily;
    const photoStyle = s.settings.photoStyle;
    
    // Photo shape CSS calculation
    let photoRadius = "8px";
    if (photoStyle === "circle") photoRadius = "50%";
    if (photoStyle === "square") photoRadius = "0px";
    if (photoStyle === "rounded") photoRadius = `${radius}px`;

    // Group personnel by Subdirectorate
    const grouped = {
        "Direksi": [],
        "Subdirektorat Optimalisasi": [],
        "Subdirektorat Keuangan": [],
        "Subdirektorat Evaluasi": [],
        "Lainnya": []
    };

    s.personnel.forEach(p => {
        if (grouped[p.subdirectorate]) {
            grouped[p.subdirectorate].push(p);
        } else {
            grouped["Lainnya"].push(p);
        }
    });

    // Subdirectorate titles for display
    const groupTitles = {
        "Direksi": "Direksi & Pimpinan",
        "Subdirektorat Optimalisasi": "Subdirektorat Optimalisasi",
        "Subdirektorat Keuangan": "Subdirektorat Keuangan",
        "Subdirektorat Evaluasi": "Subdirektorat Evaluasi",
        "Lainnya": "Divisi / Bagian Lainnya"
    };

    // Begin compilation
    let html = `<!-- START BLOCK: SDM PROFILE GRID & ACCORDION (COPY-PASTEABLE TO WP CUSTOM HTML) -->
<div class="wpsdm-wrapper">
    
    <!-- CSS Scoped Styles -->
    <style>
        .wpsdm-wrapper {
            font-family: ${font};
            color: #1e293b;
            margin: 20px 0;
            line-height: 1.5;
            box-sizing: border-box;
        }
        .wpsdm-wrapper * {
            box-sizing: border-box;
        }
        .wpsdm-section {
            margin-bottom: 50px;
        }
        .wpsdm-section-heading {
            font-size: 1.4rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 24px 0;
            padding-left: 14px;
            border-left: 5px solid ${primary};
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
        }
        /* Grid Layouts */
        .wpsdm-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
        }
        /* Centering for Direksi group (usually smaller number of people) */
        .wpsdm-grid.wpsdm-center {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 28px;
        }
        .wpsdm-grid.wpsdm-center .wpsdm-card {
            width: 100%;
            max-width: 350px;
        }
        /* Card Structure */
        .wpsdm-card {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: ${radius}px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03), 0 2px 4px -1px rgba(0,0,0,0.02);
            padding: 24px;
            display: flex;
            flex-direction: column;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }
        .wpsdm-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px -4px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.04);
            border-color: #cbd5e1;
        }
        /* Header Profile Info */
        .wpsdm-profile-header {
            display: flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 20px;
        }
        .wpsdm-photo-frame {
            width: 86px;
            height: 86px;
            border-radius: ${photoRadius};
            overflow: hidden;
            border: 3px solid #ffffff;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            flex-shrink: 0;
            cursor: zoom-in;
            transition: transform 0.2s;
        }
        .wpsdm-photo-frame:hover {
            transform: scale(1.05);
        }
        .wpsdm-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .wpsdm-meta {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .wpsdm-name {
            font-size: 1.05rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
            line-height: 1.3;
        }
        .wpsdm-nip {
            font-size: 0.75rem;
            color: #64748b;
            font-family: monospace;
            letter-spacing: 0.02em;
        }
        .wpsdm-position {
            font-size: 0.8rem;
            font-weight: 700;
            color: ${primary};
            text-transform: uppercase;
            letter-spacing: 0.03em;
            margin-top: 2px;
            line-height: 1.3;
        }
        
        /* Accordion Style details inside cards */
        .wpsdm-accordion {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: auto;
            border-top: 1px solid #e2e8f0;
            padding-top: 18px;
        }
        .wpsdm-acc-item {
            border: 1px solid #e2e8f0;
            border-radius: ${Math.max(0, radius - 4)}px;
            overflow: hidden;
            background-color: #ffffff;
            transition: border-color 0.2s;
        }
        .wpsdm-acc-item.wpsdm-active {
            border-color: ${primary}80; /* 50% opacity primary */
            box-shadow: 0 2px 8px -1px ${primary}0d;
        }
        .wpsdm-acc-trigger {
            width: 100%;
            background: #f8fafc;
            border: none;
            padding: 10px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: inherit;
            font-size: 0.78rem;
            font-weight: 700;
            color: #475569;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s;
        }
        .wpsdm-acc-trigger:hover {
            background-color: #f1f5f9;
            color: #0f172a;
        }
        .wpsdm-acc-item.wpsdm-active .wpsdm-acc-trigger {
            background-color: ${primary}0a; /* 4% opacity primary */
            color: ${primary};
        }
        .wpsdm-acc-icon {
            font-size: 0.65rem;
            transition: transform 0.3s ease;
            color: #94a3b8;
        }
        .wpsdm-acc-item.wpsdm-active .wpsdm-acc-icon {
            transform: rotate(180deg);
            color: ${primary};
        }
        .wpsdm-acc-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 0.78rem;
            color: #4b5563;
        }
        .wpsdm-acc-content-inner {
            padding: 12px 14px;
            border-top: 1px solid #f1f5f9;
        }
        /* Custom lists inside accordion */
        .wpsdm-list {
            padding-left: 18px;
            margin: 0;
        }
        .wpsdm-list li {
            margin-bottom: 6px;
            position: relative;
            list-style: none;
        }
        .wpsdm-list li::before {
            content: "•";
            color: ${primary};
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
            position: absolute;
            font-size: 1.1rem;
            top: -2px;
        }
        .wpsdm-list li:last-child {
            margin-bottom: 0;
        }
        .wpsdm-no-data {
            color: #94a3b8;
            font-style: italic;
            font-size: 0.75rem;
        }

        /* Lightbox Popup Modal (No compression images zoom) */
        .wpsdm-lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(8px);
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wpsdm-lightbox.wpsdm-show {
            opacity: 1;
            pointer-events: auto;
        }
        .wpsdm-lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: scale(0.9);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wpsdm-lightbox.wpsdm-show .wpsdm-lightbox-content {
            transform: scale(1);
        }
        .wpsdm-lightbox-img {
            max-width: 100%;
            max-height: 75vh;
            border-radius: ${radius}px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 4px solid #ffffff;
            object-fit: contain;
        }
        .wpsdm-lightbox-caption {
            color: #ffffff;
            margin-top: 16px;
            text-align: center;
            background: rgba(15, 23, 42, 0.6);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 0.95rem;
            font-weight: 700;
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .wpsdm-lightbox-close {
            position: absolute;
            top: -45px;
            right: 0;
            background: none;
            border: none;
            color: #ffffff;
            font-size: 2rem;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .wpsdm-lightbox-close:hover {
            transform: scale(1.1);
        }
    </style>

    <!-- Personnel Layout sections -->`;

    // Render group sections
    const renderCard = (p) => {
        const renderListItems = (arr) => {
            if (!arr || arr.length === 0) {
                return `<span class="wpsdm-no-data">Tidak ada data</span>`;
            }
            return `<ul class="wpsdm-list">${arr.map(item => `<li>${item}</li>`).join("")}</ul>`;
        };

        return `
            <!-- Card: ${p.name} -->
            <div class="wpsdm-card">
                <div class="wpsdm-profile-header">
                    <div class="wpsdm-photo-frame" onclick="wpsdmZoom('${p.photo}', '${p.name.replace(/'/g, "\\'")}', '${p.position.replace(/'/g, "\\'")}')" title="Klik untuk memperbesar foto">
                        <img class="wpsdm-photo" src="${p.photo}" alt="${p.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><rect width=\'100\' height=\'100\' fill=\'%23${primary.replace('#','') }15\'/><circle cx=\'50\' cy=\'38\' r=\'18\' fill=\'%23${primary.replace('#','') }80\'/><path d=\'M20 85c0-12 10-20 30-20s30 8 30 20z\' fill=\'%23${primary.replace('#','') }80\'/></svg>'">
                    </div>
                    <div class="wpsdm-meta">
                        <h3 class="wpsdm-name">${p.name}</h3>
                        <span class="wpsdm-nip">NIP. ${p.nip}</span>
                        <span class="wpsdm-position">${p.position}</span>
                    </div>
                </div>
                
                <div class="wpsdm-accordion">
                    <!-- Pendidikan Formal -->
                    <div class="wpsdm-acc-item">
                        <button class="wpsdm-acc-trigger" onclick="wpsdmToggle(this)">
                            <span>🎓 Pendidikan Formal</span>
                            <span class="wpsdm-acc-icon">▼</span>
                        </button>
                        <div class="wpsdm-acc-content">
                            <div class="wpsdm-acc-content-inner">
                                ${renderListItems(p.education)}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Diklat/Seminar/Workshop -->
                    <div class="wpsdm-acc-item">
                        <button class="wpsdm-acc-trigger" onclick="wpsdmToggle(this)">
                            <span>🗓️ Diklat / Seminar / Workshop</span>
                            <span class="wpsdm-acc-icon">▼</span>
                        </button>
                        <div class="wpsdm-acc-content">
                            <div class="wpsdm-acc-content-inner">
                                ${renderListItems(p.training)}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Sertifikasi Kompetensi -->
                    <div class="wpsdm-acc-item">
                        <button class="wpsdm-acc-trigger" onclick="wpsdmToggle(this)">
                            <span>🏅 Sertifikasi Kompetensi</span>
                            <span class="wpsdm-acc-icon">▼</span>
                        </button>
                        <div class="wpsdm-acc-content">
                            <div class="wpsdm-acc-content-inner">
                                ${renderListItems(p.certification)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    };

    // 1. Direksi Section
    if (grouped["Direksi"].length > 0) {
        html += `
    <div class="wpsdm-section">
        <h2 class="wpsdm-section-heading">${groupTitles["Direksi"]}</h2>
        <div class="wpsdm-grid wpsdm-center">
            ${grouped["Direksi"].map(p => renderCard(p)).join("")}
        </div>
    </div>`;
    }

    // 2. Subdirektorat sections
    const subdirs = ["Subdirektorat Optimalisasi", "Subdirektorat Keuangan", "Subdirektorat Evaluasi", "Lainnya"];
    subdirs.forEach(sub => {
        if (grouped[sub].length > 0) {
            html += `
    <div class="wpsdm-section">
        <h2 class="wpsdm-section-heading">${groupTitles[sub] || sub}</h2>
        <div class="wpsdm-grid">
            ${grouped[sub].map(p => renderCard(p)).join("")}
        </div>
    </div>`;
        }
    });

    html += `
    <!-- Lightbox Zoom Modal markup -->
    <div class="wpsdm-lightbox" id="wpsdm-lightbox-overlay" onclick="wpsdmCloseZoom()">
        <div class="wpsdm-lightbox-content" onclick="event.stopPropagation()">
            <button class="wpsdm-lightbox-close" onclick="wpsdmCloseZoom()">✕</button>
            <img class="wpsdm-lightbox-img" id="wpsdm-lightbox-img" src="" alt="Zoomed Photo">
            <div class="wpsdm-lightbox-caption" id="wpsdm-lightbox-caption"></div>
        </div>
    </div>

    <!-- Inline Vanilla JS logic -->
    <script>
        // Accordion Toggle function
        function wpsdmToggle(button) {
            var item = button.parentNode;
            var card = item.closest('.wpsdm-card');
            var content = button.nextElementSibling;
            
            // Check if active
            var isActive = item.classList.contains('wpsdm-active');
            
            // Collapse all accordions ON THE SAME CARD to keep layout neat
            var allItems = card.querySelectorAll('.wpsdm-acc-item');
            allItems.forEach(function(el) {
                el.classList.remove('wpsdm-active');
                el.querySelector('.wpsdm-acc-content').style.maxHeight = null;
            });
            
            // Toggle clicked item
            if (!isActive) {
                item.classList.add('wpsdm-active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }

        // Lightbox Photo Zoom functions
        function wpsdmZoom(imgUrl, name, pos) {
            var overlay = document.getElementById('wpsdm-lightbox-overlay');
            var img = document.getElementById('wpsdm-lightbox-img');
            var caption = document.getElementById('wpsdm-lightbox-caption');
            
            img.src = imgUrl;
            caption.innerHTML = name + " - " + pos;
            overlay.classList.add('wpsdm-show');
        }

        function wpsdmCloseZoom() {
            var overlay = document.getElementById('wpsdm-lightbox-overlay');
            overlay.classList.remove('wpsdm-show');
        }
        
        // Escape key to close lightbox
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape") {
                wpsdmCloseZoom();
            }
        });
    </script>
</div>
<!-- END BLOCK: SDM PROFILE GRID & ACCORDION -->`;

    return html;
}

// Start app on DOMContentLoaded
document.addEventListener("DOMContentLoaded", init);
