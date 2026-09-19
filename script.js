// ─────────────────────────────────────────
//  script.js — CodeKids Course Website
// ─────────────────────────────────────────

// ── PREVIEW DATA ──
// PREVIEWS[courseIdx][phaseIdx][sessionIdx]
// null = scratch placeholder (belum ada link)
// {t:'scratch', id:'...'} = embed Scratch project langsung
// {t:'yt', id:'...'} = embed YouTube video
// {t:'web', html:'...'} = rendered iframe HTML
// {t:'term', lines:[...]} = terminal simulation
const PREVIEWS = {
  // Little Animator (0) — Scratch
  0: [
    // Phase 0: Sesi 1-4
    [
      { t: 'scratch', id: '1382477307' }, // Sesi 1
      { t: 'scratch', id: '1382536784' }, // Sesi 2
      { t: 'scratch', id: '1382543039' }, // Sesi 3
      { t: 'scratch', id: '1382555586' }, // Sesi 4
    ],
    // Phase 1: Sesi 5-8
    [
      { t: 'scratch', id: '1382563295' }, // Sesi 5
      { t: 'scratch', id: '1382565589' }, // Sesi 6
      { t: 'scratch', id: '1382568684' }, // Sesi 7-8
    ],
    // Phase 2: Sesi 9-12
    [
      { t: 'scratch', id: '1382573268' }, // Sesi 9
      { t: 'scratch', id: '1382578978' }, // Sesi 10
      { t: 'scratch', id: '1382581738' }, // Sesi 11
      { t: 'scratch', id: '1382583639' }, // Sesi 12
    ],
    // Phase 3: Sesi 13-16
    [
      {
        t: 'img',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdkwoUUfEvpis-HNBjMo3A1Nf2KvX6soFTlvgqAOG-A&s=10',
      }, // Sesi 13
      { t: 'scratch', id: '1382587899' }, // Sesi 14-15
      {
        t: 'img',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7kTwpX6TOesPzBGlSX0E2l9olQkkrl7oR5TRtwcM5Q&s=10',
      }, // Sesi 16
    ],
  ],
  // Game Creator (1) — Scratch
  1: [
    // Phase 0: Sesi 1-4
    [
      { t: 'scratch', id: '1382743361' }, // Sesi 1 (Basic Events Gerak Dasar)
      { t: 'scratch', id: '1382610491' }, // Sesi 2 (Logika If-Then)
      { t: 'scratch', id: '1382739268' }, // Sesi 3 (Sensing Warna/Maze)
      { t: 'scratch', id: '1382745171' }, // Sesi 4 (Gravitasi)
    ],
    // Phase 1: Sesi 5-8
    [
      { t: 'scratch', id: '1382754182' }, // Sesi 5 (Sistem Skor)
      { t: 'scratch', id: '1382759306' }, // Sesi 6 (Nyawa & Timer)
      { t: 'scratch', id: '1382779144' }, // Sesi 7-8 (Mini Project)
    ],
    // Phase 2: Sesi 9-12
    [
      { t: 'scratch', id: '1382790812' }, // Sesi 9 (Broadcast Level)
      { t: 'scratch', id: '1382794239' }, // Sesi 10 (Layar Game Over)
      { t: 'scratch', id: '1382796169' }, // Sesi 11 (Cloning)
      { t: 'scratch', id: '1382797596' }, // Sesi 12 (Mekanik Menembak)
    ],
    // Phase 3: Sesi 13-16
    [
      { t: 'scratch', id: '1382802150' }, // Sesi 13 (Scrolling Background)
      {
        t: 'img',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SKBmC1blodV3Fsd0OVxJkUmIY9TZV-qmyy1Hi2xZkA&s=10',
      }, // Sesi 14-15 (Final Project)
      {
        t: 'img',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7kTwpX6TOesPzBGlSX0E2l9olQkkrl7oR5TRtwcM5Q&s=10',
      }, // Sesi 16
    ],
  ],

  // Web Starter (2)
  2: [
    // Phase 0: Sesi 1-4
    [
      // Sesi 1: h1-h6, p
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff;line-height:1.5">
<h1 style="color:#1d4ed8;font-size:26px;margin:0 0 4px">Heading 1 — Paling Besar</h1>
<h2 style="color:#2563eb;font-size:20px;margin:0 0 4px">Heading 2</h2>
<h3 style="color:#3b82f6;font-size:16px;margin:0 0 14px">Heading 3</h3>
<p style="color:#374151;font-size:14px">Ini paragraf pertamaku! 🎉 Belajar HTML ternyata mudah dan hasilnya langsung keliatan di browser.</p>
<p style="color:#374151;font-size:14px">Setiap tag HTML punya fungsinya masing-masing. Seru banget!</p>
</body></html>`,
      },
      // Sesi 2: Bold, Italic, ul, ol
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#1d4ed8;margin:0 0 10px">🎒 Daftar Perlengkapan Sekolah</h2>
<ul style="color:#374151;line-height:2.2;font-size:14px;margin:0 0 16px;padding-left:20px">
  <li><b>Buku tulis</b> — wajib ada</li>
  <li><i>Pensil dan pena</i></li>
  <li>Penggaris dan penghapus</li>
</ul>
<h2 style="color:#1d4ed8;margin:0 0 10px">📋 Urutan Bikin Website</h2>
<ol style="color:#374151;line-height:2.2;font-size:14px;padding-left:20px;margin:0">
  <li>Buka VS Code</li>
  <li>Tulis kode HTML</li>
  <li>Simpan, buka di browser</li>
</ol>
</body></html>`,
      },
      // Sesi 3: img, a href
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#1d4ed8;margin:0 0 12px">🐱 Hewan Peliharaanku</h2>
<div style="width:200px;height:140px;background:linear-gradient(135deg,#fde68a,#fbbf24);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:70px;margin-bottom:12px;box-shadow:0 4px 16px rgba(0,0,0,0.1)">🐱</div>
<p style="color:#374151;font-size:14px;margin-bottom:10px">Ini foto kucing kesayanganku! Ditaruh pakai tag <code style="background:#eff6ff;padding:2px 6px;border-radius:4px;color:#1d4ed8">&lt;img&gt;</code></p>
<a href="#" style="color:#2563eb;font-weight:700;font-size:14px;text-decoration:none;background:#eff6ff;padding:8px 14px;border-radius:8px;display:inline-block">→ Klik untuk lihat lebih banyak!</a>
</body></html>`,
      },
      // Sesi 4: Semantic HTML
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;margin:0;background:#fff;font-size:14px">
<header style="background:#1d4ed8;color:#fff;padding:14px 18px;font-size:16px;font-weight:800">🌐 Website Pertamaku</header>
<nav style="background:#eff6ff;padding:10px 18px;display:flex;gap:20px;border-bottom:2px solid #bfdbfe">
  <a href="#" style="color:#2563eb;text-decoration:none;font-weight:700">Beranda</a>
  <a href="#" style="color:#2563eb;text-decoration:none;font-weight:700">Tentang</a>
  <a href="#" style="color:#2563eb;text-decoration:none;font-weight:700">Kontak</a>
</nav>
<section style="padding:18px">
  <h2 style="color:#1e3a8a;margin:0 0 8px">Selamat Datang!</h2>
  <p style="color:#475569;line-height:1.7">Ini bagian utama halaman (section). Semua konten utama ada di sini.</p>
</section>
<footer style="background:#1e3a8a;color:#93c5fd;padding:10px 18px;font-size:12px;font-weight:600;text-align:center">© 2024 Website Pertamaku</footer>
</body></html>`,
      },
    ],
    // Phase 1: Sesi 5-8
    [
      // Sesi 5: Tabel
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#1d4ed8;margin:0 0 14px">📅 Jadwal Pelajaran Kelas 6A</h2>
<table border="1" cellpadding="9" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:13px;border-color:#bfdbfe">
  <tr style="background:#1d4ed8;color:#fff;font-weight:700">
    <th>Waktu</th><th>Senin</th><th>Selasa</th><th>Rabu</th>
  </tr>
  <tr style="background:#eff6ff">
    <td style="font-weight:700;color:#1d4ed8">07.00</td><td>Matematika</td><td>IPA</td><td>B. Indonesia</td>
  </tr>
  <tr>
    <td style="font-weight:700;color:#1d4ed8">08.30</td><td>IPS</td><td>Agama</td><td>Matematika</td>
  </tr>
  <tr style="background:#eff6ff">
    <td style="font-weight:700;color:#1d4ed8">10.00</td><td>Seni</td><td>Olahraga</td><td>IPA</td>
  </tr>
</table>
</body></html>`,
      },
      // Sesi 6: Form
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#1d4ed8;margin:0 0 16px">📝 Formulir Pendaftaran</h2>
<label style="display:block;font-weight:700;color:#374151;margin-bottom:4px;font-size:13px">Nama Lengkap</label>
<input type="text" placeholder="Masukkan namamu..." style="width:100%;padding:9px 12px;border:2px solid #bfdbfe;border-radius:10px;font-size:13px;margin-bottom:14px;box-sizing:border-box;font-family:sans-serif">
<label style="display:block;font-weight:700;color:#374151;margin-bottom:8px;font-size:13px">Pilih Jenjang</label>
<label style="margin-right:18px;font-size:13px"><input type="radio" name="k"> SD</label>
<label style="margin-right:18px;font-size:13px"><input type="radio" name="k"> SMP</label>
<label style="font-size:13px"><input type="radio" name="k"> SMA</label>
<br><br>
<button style="background:#2563eb;color:#fff;padding:10px 24px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:14px">Daftar Sekarang 🚀</button>
</body></html>`,
      },
      // Sesi 7-8: Mini Project buku harian
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;margin:0;background:#fef9c3">
<header style="background:#d97706;color:#fff;padding:16px 20px">
  <div style="font-size:22px;font-weight:900;margin-bottom:2px">📔 Buku Harian Digital</div>
  <div style="font-size:12px;opacity:0.85">Rabu, 18 September 2024</div>
</header>
<main style="padding:18px">
  <h2 style="color:#92400e;font-size:15px;margin:0 0 8px">Hari ini aku belajar HTML! ✏️</h2>
  <p style="color:#78350f;line-height:1.75;font-size:13px;margin:0 0 14px">Hari ini di CodeKids aku berhasil bikin website pertamaku sendiri. Ternyata nulis kode itu seru banget! Kayak bikin lego tapi digital.</p>
  <p style="font-weight:700;color:#92400e;font-size:13px;margin:0 0 8px">Yang aku pelajari hari ini:</p>
  <ul style="color:#92400e;line-height:2.2;font-size:13px;margin:0;padding-left:18px">
    <li>Bikin heading dan paragraf</li>
    <li>Bikin daftar belanja dengan &lt;ul&gt;</li>
    <li>Bikin tabel jadwal pelajaran</li>
  </ul>
</main>
</body></html>`,
      },
    ],
    // Phase 2: Sesi 9-12
    [
      // Sesi 9: CSS warna dan font
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h1 style="color:#7c3aed;font-size:24px;font-weight:900;margin:0 0 10px">Judul Warna Ungu ✨</h1>
<p style="color:#2563eb;font-size:15px;font-weight:700;margin:0 0 8px">Teks biru tebal dengan CSS</p>
<p style="color:#dc2626;font-style:italic;font-size:15px;margin:0 0 8px">Teks merah miring — <em>italic</em></p>
<p style="font-family:Georgia,serif;color:#374151;font-size:14px;line-height:1.8;margin:0 0 12px">Font berbeda pakai Google Fonts. Teks ini menggunakan serif agar terlihat elegan dan profesional.</p>
<div style="background:#fef9c3;padding:10px 14px;border-radius:8px;color:#92400e;font-weight:600;font-size:13px;border-left:4px solid #d97706">💡 CSS = Cara bikin teks dan halaman jadi berwarna dan cantik!</div>
</body></html>`,
      },
      // Sesi 10: Box Model
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#f8faff">
<h2 style="color:#1d4ed8;margin:0 0 16px;font-size:15px">📦 Box Model — Visualisasi</h2>
<div style="border:3px dashed #ef4444;padding:8px;border-radius:4px">
  <div style="background:#fde68a;text-align:center;font-size:11px;font-weight:800;color:#92400e;padding:4px;border-radius:2px">MARGIN — jarak paling luar (transparan)</div>
  <div style="border:3px solid #f97316;margin:8px;border-radius:4px">
    <div style="background:#fed7aa;text-align:center;font-size:11px;font-weight:800;color:#c2410c;padding:3px">BORDER — garis pembatas elemen</div>
    <div style="margin:6px;background:#bfdbfe;border-radius:4px;text-align:center;padding:14px;font-size:13px;font-weight:700;color:#1d4ed8">PADDING + CONTENT<br><span style="font-size:11px;font-weight:500;color:#2563eb">← Isi dan jarak dalam →</span></div>
  </div>
</div>
</body></html>`,
      },
      // Sesi 11: Class & ID
      {
        t: 'web',
        html: `<!DOCTYPE html><html><head><style>
.btn{background:#2563eb;color:#fff;padding:9px 18px;border-radius:10px;border:none;font-weight:700;margin:4px;cursor:pointer;font-family:sans-serif;font-size:13px;transition:opacity 0.2s}
.btn:hover{opacity:0.85}
.merah{background:#dc2626}
.hijau{background:#16a34a}
.kuning{background:#d97706}
#judul{color:#7c3aed;font-size:20px;font-weight:900;text-align:center;margin-bottom:16px}
</style></head><body style="font-family:sans-serif;padding:20px;background:#fff">
<p id="judul">✨ Belajar Class dan ID!</p>
<div style="text-align:center">
  <button class="btn">Biru (default)</button>
  <button class="btn merah">Merah (.merah)</button>
  <button class="btn hijau">Hijau (.hijau)</button>
  <button class="btn kuning">Kuning (.kuning)</button>
</div>
<p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px">Setiap tombol pakai <code>.btn</code> + class warna tambahan</p>
</body></html>`,
      },
      // Sesi 12: Hover effect (interactive)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><head><style>
body{font-family:sans-serif;padding:20px;background:#fff}
.btn{background:#2563eb;color:#fff;padding:12px 24px;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;transition:all 0.3s;display:block;margin-bottom:12px;width:100%}
.btn:hover{background:#1d4ed8;transform:translateY(-3px);box-shadow:0 10px 24px rgba(37,99,235,0.35)}
.card{border:2px solid #e2e8f0;border-radius:14px;padding:14px;transition:all 0.3s;cursor:pointer}
.card:hover{border-color:#2563eb;box-shadow:0 6px 20px rgba(37,99,235,0.15);transform:translateY(-3px)}
</style></head><body>
<h2 style="color:#1d4ed8;margin:0 0 14px;font-size:15px">🖱️ Hover untuk lihat efek CSS!</h2>
<button class="btn">Tombol dengan efek hover ↑</button>
<div class="card">
  <div style="font-weight:700;color:#374151;margin-bottom:4px;font-size:14px">📚 Kartu dengan hover</div>
  <div style="color:#64748b;font-size:13px">Arahkan mouse ke tombol atau kartu ini...</div>
</div>
</body></html>`,
      },
    ],
    // Phase 3: Sesi 13-16
    [
      // Sesi 13-14: Personal Web CV
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;margin:0;background:#f8faff">
<header style="background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:22px 20px;text-align:center">
  <div style="font-size:52px;margin-bottom:8px">👨‍💻</div>
  <div style="font-size:18px;font-weight:900;margin-bottom:4px">Budi Pratama</div>
  <div style="font-size:12px;opacity:0.8">Siswa Kelas 6 · Calon Web Developer</div>
</header>
<main style="padding:16px">
  <p style="color:#374151;font-size:13px;line-height:1.7;margin:0 0 14px">Halo! Saya Budi, siswa SD yang suka coding. Saya belajar bikin website di CodeKids.</p>
  <div style="font-weight:800;color:#1d4ed8;font-size:13px;margin-bottom:8px">💡 Skill:</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap">
    <span style="background:#eff6ff;color:#2563eb;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700">HTML</span>
    <span style="background:#eff6ff;color:#2563eb;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700">CSS</span>
    <span style="background:#eff6ff;color:#2563eb;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700">Scratch</span>
  </div>
</main>
</body></html>`,
      },
      // Sesi 15: Deploy online
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:24px;background:#f0fdf4;text-align:center">
<div style="font-size:60px;margin-bottom:12px">🌍</div>
<h2 style="color:#15803d;margin:0 0 8px;font-size:18px">Website Kamu Sudah Online!</h2>
<div style="background:#fff;border:2px solid #86efac;border-radius:12px;padding:14px;margin:16px 0;font-family:'Courier New',monospace;font-size:13px;color:#374151;word-break:break-all">
  https://budi-pratama.netlify.app
</div>
<div style="background:#dcfce7;border-radius:12px;padding:12px;font-size:13px;font-weight:700;color:#15803d">✅ URL ini bisa dibuka dari HP siapapun di dunia!</div>
</body></html>`,
      },

      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:24px;background:linear-gradient(135deg,#eff6ff,#faf5ff);text-align:center">
<div style="font-size:56px;margin-bottom:12px">🏆</div>
<div style="font-size:20px;font-weight:900;color:#1d4ed8;margin-bottom:4px">Selamat! Kamu Lulus!</div>
<div style="font-size:13px;font-weight:700;color:#7c3aed;margin-bottom:16px">Web Starter</div>
<div style="background:#fff;border:2px solid #c7d2fe;border-radius:16px;padding:18px">
  <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:6px">Diberikan kepada: <span style="color:#1d4ed8">Budi Pratama</span></div>
  <div style="font-size:12px;color:#64748b;line-height:1.6">Telah menyelesaikan 16 sesi Web Starter dengan karya website online yang bisa diakses siapapun!</div>
</div>
</body></html>`,
      },
    ],
  ],

  // Web Architect (3)
  3: [
    // Phase 0: Layout
    [
      // Sesi 1: Review fondasi
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;margin:0;background:#faf5ff">
<header style="background:#7c3aed;color:#fff;padding:14px 18px;font-weight:800;font-size:15px">⚡ Portfolio — Budi Pratama</header>
<main style="padding:18px">
  <h2 style="color:#7c3aed;margin:0 0 8px">Halo, aku Budi! 👋</h2>
  <p style="color:#475569;line-height:1.7;font-size:13px;margin:0 0 14px">Ini halaman portfolioku. Dibikin pakai HTML dan CSS yang sudah aku perkuat ulang di sesi review ini.</p>
  <button style="background:#7c3aed;color:#fff;padding:10px 20px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px">Lihat Karyaku →</button>
</main>
</body></html>`,
      },
      // Sesi 2: Flexbox Row
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#7c3aed;margin:0 0 14px;font-size:15px">📐 Flexbox — display:flex</h2>
<div style="display:flex;gap:10px">
  <div style="flex:1;background:#f3e8ff;border-radius:14px;padding:16px;text-align:center">
    <div style="font-size:30px">🏠</div>
    <div style="font-weight:700;color:#7c3aed;font-size:12px;margin-top:6px">Beranda</div>
  </div>
  <div style="flex:1;background:#ede9fe;border-radius:14px;padding:16px;text-align:center">
    <div style="font-size:30px">💼</div>
    <div style="font-weight:700;color:#7c3aed;font-size:12px;margin-top:6px">Portfolio</div>
  </div>
  <div style="flex:1;background:#ddd6fe;border-radius:14px;padding:16px;text-align:center">
    <div style="font-size:30px">📞</div>
    <div style="font-weight:700;color:#7c3aed;font-size:12px;margin-top:6px">Kontak</div>
  </div>
</div>
<div style="margin-top:14px;background:#faf5ff;padding:10px 14px;border-radius:8px;font-size:12px;color:#6d28d9;font-weight:600">✅ Ketiga kotak sejajar otomatis pakai <code>display:flex</code></div>
</body></html>`,
      },
      // Sesi 3: Flex Wrap Gallery
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#7c3aed;margin:0 0 12px;font-size:15px">🖼️ Galeri Foto — flex-wrap:wrap</h2>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  <div style="width:calc(33% - 6px);height:78px;background:linear-gradient(135deg,#f3e8ff,#ddd6fe);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:34px">🌅</div>
  <div style="width:calc(33% - 6px);height:78px;background:linear-gradient(135deg,#ede9fe,#c4b5fd);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:34px">🏔️</div>
  <div style="width:calc(33% - 6px);height:78px;background:linear-gradient(135deg,#ddd6fe,#a78bfa);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:34px">🌊</div>
  <div style="width:calc(33% - 6px);height:78px;background:linear-gradient(135deg,#f3e8ff,#ddd6fe);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:34px">🌺</div>
  <div style="width:calc(33% - 6px);height:78px;background:linear-gradient(135deg,#ede9fe,#c4b5fd);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:34px">🦋</div>
  <div style="width:calc(33% - 6px);height:78px;background:linear-gradient(135deg,#ddd6fe,#a78bfa);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:34px">🐬</div>
</div>
<div style="margin-top:10px;font-size:11px;color:#94a3b8;font-weight:600">↑ <code>flex-wrap:wrap</code> bikin foto pindah baris otomatis saat layar kecil</div>
</body></html>`,
      },
      // Sesi 4: Responsive
      {
        t: 'web',
        html: `<!DOCTYPE html><html><head><style>
.box{display:flex;gap:10px;flex-wrap:wrap}
.item{flex:1;min-width:100px;background:#f3e8ff;border-radius:12px;padding:16px;text-align:center;font-weight:700;color:#7c3aed;font-size:12px;border:2px solid #e9d5ff}
</style></head><body style="font-family:sans-serif;padding:20px;background:#fff">
<h2 style="color:#7c3aed;margin:0 0 14px;font-size:15px">📱 Responsive Design — Media Query</h2>
<div class="box">
  <div class="item">📱<br><br>HP<br><span style="font-size:10px;color:#94a3b8">max-width:640px</span></div>
  <div class="item">💻<br><br>Laptop<br><span style="font-size:10px;color:#94a3b8">max-width:1024px</span></div>
  <div class="item">🖥️<br><br>Desktop<br><span style="font-size:10px;color:#94a3b8">1024px ke atas</span></div>
</div>
<div style="margin-top:12px;background:#faf5ff;padding:10px 14px;border-radius:8px;font-size:12px;color:#6d28d9;font-weight:600">✅ Layout otomatis menyesuaikan ukuran layar!</div>
</body></html>`,
      },
    ],
    // Phase 1: JavaScript
    [
      // Sesi 5: JS Variables
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'node sesi5.js' },
          { c: 'out', t: 'Halo! Namaku JavaScript.' },
          { c: 'out', t: '' },
          { c: 'out', t: 'let nama = "Budi Pratama"' },
          { c: 'out', t: 'const umur = 14' },
          { c: 'out', t: 'let sudahCoding = true' },
          { c: 'blank' },
          { c: 'out', t: 'nama       → Budi Pratama' },
          { c: 'out', t: 'umur       → 14' },
          { c: 'out', t: 'sudahCoding → true' },
          { c: 'blank' },
          { c: 'out', t: '✓ Variabel let dan const berhasil!' },
        ],
      },
      // Sesi 6: Types & String concat
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'node sesi6.js' },
          { c: 'out', t: '=== Tipe Data JavaScript ===' },
          { c: 'out', t: 'typeof 42        → "number"' },
          { c: 'out', t: 'typeof "Halo"    → "string"' },
          { c: 'out', t: 'typeof true      → "boolean"' },
          { c: 'blank' },
          { c: 'out', t: '=== Operasi Matematika ===' },
          { c: 'out', t: '5 + 3  = 8' },
          { c: 'out', t: '10 - 4 = 6' },
          { c: 'out', t: '6 * 7  = 42' },
          { c: 'blank' },
          { c: 'out', t: '=== String Concatenation ===' },
          { c: 'out', t: '"Halo" + " " + "Budi!" → Halo Budi!' },
        ],
      },
      // Sesi 7: DOM Manipulation (INTERACTIVE!)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#fff;text-align:center">
<h2 id="judul" style="color:#7c3aed;margin:0 0 8px;transition:color 0.3s">Teks Ini Bisa Diubah Pakai JS! 🖱️</h2>
<p id="isi" style="color:#64748b;font-size:13px;margin:0 0 20px;transition:all 0.3s">JavaScript mengubah konten HTML langsung lewat DOM.</p>
<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
  <button onclick="document.getElementById('judul').style.color='#dc2626';document.getElementById('isi').textContent='Judul berubah merah! Ini DOM Manipulation.'" style="background:#dc2626;color:#fff;padding:9px 16px;border:none;border-radius:9px;font-weight:700;cursor:pointer;font-size:13px">🔴 Merah</button>
  <button onclick="document.getElementById('judul').style.color='#16a34a';document.getElementById('isi').textContent='Judul berubah hijau! Gampang banget pakai JS.'" style="background:#16a34a;color:#fff;padding:9px 16px;border:none;border-radius:9px;font-weight:700;cursor:pointer;font-size:13px">🟢 Hijau</button>
  <button onclick="document.getElementById('judul').style.color='#2563eb';document.getElementById('isi').textContent='Sekarang biru! document.getElementById().style.color'" style="background:#2563eb;color:#fff;padding:9px 16px;border:none;border-radius:9px;font-weight:700;cursor:pointer;font-size:13px">🔵 Biru</button>
  <button onclick="document.getElementById('judul').style.color='#7c3aed';document.getElementById('isi').textContent='JavaScript mengubah konten HTML langsung lewat DOM.'" style="background:#64748b;color:#fff;padding:9px 16px;border:none;border-radius:9px;font-weight:700;cursor:pointer;font-size:13px">↺ Reset</button>
</div>
</body></html>`,
      },
      // Sesi 8: Dark Mode (INTERACTIVE!)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body id="bd" style="font-family:sans-serif;padding:24px;background:#fff;transition:all 0.4s;text-align:center">
<div id="ico" style="font-size:50px;margin-bottom:12px">☀️</div>
<h2 id="h" style="color:#0f172a;transition:color 0.4s;margin:0 0 8px">Light Mode Aktif</h2>
<p id="p" style="color:#475569;font-size:13px;transition:color 0.4s;margin:0 0 20px;line-height:1.6">Tekan tombol untuk ganti tampilan! Ini pakai JavaScript + classList.toggle()</p>
<button id="btn" onclick="var dark=document.getElementById('bd').style.background==='rgb(15, 23, 42)';document.getElementById('bd').style.background=dark?'#fff':'#0f172a';document.getElementById('h').style.color=dark?'#0f172a':'#f1f5f9';document.getElementById('p').style.color=dark?'#475569':'#94a3b8';document.getElementById('ico').textContent=dark?'☀️':'🌙';document.getElementById('h').textContent=dark?'Light Mode Aktif':'Dark Mode Aktif';document.getElementById('btn').style.background=dark?'#7c3aed':'#f1f5f9';document.getElementById('btn').style.color=dark?'#fff':'#0f172a';" style="background:#7c3aed;color:#fff;padding:12px 28px;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;transition:all 0.3s">🌙 Aktifkan Dark Mode</button>
</body></html>`,
      },
    ],
    // Phase 2: Logic
    [
      // Sesi 9: Event Listener (INTERACTIVE!)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#faf5ff">
<h2 style="color:#7c3aed;margin:0 0 14px;font-size:15px">👂 Event Listener — Klik dan Hover</h2>
<div style="display:flex;gap:8px;margin-bottom:14px">
  <button id="b1" style="background:#7c3aed;color:#fff;padding:10px 18px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;flex:1">Klik Aku!</button>
  <button id="b2" style="background:#a855f7;color:#fff;padding:10px 18px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;flex:1">Hover Aku!</button>
</div>
<div id="log" style="background:#fff;border-radius:12px;padding:14px;border:2px solid #e9d5ff;min-height:80px;font-size:13px;color:#374151;line-height:2">
  <span style="color:#94a3b8">Log event akan muncul di sini...</span>
</div>
<script>
var c=0;
document.getElementById('b1').addEventListener('click',function(){
  c++;
  var el=document.getElementById('log');
  if(el.firstChild&&el.firstChild.style&&el.firstChild.style.color==='rgb(148, 163, 184)')el.innerHTML='';
  el.innerHTML+='<div>🖱️ Diklik! (<b>'+c+'x</b> total)</div>';
});
document.getElementById('b2').addEventListener('mouseenter',function(){
  var el=document.getElementById('log');
  if(el.firstChild&&el.firstChild.style&&el.firstChild.style.color==='rgb(148, 163, 184)')el.innerHTML='';
  el.innerHTML+='<div>✋ Mouse masuk ke tombol!</div>';
});
</script>
</body></html>`,
      },
      // Sesi 10: If/Else Validasi (INTERACTIVE!)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#faf5ff">
<h2 style="color:#7c3aed;margin:0 0 14px;font-size:15px">🔀 Validasi Form — If / Else JS</h2>
<label style="display:block;font-weight:700;font-size:13px;color:#374151;margin-bottom:6px">Masukkan password:</label>
<input id="pw" type="password" placeholder="Ketik password di sini..." style="width:100%;padding:10px 14px;border:2px solid #e9d5ff;border-radius:10px;font-size:13px;box-sizing:border-box;margin-bottom:10px;font-family:sans-serif">
<button onclick="var v=document.getElementById('pw').value;var r=document.getElementById('res');if(v.length===0){r.innerHTML='⚠️ Password tidak boleh kosong!';r.style.color='#d97706';r.style.background='#fffbeb';r.style.borderColor='#fef08a';}else if(v.length<8){r.innerHTML='❌ Terlalu pendek! Minimal 8 karakter. (Sekarang: '+v.length+' karakter)';r.style.color='#dc2626';r.style.background='#fff5f5';r.style.borderColor='#fecaca';}else{r.innerHTML='✅ Password aman! ('+v.length+' karakter)';r.style.color='#15803d';r.style.background='#f0fdf4';r.style.borderColor='#86efac';}" style="width:100%;background:#7c3aed;color:#fff;padding:10px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:14px;font-family:sans-serif">Cek Password</button>
<div id="res" style="margin-top:12px;padding:12px 14px;border-radius:10px;font-size:13px;font-weight:700;border:2px solid transparent;min-height:20px;transition:all 0.3s"></div>
</body></html>`,
      },
      // Sesi 11: Array + Loop
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:20px;background:#faf5ff">
<h2 style="color:#7c3aed;margin:0 0 14px;font-size:15px">🔄 Array + For Loop — Render Otomatis</h2>
<div id="list" style="display:flex;flex-direction:column;gap:6px"></div>
<script>
var skills=['HTML & CSS','JavaScript','Flexbox Layout','DOM Manipulation','Event Listener'];
var icons=['🎨','⚡','📐','🖱️','👂'];
var colors=['#f3e8ff','#ede9fe','#ddd6fe','#c4b5fd','#a78bfa'];
var el=document.getElementById('list');
for(var i=0;i<skills.length;i++){
  el.innerHTML+='<div style="background:'+colors[i]+';padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:10px;font-size:13px;font-weight:700;color:#3b0764">'+icons[i]+'<span>'+(i+1)+'. '+skills[i]+'</span></div>';
}
</script>
<div style="margin-top:12px;font-size:12px;color:#94a3b8;font-weight:600">↑ 5 item dirender otomatis oleh for loop — tanpa ditulis manual satu-satu!</div>
</body></html>`,
      },
      // Sesi 12: classList toggle (INTERACTIVE!)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><head><style>
body{font-family:sans-serif;padding:20px;background:#fff}
.item{padding:12px 16px;border-radius:12px;border:2px solid #e9d5ff;background:#faf5ff;cursor:pointer;margin-bottom:8px;font-weight:700;color:#374151;font-size:13px;transition:all 0.25s;display:flex;align-items:center;gap:10px;user-select:none}
.item.active{background:#7c3aed;color:#fff;border-color:#7c3aed;transform:translateX(8px)}
</style></head><body>
<h2 style="color:#7c3aed;margin:0 0 6px;font-size:15px">🎭 classList.toggle() — Klik untuk pilih</h2>
<p style="color:#94a3b8;font-size:12px;font-weight:600;margin:0 0 14px">Klik mata pelajaran favoritmu:</p>
<div class="item" onclick="this.classList.toggle('active')"><span>📚</span> Matematika</div>
<div class="item" onclick="this.classList.toggle('active')"><span>🔬</span> IPA</div>
<div class="item" onclick="this.classList.toggle('active')"><span>🌍</span> IPS</div>
<div class="item" onclick="this.classList.toggle('active')"><span>💻</span> Informatika / Coding</div>
</body></html>`,
      },
    ],
    // Phase 3: Final
    [
      // Sesi 13-15: To-Do List App (INTERACTIVE!)
      {
        t: 'web',
        html: `<!DOCTYPE html><html><head><style>
body{font-family:sans-serif;margin:0;background:#faf5ff}
.done{opacity:0.45;text-decoration:line-through}
</style></head><body>
<div style="background:#7c3aed;color:#fff;padding:14px 18px;font-weight:800;font-size:15px">📝 To-Do List App — Final Project</div>
<div style="padding:16px">
  <div style="display:flex;gap:8px;margin-bottom:14px">
    <input id="inp" placeholder="Tambah tugas baru..." style="flex:1;padding:9px 12px;border:2px solid #e9d5ff;border-radius:10px;font-size:13px;font-family:sans-serif;outline:none">
    <button onclick="addTask()" style="background:#7c3aed;color:#fff;padding:9px 16px;border:none;border-radius:10px;font-weight:800;cursor:pointer;font-size:15px">+</button>
  </div>
  <div id="lst" style="display:flex;flex-direction:column;gap:6px">
    <div style="padding:10px 14px;border-radius:10px;background:#f3e8ff;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:600;color:#374151;cursor:pointer" onclick="this.classList.toggle('done')"><span>📌 Belajar JavaScript dasar</span><span style="font-size:10px;color:#a78bfa">klik = selesai</span></div>
    <div style="padding:10px 14px;border-radius:10px;background:#f3e8ff;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:600;color:#374151;cursor:pointer" onclick="this.classList.toggle('done')"><span>📌 Belajar DOM Manipulation</span><span style="font-size:10px;color:#a78bfa">klik = selesai</span></div>
  </div>
</div>
<script>
function addTask(){
  var v=document.getElementById('inp').value.trim();
  if(!v)return;
  var d=document.createElement('div');
  d.style.cssText='padding:10px 14px;border-radius:10px;background:#ddd6fe;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:600;color:#374151;cursor:pointer;transition:all 0.2s';
  d.innerHTML='<span>🆕 '+v+'</span><span style="font-size:10px;color:#7c3aed">klik = selesai</span>';
  d.onclick=function(){this.classList.toggle('done')};
  document.getElementById('lst').appendChild(d);
  document.getElementById('inp').value='';
}
</script>
</body></html>`,
      },
      // Sesi 16: Deploy & Showcase
      {
        t: 'web',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:24px;background:linear-gradient(135deg,#faf5ff,#eff6ff);text-align:center">
<div style="font-size:56px;margin-bottom:12px">🏆</div>
<div style="font-size:19px;font-weight:900;color:#7c3aed;margin-bottom:4px">Selamat, Kamu Lulus!</div>
<div style="font-size:12px;font-weight:700;color:#6d28d9;margin-bottom:18px">Web Architect</div>
<div style="background:#fff;border:2px solid #ddd6fe;border-radius:16px;padding:18px">
  <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:6px">Diberikan kepada: <span style="color:#7c3aed">Budi Pratama</span></div>
  <div style="font-size:12px;color:#64748b;line-height:1.6;margin-bottom:14px">Telah menyelesaikan 16 sesi dengan hasil aplikasi web interaktif yang sudah online!</div>
  <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap">
    <span style="background:#f3e8ff;color:#7c3aed;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700">Flexbox ✓</span>
    <span style="background:#f3e8ff;color:#7c3aed;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700">JavaScript ✓</span>
    <span style="background:#f3e8ff;color:#7c3aed;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700">DOM ✓</span>
    <span style="background:#f3e8ff;color:#7c3aed;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700">To-Do App ✓</span>
  </div>
</div>
</body></html>`,
      },
    ],
  ],

  // Python Explorer (4)
  4: [
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi1.py' },
          { c: 'out', t: 'Halo, Dunia!' },
          { c: 'out', t: 'Namaku: Budi Pratama' },
          { c: 'out', t: 'Umurku: 14 tahun' },
          { c: 'blank' },
          { c: 'ok', t: '✓ print() dan variabel berhasil!' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi2.py' },
          { c: 'inp', t: 'Masukkan nama kamu: Budi' },
          { c: 'inp', t: 'Masukkan umur kamu: 14' },
          { c: 'blank' },
          { c: 'out', t: 'Halo, Budi!' },
          { c: 'out', t: 'Umurmu: 14 tahun (Integer)' },
          { c: 'out', t: 'Setengah umurmu: 7.0 (Float)' },
          { c: 'ok', t: '✓ input() dan casting berhasil!' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi3.py' },
          { c: 'out', t: '=== Kalkulator Operator ===' },
          { c: 'out', t: '10 + 5  = 15' },
          { c: 'out', t: '10 - 3  = 7' },
          { c: 'out', t: '4  * 6  = 24' },
          { c: 'out', t: '15 / 4  = 3.75' },
          { c: 'out', t: '17 % 5  = 2   ← sisa bagi' },
          { c: 'out', t: '2  ** 8 = 256  ← pangkat' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi4.py' },
          { c: 'inp', t: 'Masukkan angka: 90' },
          { c: 'blank' },
          { c: 'out', t: '90 >= 75  → True' },
          { c: 'out', t: '90 == 100 → False' },
          { c: 'out', t: '90 != 75  → True' },
          { c: 'out', t: '90 > 75   → True' },
          { c: 'ok', t: '✓ Operator perbandingan siap pakai!' },
        ],
      },
    ],
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi5.py' },
          { c: 'inp', t: 'Masukkan nilai ujianmu: 82' },
          { c: 'blank' },
          { c: 'out', t: '--- Proses if/else ---' },
          { c: 'out', t: 'if 82 >= 75:  → True' },
          { c: 'blank' },
          { c: 'ok', t: '✅ LULUS! Selamat, kamu berhasil!' },
          { c: 'out', t: 'Nilai minimum kelulusan: 75' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi6.py' },
          { c: 'inp', t: 'Masukkan nilai rapor: 87' },
          { c: 'blank' },
          { c: 'out', t: 'elif 80 <= nilai < 90:' },
          { c: 'ok', t: 'Nilai 87 → Huruf: B 🌟' },
          { c: 'blank' },
          { c: 'out', t: 'Tabel: A(90+) B(80-89) C(70-79) D(60-69) E(<60)' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi7.py' },
          { c: 'out', t: '=== Tabel Perkalian 7 ===' },
          { c: 'out', t: '7 x 1  =  7' },
          { c: 'out', t: '7 x 2  = 14' },
          { c: 'out', t: '7 x 3  = 21' },
          { c: 'out', t: '7 x 4  = 28' },
          { c: 'out', t: '7 x 5  = 35' },
          { c: 'out', t: '... (for loop jalan 10x)' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python rps.py' },
          { c: 'out', t: '=== BATU GUNTING KERTAS ===' },
          { c: 'inp', t: 'Pilihanmu (batu/gunting/kertas): batu' },
          { c: 'blank' },
          { c: 'out', t: 'Komputer pilih: gunting ✂️' },
          { c: 'blank' },
          { c: 'ok', t: '🎉 Kamu MENANG! Batu mengalahkan Gunting!' },
        ],
      },
    ],
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi9.py' },
          { c: 'out', t: '=== Hitung Mundur ===' },
          { c: 'inp', t: 'Mulai dari angka: 5' },
          { c: 'blank' },
          { c: 'out', t: '5... 4... 3... 2... 1...' },
          { c: 'ok', t: '🚀 Liftoff! Program selesai.' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi10.py' },
          { c: 'out', t: '=== Manajemen Daftar Belanja ===' },
          { c: 'out', t: "List awal : ['apel', 'susu', 'roti']" },
          { c: 'out', t: "Tambah    : ['apel', 'susu', 'roti', 'telur']" },
          { c: 'out', t: "Hapus susu: ['apel', 'roti', 'telur']" },
          { c: 'out', t: 'Index ke-0: apel' },
          { c: 'ok', t: '✓ List operations berhasil!' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi11.py' },
          { c: 'out', t: '=== Data Siswa (Dictionary) ===' },
          { c: 'out', t: "{'nama': 'Budi', 'umur': 14, 'kelas': '8A'}" },
          { c: 'blank' },
          { c: 'out', t: 'Nama  : Budi' },
          { c: 'out', t: 'Umur  : 14' },
          { c: 'out', t: 'Kelas : 8A' },
          { c: 'ok', t: '✓ Key-value pairs berhasil diakses!' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi12.py' },
          { c: 'out', t: '=== Fungsi Buatan Sendiri ===' },
          { c: 'out', t: 'def sapa(nama):' },
          { c: 'out', t: '    return "Halo, " + nama + "!"' },
          { c: 'blank' },
          { c: 'out', t: 'sapa("Budi") → Halo, Budi! 👋' },
          { c: 'out', t: 'sapa("Ani")  → Halo, Ani!  👋' },
          { c: 'blank' },
          { c: 'out', t: 'luas_persegi(5)  → 25' },
          { c: 'out', t: 'luas_persegi(12) → 144' },
        ],
      },
    ],
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi13.py' },
          { c: 'out', t: 'import math' },
          { c: 'out', t: 'math.sqrt(144)      → 12.0' },
          { c: 'out', t: 'math.pi             → 3.14159...' },
          { c: 'out', t: 'math.pow(2, 10)     → 1024.0' },
          { c: 'blank' },
          { c: 'out', t: 'import time' },
          { c: 'out', t: 'time.sleep(2) → Program pause 2 detik ⏱️' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python kasir.py' },
          { c: 'out', t: '===== APLIKASI KASIR CodeKids =====' },
          { c: 'inp', t: 'Nama barang: Buku   | Harga: 15000 | Qty: 2' },
          { c: 'inp', t: 'Nama barang: Pensil | Harga:  3000 | Qty: 5' },
          { c: 'inp', t: 'Nama barang: selesai' },
          { c: 'blank' },
          { c: 'out', t: 'Subtotal  : Rp 45.000' },
          { c: 'out', t: 'Diskon 10%: Rp  4.500' },
          { c: 'ok', t: 'TOTAL     : Rp 40.500 ✅' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'python sesi16.py' },
          { c: 'inp', t: 'Masukkan angka: dua' },
          { c: 'blank' },
          { c: 'out', t: 'try:' },
          { c: 'out', t: '    int("dua") → ValueError!' },
          { c: 'out', t: 'except ValueError:' },
          { c: 'ok', t: '    "Input harus berupa angka!" ✅' },
          { c: 'blank' },
          { c: 'out', t: 'Program tidak crash meski ada error 🛡️' },
        ],
      },
    ],
  ],

  // CS Fundamentals (5)
  5: [
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi1.c -o sesi1 && ./sesi1' },
          { c: 'out', t: 'Hello, World!' },
          { c: 'out', t: 'Selamat datang di Bahasa C!' },
          { c: 'blank' },
          { c: 'ok', t: '✓ Program C pertama berhasil dikompilasi!' },
          { c: 'out', t: '(Menggunakan: gcc — GNU C Compiler)' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi2.c -o s && ./s' },
          { c: 'inp', t: 'Masukkan nama: Budi' },
          { c: 'inp', t: 'Masukkan umur: 16' },
          { c: 'blank' },
          { c: 'out', t: '--- Output ---' },
          { c: 'out', t: 'Nama : Budi' },
          { c: 'out', t: 'Umur : 16 tahun' },
          { c: 'ok', t: 'printf & scanf berhasil! ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi3.c -o s && ./s' },
          { c: 'out', t: 'a = 10, b = 3' },
          { c: 'out', t: 'a + b  = 13' },
          { c: 'out', t: 'a - b  = 7' },
          { c: 'out', t: 'a * b  = 30' },
          { c: 'out', t: 'a / b  = 3   ← integer division!' },
          { c: 'out', t: 'a % b  = 1   ← sisa bagi' },
          { c: 'out', t: 'a++    = 11 | a-- = 9' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi4.c -o s && ./s' },
          { c: 'inp', t: 'Masukkan nilai: 78' },
          { c: 'blank' },
          { c: 'ok', t: '78 >= 75 → LULUS ✅' },
          { c: 'blank' },
          { c: 'out', t: '(5>3) && (2<4) → 1 (True)' },
          { c: 'out', t: '(1>5) || (2<4) → 1 (True)' },
          { c: 'out', t: '!(5>3)         → 0 (False)' },
        ],
      },
    ],
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi5.c -o s && ./s' },
          { c: 'out', t: '=== MENU PROGRAM ===' },
          { c: 'out', t: '1. Hitung Luas Persegi' },
          { c: 'out', t: '2. Hitung Keliling' },
          { c: 'out', t: '3. Keluar' },
          { c: 'inp', t: 'Pilih menu (1-3): 1' },
          { c: 'inp', t: 'Masukkan sisi: 8' },
          { c: 'ok', t: 'Luas Persegi = 64 ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi6.c -o s && ./s' },
          { c: 'out', t: '=== For Loop di C ===' },
          { c: 'out', t: 'for(i=1; i<=5; i++)' },
          { c: 'blank' },
          { c: 'out', t: 'Baris 1: ⭐' },
          { c: 'out', t: 'Baris 2: ⭐⭐' },
          { c: 'out', t: 'Baris 3: ⭐⭐⭐' },
          { c: 'out', t: 'Baris 4: ⭐⭐⭐⭐' },
          { c: 'out', t: 'Baris 5: ⭐⭐⭐⭐⭐' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi7.c -o s && ./s' },
          { c: 'out', t: '=== While Loop ===' },
          { c: 'out', t: '1  2  3  4  5' },
          { c: 'blank' },
          { c: 'out', t: '=== Do-While (minimal 1x run) ===' },
          { c: 'inp', t: 'Masukkan angka positif: -3' },
          { c: 'out', t: '❌ Harus positif! Ulangi.' },
          { c: 'inp', t: 'Masukkan angka positif: 7' },
          { c: 'ok', t: '✅ Input valid: 7' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi8.c -o s && ./s' },
          { c: 'out', t: '===== KALKULATOR C =====' },
          { c: 'inp', t: 'Angka 1: 25' },
          { c: 'inp', t: 'Operator (+,-,*,/): *' },
          { c: 'inp', t: 'Angka 2: 8' },
          { c: 'blank' },
          { c: 'ok', t: '25 * 8 = 200 ✅' },
          { c: 'inp', t: 'Hitung lagi? (y/n): n' },
          { c: 'out', t: 'Terima kasih! Program selesai.' },
        ],
      },
    ],
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi9.c -o s && ./s' },
          { c: 'inp', t: 'Masukkan 5 nilai: 80 75 90 65 88' },
          { c: 'blank' },
          { c: 'out', t: '=== Hasil Array ===' },
          { c: 'out', t: 'Nilai tertinggi : 90' },
          { c: 'out', t: 'Nilai terendah  : 65' },
          { c: 'ok', t: 'Rata-rata       : 79.6 ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi10.c -o s && ./s' },
          { c: 'out', t: '=== Matriks 3x3 ===' },
          { c: 'out', t: ' 1  2  3' },
          { c: 'out', t: ' 4  5  6' },
          { c: 'out', t: ' 7  8  9' },
          { c: 'blank' },
          { c: 'out', t: '=== Transpose ===' },
          { c: 'out', t: ' 1  4  7' },
          { c: 'out', t: ' 2  5  8' },
          { c: 'out', t: ' 3  6  9' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi11.c -o s && ./s' },
          { c: 'out', t: '=== String di C ===' },
          { c: 'out', t: 'Nama   : "Budi Pratama"' },
          { c: 'out', t: 'strlen → 13 karakter' },
          { c: 'out', t: 'toupper→ "BUDI PRATAMA"' },
          { c: 'out', t: 'strcat → "Budi Pratama S."' },
          { c: 'ok', t: 'strcmp(A,A) → 0 (kedua string sama!) ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi12.c -o s && ./s' },
          { c: 'out', t: '=== Fungsi Faktorial ===' },
          { c: 'out', t: 'faktorial(5) = 120' },
          { c: 'out', t: 'faktorial(7) = 5040' },
          { c: 'blank' },
          { c: 'out', t: '=== Fungsi Luas Lingkaran ===' },
          { c: 'out', t: 'luas(7)  = 153.94' },
          { c: 'ok', t: '✓ Fungsi bisa dipanggil berkali-kali!' },
        ],
      },
    ],
    [
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi13.c -o s && ./s' },
          { c: 'out', t: '=== Demo Pointer ===' },
          { c: 'out', t: 'int x = 42;' },
          { c: 'out', t: 'int *ptr = &x;' },
          { c: 'blank' },
          { c: 'out', t: 'Nilai x    = 42' },
          { c: 'out', t: 'Alamat &x  = 0x7ffd3a2b1c' },
          { c: 'out', t: '*ptr       = 42  ← nilai via pointer' },
          { c: 'ok', t: '*ptr = 99 → x sekarang = 99 ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi14.c -o s && ./s' },
          { c: 'out', t: '=== Struct Siswa ===' },
          { c: 'out', t: 'struct Siswa {' },
          { c: 'out', t: '    char nama[50];' },
          { c: 'out', t: '    int  nis;' },
          { c: 'out', t: '    float nilai;' },
          { c: 'out', t: '};' },
          { c: 'blank' },
          { c: 'ok', t: 'Nama: Budi | NIS: 2024001 | Nilai: 92.5 ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi15.c -o s && ./s' },
          { c: 'out', t: '=== SISTEM INVENTARIS ===' },
          { c: 'out', t: '1. Tambah Barang' },
          { c: 'out', t: '2. Lihat Semua' },
          { c: 'out', t: '3. Cari Barang' },
          { c: 'inp', t: 'Pilih: 2' },
          { c: 'blank' },
          { c: 'out', t: 'ID  Nama         Stok  Harga' },
          { c: 'out', t: '001 Buku Tulis   50    Rp5.000' },
          { c: 'ok', t: '002 Pensil 2B    120   Rp2.500 ✓' },
        ],
      },
      {
        t: 'term',
        lines: [
          { c: 'cmd', t: 'gcc sesi16.c -o s && ./s' },
          { c: 'ok', t: 'Selamat! Kamu telah menguasai Bahasa C:' },
          { c: 'ok', t: '✅ Sintaks dan kompilasi' },
          { c: 'ok', t: '✅ Array, String, Fungsi' },
          { c: 'ok', t: '✅ Pointer dan Struct' },
          { c: 'ok', t: '✅ Final Project Inventaris' },
          { c: 'blank' },
          {
            c: 'out',
            t: '🎓 Next step: C++, Arduino, atau Competitive Programming!',
          },
        ],
      },
    ],
  ],
};

// ── DATA ──
const DATA = [
  {
    e: '🎨',
    name: 'Little Animator',
    sub: 'Scratch · TK dan SD Kelas 1 hingga 3',
    ctype: 'scratch',
    g: 'linear-gradient(135deg,#f97316,#fb923c,#fbbf24)',
    c: '#f97316',
    cl: 'rgba(249,115,22,0.12)',
    cb: '#fff7ed',
    ct: '#ea580c',
    stats: [
      { n: '16', l: 'Sesi' },
      { n: '4', l: 'Fase' },
      { n: '2', l: 'Project' },
      { n: 'TK hingga 3SD', l: 'Jenjang' },
    ],
    skills: [
      'Scratch IDE',
      'Animasi Karakter',
      'Koordinat X Y',
      'Looping',
      'Events',
      'Paint Editor',
      'Backdrops',
      'Sensing',
      'Efek Visual',
      'Storyboarding',
    ],
    phases: [
      {
        name: 'Pengenalan dan Gerak Dasar',
        range: 'Sesi 1 hingga 4',
        sessions: [
          {
            n: 'Sesi 1',
            i: '🐾',
            d: 'Berkenalan dengan tampilan Scratch, cara pindahin karakter pakai blok Move, dan arah dasar: atas, bawah, kiri, kanan.',
            b: '🏁 Coding perdana!',
          },
          {
            n: 'Sesi 2',
            i: '🎭',
            d: 'Belajar blok Looks dan Sound. Anak ganti kostum karakter satu per satu sehingga terlihat seolah sedang berjalan.',
          },
          {
            n: 'Sesi 3',
            i: '🖌️',
            d: 'Eksplorasi Paint Editor Scratch. Anak menggambar dan mewarnai karakter mereka sendiri dari nol.',
          },
          {
            n: 'Sesi 4',
            i: '🚩',
            d: 'Events dasar: When Green Flag Clicked (mulai program) dan When Space Pressed (aksi saat tombol ditekan).',
          },
        ],
      },
      {
        name: 'Logika Looping dan Mini Project',
        range: 'Sesi 5 hingga 8',
        sessions: [
          {
            n: 'Sesi 5',
            i: '🔁',
            d: 'Looping: Forever (gerak selamanya) dan Repeat (ulangi beberapa kali). Bikin animasi yang jalan terus tanpa henti.',
          },
          {
            n: 'Sesi 6',
            i: '💬',
            d: 'Blok Say dan Wait buat bikin dialog antar dua karakter. Belajar timing kapan bicara, kapan berhenti.',
          },
          {
            n: 'Sesi 7 dan 8',
            i: '💌',
            d: 'Mini Project: kartu ucapan animasi (ulang tahun, hari raya) atau komik digital 1 halaman.',
            b: '🎁 Mini Project!',
          },
        ],
      },
      {
        name: 'Lingkungan dan Interaksi',
        range: 'Sesi 9 hingga 12',
        sessions: [
          {
            n: 'Sesi 9',
            i: '🖼️',
            d: 'Backdrops: cara ganti latar dari taman ke kota, dari siang ke malam untuk membangun adegan cerita.',
          },
          {
            n: 'Sesi 10',
            i: '🖱️',
            d: 'Sensing dasar: deteksi kalau karakter menyentuh pointer mouse atau tepian layar.',
          },
          {
            n: 'Sesi 11',
            i: '🛹',
            d: 'Glide (gerak mulus) dan bikin karakter ngikutin kursor mouse ke mana pun bergerak.',
          },
          {
            n: 'Sesi 12',
            i: '👻',
            d: 'Efek visual: Color Effect dan Ghost Effect untuk transisi keren.',
          },
        ],
      },
      {
        name: 'Final Project',
        range: 'Sesi 13 hingga 16',
        sessions: [
          {
            n: 'Sesi 13',
            i: '📋',
            d: 'Storyboarding: rencanain cerita di kertas dulu, tokoh, latar, alur, sebelum mulai coding.',
          },
          {
            n: 'Sesi 14 dan 15',
            i: '🎬',
            d: 'Final Project: cerita interaktif panjang atau game klik karakter sederhana.',
            b: '🚀 Final Project!',
          },
          {
            n: 'Sesi 16',
            i: '🏆',
            d: 'Showcase: presentasi proyek ke orang tua dan teman.',
            b: '🏆 Showcase!',
          },
        ],
      },
    ],
  },
  {
    e: '🎮',
    name: 'Game Creator',
    sub: 'Scratch Lanjut · SD Kelas 4 hingga 6',
    ctype: 'scratch',
    g: 'linear-gradient(135deg,#16a34a,#22c55e,#86efac)',
    c: '#16a34a',
    cl: 'rgba(34,197,94,0.12)',
    cb: '#f0fdf4',
    ct: '#15803d',
    stats: [
      { n: '16', l: 'Sesi' },
      { n: '4', l: 'Fase' },
      { n: '2', l: 'Game Project' },
      { n: '4 hingga 6 SD', l: 'Jenjang' },
    ],
    skills: [
      'Koordinat X Y',
      'If Then Logic',
      'Sensing Lanjut',
      'Gravitasi Buatan',
      'Variabel',
      'Skor dan Timer',
      'Broadcast',
      'Cloning',
      'Random Values',
      'Debugging',
    ],
    phases: [
      {
        name: 'Mekanik Game Dasar',
        range: 'Sesi 1 hingga 4',
        sessions: [
          {
            n: 'Sesi 1',
            i: '🧭',
            d: 'Review sistem koordinat (X, Y) dan rotasi derajat, fondasi buat bikin karakter bergerak ke arah yang tepat.',
          },
          {
            n: 'Sesi 2',
            i: '🔀',
            d: 'Logika If Then: Jika tombol panah kanan ditekan maka karakter gerak ke kanan. Ini otak utama dari setiap game!',
          },
          {
            n: 'Sesi 3',
            i: '🎯',
            d: 'Sensing lanjut: deteksi sentuhan pada warna tertentu dan ukur jarak antar dua objek.',
          },
          {
            n: 'Sesi 4',
            i: '🍎',
            d: 'Mekanik gravitasi buatan: karakter melompat ke atas lalu turun perlahan, mensimulasikan fisika nyata.',
          },
        ],
      },
      {
        name: 'Variabel dan Mini Project',
        range: 'Sesi 5 hingga 8',
        sessions: [
          {
            n: 'Sesi 5',
            i: '💯',
            d: 'Variabel sebagai kotak penyimpan angka. Bikin sistem Skor yang nambah setiap kali pemain berhasil.',
          },
          {
            n: 'Sesi 6',
            i: '⏳',
            d: 'Variabel lanjutan: Nyawa HP (berkurang saat kena musuh) dan Timer (hitung mundur).',
          },
          {
            n: 'Sesi 7 dan 8',
            i: '🧺',
            d: 'Mini Project: Game Catching Object, tangkap apel jatuh pakai keranjang, sudah ada skor dan timer!',
            b: '🕹️ Mini Project!',
          },
        ],
      },
      {
        name: 'Game Tingkat Lanjut',
        range: 'Sesi 9 hingga 12',
        sessions: [
          {
            n: 'Sesi 9',
            i: '📡',
            d: 'Broadcast pesan: cara ngirim sinyal ke semua sprite sekaligus untuk pindah Level 1 ke Level 2 otomatis.',
          },
          {
            n: 'Sesi 10',
            i: '📺',
            d: 'Bikin layar Start, layar Win, dan layar Game Over.',
          },
          {
            n: 'Sesi 11',
            i: '👯',
            d: 'Fitur Cloning: gandain satu sprite jadi banyak salinan, efisien untuk bikin banyak musuh sekaligus.',
          },
          {
            n: 'Sesi 12',
            i: '🔫',
            d: 'Mekanik Menembak (Shooting): Bikin karakter bisa nembak peluru (laser) pakai fitur Cloning. Kalau peluru kena musuh, musuhnya hancur!',
          },
        ],
      },
      {
        name: 'Final Project',
        range: 'Sesi 13 hingga 16',
        sessions: [
          {
            n: 'Sesi 13',
            i: '🏞️',
            d: 'Scrolling Background: Bikin latar belakang yang bergerak terus menerus seolah karakter sedang berlari atau terbang jauh.',
          },
          {
            n: 'Sesi 14 dan 15',
            i: '🚀',
            d: 'Game Utama, pilih: (1) Game Labirin berlevel, (2) Platformer ala Mario, atau (3) Space Shooter.',
            b: '🚀 Final Project!',
          },
          {
            n: 'Sesi 16',
            i: '🏆',
            d: 'Debugging bersama, Showcase proyek, dan kompetisi skor tertinggi antar siswa!',
            b: '🏆 Showcase!',
          },
        ],
      },
    ],
  },
  {
    e: '🌐',
    name: 'Web Starter',
    sub: 'HTML dan CSS · SD Kelas 5 hingga SMP',
    ctype: 'web',
    g: 'linear-gradient(135deg,#2563eb,#3b82f6,#93c5fd)',
    c: '#2563eb',
    cl: 'rgba(59,130,246,0.12)',
    cb: '#eff6ff',
    ct: '#1d4ed8',
    stats: [
      { n: '16', l: 'Sesi' },
      { n: '4', l: 'Fase' },
      { n: '1 URL', l: 'Web Online!' },
      { n: '5SD hingga SMP', l: 'Jenjang' },
    ],
    skills: [
      'HTML Tags',
      'Semantic HTML',
      'Tabel HTML',
      'Form HTML',
      'CSS Dasar',
      'Box Model',
      'Class dan ID',
      'Google Fonts',
      'Hover Effect',
      'GitHub Pages',
    ],
    phases: [
      {
        name: 'Struktur Web dan HTML',
        range: 'Sesi 1 hingga 4',
        sessions: [
          {
            n: 'Sesi 1',
            i: '📝',
            d: 'Tag dasar HTML: h1 hingga h6 untuk judul dan p untuk paragraf. Anak nulis HTML pertamanya!',
            b: '🏁 HTML pertama!',
          },
          {
            n: 'Sesi 2',
            i: '📋',
            d: 'Format teks: Bold dan Italic. Buat daftar dengan ul (bullet), ol (bernomor), dan li (item).',
          },
          {
            n: 'Sesi 3',
            i: '🖼️',
            d: 'Masukin gambar dari internet (img) dan buat teks yang bisa diklik sebagai tautan (a href).',
          },
          {
            n: 'Sesi 4',
            i: '🏗️',
            d: 'Semantic HTML: header, nav, section, footer agar struktur halaman lebih rapi dan bermakna.',
          },
        ],
      },
      {
        name: 'Data Visual dan Mini Project',
        range: 'Sesi 5 hingga 8',
        sessions: [
          {
            n: 'Sesi 5',
            i: '📊',
            d: 'Tabel data HTML dengan table, tr (baris), dan td (kolom). Berguna untuk jadwal dan data.',
          },
          {
            n: 'Sesi 6',
            i: '🔘',
            d: 'Form interaktif: input teks, radio button, dan tombol submit.',
          },
          {
            n: 'Sesi 7 dan 8',
            i: '📓',
            d: 'Mini Project: web Buku Harian Digital atau Jadwal Pelajaran.',
            b: '📓 Mini Project!',
          },
        ],
      },
      {
        name: 'Mewarnai Web dengan CSS',
        range: 'Sesi 9 hingga 12',
        sessions: [
          {
            n: 'Sesi 9',
            i: '🎨',
            d: 'Pengenalan CSS: beri warna teks, ubah ukuran font, dan pasang font kustom dari Google Fonts.',
          },
          {
            n: 'Sesi 10',
            i: '📦',
            d: 'Box Model: bedain Margin (jarak ke luar), Padding (jarak ke dalam), dan Border (garis pembatas).',
          },
          {
            n: 'Sesi 11',
            i: '🎯',
            d: 'Selektor Class (.nama) dan ID (#nama) untuk styling elemen tertentu secara presisi.',
          },
          {
            n: 'Sesi 12',
            i: '✨',
            d: 'Background image dan efek hover: tampilan berubah halus via CSS transition.',
          },
        ],
      },
      {
        name: 'Final Project',
        range: 'Sesi 13 hingga 16',
        sessions: [
          {
            n: 'Sesi 13 dan 14',
            i: '👨‍💻',
            d: 'Bangun Personal Web CV: Header, Foto Profil, Tabel Skill, Deskripsi diri, dan Form Kontak.',
            b: '🚀 Final Project!',
          },
          {
            n: 'Sesi 15',
            i: '🌍',
            d: 'Online-kan web pakai GitHub Pages atau Netlify. Anak dapat URL asli!',
          },
          {
            n: 'Sesi 16',
            i: '🏆',
            d: 'Showcase: tiap anak buka web mereka di HP pakai URL asli!',
            b: '🌍 Showcase Online!',
          },
        ],
      },
    ],
  },
  {
    e: '⚡',
    name: 'Web Architect',
    sub: 'CSS Lanjut dan JavaScript · SMP dan SMA',
    ctype: 'web',
    g: 'linear-gradient(135deg,#7c3aed,#a855f7,#d8b4fe)',
    c: '#7c3aed',
    cl: 'rgba(168,85,247,0.12)',
    cb: '#faf5ff',
    ct: '#7e22ce',
    stats: [
      { n: '16', l: 'Sesi' },
      { n: '4', l: 'Fase' },
      { n: 'JS App', l: 'Interactive Web' },
      { n: 'SMP dan SMA', l: 'Jenjang' },
    ],
    skills: [
      'Flexbox',
      'Responsive Design',
      'Media Query',
      'JavaScript Dasar',
      'DOM Manipulation',
      'Event Listener',
      'If Else JS',
      'Array dan Loop',
      'classList API',
      'Web Hosting',
    ],
    phases: [
      {
        name: 'Layouting Modern',
        range: 'Sesi 1 hingga 4',
        sessions: [
          {
            n: 'Sesi 1',
            i: '🔧',
            d: 'Review dan penguatan HTML dan CSS dasar, pastiin fondasi kuat sebelum masuk ke teknik lanjut.',
          },
          {
            n: 'Sesi 2',
            i: '📐',
            d: 'Flexbox Bagian 1: sistem layout modern. Row, Column, dan Justify Content.',
          },
          {
            n: 'Sesi 3',
            i: '🖼️',
            d: 'Flexbox Bagian 2: Align Items dan Flex Wrap. Praktik bikin galeri foto yang rapi!',
          },
          {
            n: 'Sesi 4',
            i: '📱',
            d: 'Responsive Design: web otomatis sesuaikan tampilan di HP maupun laptop pakai Media Query.',
          },
        ],
      },
      {
        name: 'Interaktivitas dengan JavaScript',
        range: 'Sesi 5 hingga 8',
        sessions: [
          {
            n: 'Sesi 5',
            i: '🚀',
            d: 'Pertama kali JavaScript! console.log(), variabel dengan let dan const.',
            b: '🏁 JavaScript perdana!',
          },
          {
            n: 'Sesi 6',
            i: '🧮',
            d: 'Tipe data JS: Number, String, Boolean. Operasi matematika dan string concatenation.',
          },
          {
            n: 'Sesi 7',
            i: '🖱️',
            d: 'DOM Manipulation: ubah teks dan warna elemen HTML lewat JavaScript.',
          },
          {
            n: 'Sesi 8',
            i: '🌓',
            d: 'Mini Project: tombol Dark Mode Light Mode.',
            b: '🌙 Dark Mode App!',
          },
        ],
      },
      {
        name: 'Logika Web',
        range: 'Sesi 9 hingga 12',
        sessions: [
          {
            n: 'Sesi 9',
            i: '👂',
            d: 'Event Listener: JavaScript dengerin aksi pengguna, klik, hover, ketikan keyboard.',
          },
          {
            n: 'Sesi 10',
            i: '🔀',
            d: 'If Else di JS. Dipraktikkan: validasi form password minimal 8 karakter.',
          },
          {
            n: 'Sesi 11',
            i: '🔄',
            d: 'Array (daftar data satu variabel) dan For Loop untuk render elemen otomatis.',
          },
          {
            n: 'Sesi 12',
            i: '🎭',
            d: 'Manipulasi class CSS pakai JS (classList.add, .remove, .toggle).',
          },
        ],
      },
      {
        name: 'Final Project',
        range: 'Sesi 13 hingga 16',
        sessions: [
          {
            n: 'Sesi 13 hingga 15',
            i: '📱',
            d: 'Interactive Web App, pilih: Kalkulator, To Do List, atau Quiz interaktif.',
            b: '🚀 Final Project!',
          },
          {
            n: 'Sesi 16',
            i: '🌍',
            d: 'Hosting ke internet, Showcase ke orang tua, evaluasi kode bersama.',
            b: '🌍 Hosting!',
          },
        ],
      },
    ],
  },
  {
    e: '🐍',
    name: 'Python Explorer',
    sub: 'Python · SMP dan SMA',
    ctype: 'terminal',
    g: 'linear-gradient(135deg,#d97706,#f59e0b,#fcd34d)',
    c: '#d97706',
    cl: 'rgba(245,158,11,0.12)',
    cb: '#fffbeb',
    ct: '#b45309',
    stats: [
      { n: '16', l: 'Sesi' },
      { n: '4', l: 'Fase' },
      { n: 'CLI App', l: 'Terminal App' },
      { n: 'SMP dan SMA', l: 'Jenjang' },
    ],
    skills: [
      'print() dan input()',
      'Tipe Data',
      'Casting',
      'Operator',
      'If Elif Else',
      'For Loop',
      'While Loop',
      'List',
      'Dictionary',
      'def (Fungsi)',
      'Module',
      'Error Handling',
    ],
    phases: [
      {
        name: 'Sintaks Dasar Python',
        range: 'Sesi 1 hingga 4',
        sessions: [
          {
            n: 'Sesi 1',
            i: '🐍',
            d: 'Kenalan sama Python: print(), buat variabel, dan aturan penamaan variabel.',
            b: '🏁 Python perdana!',
          },
          {
            n: 'Sesi 2',
            i: '⌨️',
            d: 'Input dari pengguna pakai input(). Tipe data: Integer, String, Float, dan casting.',
          },
          {
            n: 'Sesi 3',
            i: '➕',
            d: 'Operator matematika Python: penjumlahan, pengurangan, perkalian, pembagian, sisa bagi, pangkat.',
          },
          {
            n: 'Sesi 4',
            i: '⚖️',
            d: 'Operator perbandingan: == , !=, >, <. Alat buat pengambilan keputusan program.',
          },
        ],
      },
      {
        name: 'Logika dan Control Flow',
        range: 'Sesi 5 hingga 8',
        sessions: [
          {
            n: 'Sesi 5',
            i: '🔀',
            d: 'If dan else: Jika nilai lebih dari 75 cetak LULUS, kalau tidak cetak TIDAK LULUS.',
          },
          {
            n: 'Sesi 6',
            i: '🚦',
            d: 'Percabangan majemuk elif: konverter nilai rapor (A, B, C, D, E).',
          },
          {
            n: 'Sesi 7',
            i: '🔁',
            d: 'For Loop: lakukan sesuatu berulang dalam jumlah yang ditentukan. Tabel perkalian!',
          },
          {
            n: 'Sesi 8',
            i: '✂️',
            d: 'Mini Project: Game Suit (Batu Gunting Kertas) berbasis terminal dengan library random!',
            b: '✂️ Game RPS!',
          },
        ],
      },
      {
        name: 'Struktur Data dan Looping Lanjut',
        range: 'Sesi 9 hingga 12',
        sessions: [
          {
            n: 'Sesi 9',
            i: '🔄',
            d: 'While Loop: jalan selama kondisi terpenuhi. Break dan continue.',
          },
          {
            n: 'Sesi 10',
            i: '📋',
            d: 'List: simpan banyak data dalam satu variabel. append, remove, akses index.',
          },
          {
            n: 'Sesi 11',
            i: '📖',
            d: 'Dictionary: simpan data Key Value. Contoh: nama, umur, kelas.',
          },
          {
            n: 'Sesi 12',
            i: '🛠️',
            d: 'Bikin Fungsi sendiri pakai def. Kode jadi lebih rapi dan bisa dipakai ulang.',
          },
        ],
      },
      {
        name: 'Final Project',
        range: 'Sesi 13 hingga 16',
        sessions: [
          {
            n: 'Sesi 13',
            i: '📦',
            d: 'Pengenalan Modul bawaan Python: import math, import time.',
          },
          {
            n: 'Sesi 14 dan 15',
            i: '💻',
            d: 'Final Project: Aplikasi Kasir CLI atau Game Text-based RPG!',
            b: '🚀 Final Project!',
          },
          {
            n: 'Sesi 16',
            i: '🛡️',
            d: 'Debugging dan Error Handling (try/except). Diakhiri presentasi proyek!',
            b: '🏆 Presentasi!',
          },
        ],
      },
    ],
  },
  {
    e: '⚙️',
    name: 'CS Fundamentals',
    sub: 'Bahasa C · SMA',
    ctype: 'terminal',
    g: 'linear-gradient(135deg,#dc2626,#ef4444,#fca5a5)',
    c: '#dc2626',
    cl: 'rgba(239,68,68,0.12)',
    cb: '#fff5f5',
    ct: '#b91c1c',
    stats: [
      { n: '16', l: 'Sesi' },
      { n: '4', l: 'Fase' },
      { n: 'Pointer', l: 'Konsep Mendalam' },
      { n: 'SMA', l: 'Jenjang' },
    ],
    skills: [
      'Struktur Program C',
      'printf dan scanf',
      'Tipe Data Ketat',
      'Increment Decrement',
      'if else dan switch',
      'for while do while',
      'Array 1D dan 2D',
      'String di C',
      'Functions',
      'Pointer',
      'Struct',
    ],
    phases: [
      {
        name: 'Dasar Memori dan I O',
        range: 'Sesi 1 hingga 4',
        sessions: [
          {
            n: 'Sesi 1',
            i: '⚙️',
            d: 'Struktur dasar C: include stdio.h, fungsi int main(), dan proses kompilasi.',
            b: '🏁 C perdana!',
          },
          {
            n: 'Sesi 2',
            i: '📥',
            d: 'Tipe data ketat: int, float, char. Input dengan scanf dan output dengan printf.',
          },
          {
            n: 'Sesi 3',
            i: '➕',
            d: 'Operator aritmatika dan Increment (i++) serta Decrement (i--).',
          },
          {
            n: 'Sesi 4',
            i: '🔀',
            d: 'Logika if else dan operator logika: AND (&&), OR (||).',
          },
        ],
      },
      {
        name: 'Control Flow',
        range: 'Sesi 5 hingga 8',
        sessions: [
          {
            n: 'Sesi 5',
            i: '🎛️',
            d: 'Switch Case: alternatif if else yang lebih bersih untuk pilih dari banyak opsi.',
          },
          {
            n: 'Sesi 6',
            i: '🔁',
            d: 'For Loop di C: sintaks lengkap inisialisasi, kondisi, dan increment dalam satu baris.',
          },
          {
            n: 'Sesi 7',
            i: '🔄',
            d: 'While Loop dan Do While Loop. Perbedaan kapan kondisi dicek.',
          },
          {
            n: 'Sesi 8',
            i: '🧮',
            d: 'Mini Project: Kalkulator Fisika Matematika dengan menu yang me-loop.',
            b: '🔢 Kalkulator!',
          },
        ],
      },
      {
        name: 'Array, String dan Functions',
        range: 'Sesi 9 hingga 12',
        sessions: [
          {
            n: 'Sesi 9',
            i: '📊',
            d: 'Array 1 Dimensi: simpan banyak nilai dalam satu variabel. Daftar nilai 30 siswa.',
          },
          {
            n: 'Sesi 10',
            i: '🔲',
            d: 'Array 2 Dimensi: seperti tabel atau matriks dengan baris dan kolom.',
          },
          {
            n: 'Sesi 11',
            i: '📝',
            d: 'String di C adalah array of char. Manipulasi teks pakai library string.h.',
          },
          {
            n: 'Sesi 12',
            i: '🛠️',
            d: 'Bikin Fungsi sendiri: pisahkan kode ke blok yang bisa dipanggil berkali kali.',
          },
        ],
      },
      {
        name: 'Memori Lanjut dan Final Project',
        range: 'Sesi 13 hingga 16',
        sessions: [
          {
            n: 'Sesi 13',
            i: '🎯',
            d: 'Pointer: & (address of) dan * (dereference). Inilah yang bikin C spesial!',
          },
          {
            n: 'Sesi 14',
            i: '📦',
            d: 'Struct: kelompokin berbagai tipe data dalam satu objek. Contoh: struct Siswa.',
          },
          {
            n: 'Sesi 15',
            i: '🗄️',
            d: 'Final Project: Sistem Manajemen Inventaris atau Database Nilai Murid.',
            b: '🚀 Final Project!',
          },
          {
            n: 'Sesi 16',
            i: '🎓',
            d: 'Review keseluruhan dan diskusi next step: C++, Embedded, Competitive Programming!',
            b: '🏆 Presentasi!',
          },
        ],
      },
    ],
  },
];

// ── Render sesi rows ──
function renderSession(s, ci, pi, si, c, cl) {
  return `<div class="srow" onclick="openPreview(${ci},${pi},${si},event)">
    <div class="spreview" style="background:${cl};border-color:${c}40;color:${c}">${s.i}</div>
    <div class="scontent">
      <div class="stag-row">
        <span class="stag-n" style="background:${c}">${s.n}</span>
        ${s.b ? `<span class="sbadge" style="background:${c}">${s.b}</span>` : ''}
      </div>
      <div class="sdesc">${s.d}</div>
    </div>
    <div class="srow-hint">👁️ Lihat Output</div>
  </div>`;
}

// ── Buka modal utama ──
function show(i) {
  const d = DATA[i];
  document.getElementById('mh').style.background = d.g;
  document.getElementById('mEmoji').textContent = d.e;
  document.getElementById('mTitle').textContent = d.name;
  document.getElementById('mSub').textContent = d.sub;

  document.getElementById('mStats').innerHTML = d.stats
    .map(
      (s) =>
        `<div class="mstat"><span class="mstat-n" style="color:${d.c}">${s.n}</span><div class="mstat-l">${s.l}</div></div>`,
    )
    .join('');

  document.getElementById('mBody').innerHTML =
    d.phases
      .map(
        (ph, pi) =>
          `<div class="phase">
        <div class="phase-hd">
          <span class="phase-tag" style="background:${d.c}">Fase ${pi + 1}</span>
          <span class="phase-name">${ph.name}</span>
          <span class="phase-range">${ph.range}</span>
        </div>
        <div class="slist">
          ${ph.sessions.map((s, si) => renderSession(s, i, pi, si, d.c, d.cl)).join('')}
        </div>
      </div>`,
      )
      .join('') +
    `<div class="skills-hd">✨ Skill yang Didapat Anak</div>
     <div class="chips">${d.skills
       .map(
         (s) =>
           `<div class="chip" style="background:${d.cl};border-color:${d.c}40;color:${d.c}">${s}</div>`,
       )
       .join('')}</div>`;

  document.getElementById('ov').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Buka Preview ──
function openPreview(ci, pi, si, e) {
  e.stopPropagation();
  const d = DATA[ci];
  const s = d.phases[pi].sessions[si];
  const pData = PREVIEWS[ci];

  document.getElementById('pTitle').textContent = d.name + ' — ' + s.n;

  // Cek preview per sesi
  let pv = null;
  if (Array.isArray(pData) && pData[pi] && pData[pi][si] !== undefined) {
    pv = pData[pi][si];
  }

  // Tidak ada preview → placeholder
  if (!pv) {
    document.getElementById('pVisual').innerHTML =
      `<div style="background:#f8faff;border:2px dashed #e2e8f0;border-radius:14px;padding:30px;text-align:center;color:#94a3b8">
        <div style="font-size:48px;margin-bottom:12px">📷</div>
        <div style="font-weight:700;font-size:14px;margin-bottom:6px;color:#64748b">Video / Project Segera Hadir</div>
        <div style="font-size:13px;line-height:1.6">Hasil karya Scratch siswa untuk sesi ini sedang disiapkan.</div>
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>Target sesi ini:</strong> ${s.d}`;
    document.getElementById('previewOv').classList.add('open');
    return;
  }

  // Scratch embed — bisa dimainkan langsung!
  if (pv.t === 'scratch') {
    document.getElementById('pVisual').innerHTML =
      `<div style="border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.12)">
        <div style="background:#4d97ff;padding:8px 14px;display:flex;align-items:center;gap:8px">
          <span style="font-size:16px">🐱</span>
          <span style="color:#fff;font-weight:800;font-size:12px">Scratch Project — Bisa Dimainkan!</span>
          <a href="https://scratch.mit.edu/projects/${pv.id}" target="_blank"
             style="margin-left:auto;background:rgba(255,255,255,0.2);color:#fff;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700;text-decoration:none">
            Buka Full ↗
          </a>
        </div>
        <iframe src="https://scratch.mit.edu/projects/${pv.id}/embed"
          allowtransparency="true"
          width="100%" height="340"
          frameborder="0" scrolling="no" allowfullscreen
          style="display:block;background:#fff">
        </iframe>
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>🎮 Project Scratch asli yang dibuat siswa di sesi ini. Klik ▶ untuk mainkan!</strong><br>${s.d}`;

    // YouTube embed
  } else if (pv.t === 'yt') {
    document.getElementById('pVisual').innerHTML =
      `<div style="border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.12)">
        <div style="background:#ff0000;padding:8px 14px;display:flex;align-items:center;gap:8px">
          <span style="font-size:14px">▶️</span>
          <span style="color:#fff;font-weight:800;font-size:12px">Demo Video — ${s.n}</span>
        </div>
        <iframe width="100%" height="260"
          src="https://www.youtube.com/embed/${pv.id}?rel=0"
          frameborder="0" allowfullscreen
          style="display:block">
        </iframe>
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>🎬 Video demo hasil karya siswa di sesi ini.</strong><br>${s.d}`;

    // Web rendered preview
  } else if (pv.t === 'web') {
    document.getElementById('pVisual').innerHTML =
      `<div style="border:1.5px solid #e2e8f0;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
        <div style="background:#f1f5f9;padding:8px 14px;display:flex;align-items:center;gap:8px;border-bottom:1.5px solid #e2e8f0">
          <div style="display:flex;gap:5px">
            <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block"></span>
            <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block"></span>
            <span style="width:11px;height:11px;border-radius:50%;background:#22c55e;display:inline-block"></span>
          </div>
          <span style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:2px 12px;font-size:11px;color:#64748b;font-family:'Courier New',monospace;flex:1">localhost:3000</span>
        </div>
        <iframe srcdoc="${pv.html.replace(/"/g, '&quot;')}" style="width:100%;height:240px;border:none;display:block" sandbox="allow-scripts"></iframe>
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>Ini output nyata yang dibuat anak di sesi ini.</strong><br>${s.d}`;

    // Pinterest Link
  } else if (pv.t === 'pin') {
    document.getElementById('pVisual').innerHTML =
      `<div style="background:#fff1f2;border:2px dashed #fecdd3;border-radius:14px;padding:30px;text-align:center;color:#4c1d95">
        <div style="font-size:48px;margin-bottom:12px">📌</div>
        <div style="font-weight:800;font-size:15px;margin-bottom:6px;color:#e11d48">Foto Karya / Video Tersedia di Pinterest</div>
        <div style="font-size:13px;line-height:1.6;color:#881337;margin-bottom:16px">Dokumentasi hasil karya siswa tersimpan di platform eksternal.</div>
        <a href="${pv.url}" target="_blank"
           style="display:inline-block;background:#e11d48;color:#fff;padding:8px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 4px 12px rgba(225,29,72,0.3)">
           Lihat Dokumentasi ↗
        </a>
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>📸 Dokumentasi karya anak untuk sesi ini.</strong><br>${s.d}`;

    // Direct Image Link
  } else if (pv.t === 'img') {
    document.getElementById('pVisual').innerHTML =
      `<div style="border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.12);background:#f8faff;border:1.5px solid #e2e8f0;display:flex;justify-content:center;align-items:center;padding:15px;min-height:200px">
        <img src="${pv.url}" style="max-width:100%;max-height:280px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);" alt="Preview Gambar" />
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>🖼️ Dokumentasi Visual Sesi Ini.</strong><br>${s.d}`;

    // Terminal simulation
  } else if (pv.t === 'term') {
    const lineHtml = pv.lines
      .map((l) => {
        if (l.c === 'cmd')
          return `<div style="display:flex;gap:8px"><span style="color:#22d3ee">$</span><span style="color:#f1f5f9;font-weight:700">${l.t}</span></div>`;
        if (l.c === 'inp') return `<div style="color:#fbbf24">${l.t}</div>`;
        if (l.c === 'out') return `<div style="color:#94a3b8">${l.t}</div>`;
        if (l.c === 'ok')
          return `<div style="color:#4ade80;font-weight:700">${l.t}</div>`;
        if (l.c === 'blank') return `<div style="height:8px"></div>`;
        return '';
      })
      .join('');
    document.getElementById('pVisual').innerHTML =
      `<div style="background:#0f172a;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.2)">
        <div style="background:#1e293b;padding:8px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #334155">
          <div style="display:flex;gap:5px">
            <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block"></span>
            <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block"></span>
            <span style="width:11px;height:11px;border-radius:50%;background:#22c55e;display:inline-block"></span>
          </div>
          <span style="color:#64748b;font-size:12px;font-family:'Courier New',monospace">Terminal</span>
        </div>
        <div style="padding:18px;font-family:'Courier New',Courier,monospace;font-size:13px;line-height:1.8;min-height:160px">${lineHtml}<span style="display:inline-block;width:8px;height:15px;background:#e2e8f0;animation:blink 1s infinite;vertical-align:middle;margin-left:2px"></span></div>
      </div>`;
    document.getElementById('pDesc').innerHTML =
      `<strong>Ini output terminal nyata yang akan anak lihat di komputernya.</strong><br>${s.d}`;
  }

  document.getElementById('previewOv').classList.add('open');
}

// ── Tutup modal utama ──
function hide() {
  document.getElementById('ov').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Tutup preview ──
function closePreview() {
  document.getElementById('previewOv').classList.remove('open');
}

function bgClick(e) {
  if (e.target === document.getElementById('ov')) hide();
}
function closePreviewBg(e) {
  if (e.target === document.getElementById('previewOv')) closePreview();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('previewOv').classList.contains('open'))
      closePreview();
    else hide();
  }
});
