import Link from "next/link";
import { Icon } from "../icon/Icon";

const VALUES = [
  {
    className: "landing-value-card--lavender",
    title: "Bahasa\nSehari-hari",
    text: "Istilah seperti KETM, afirmasi, dan domisili selalu dijelaskan dalam satu kalimat.",
    glyph: "/assets/landing-glyph-lavender.svg",
  },
  {
    className: "landing-value-card--sun",
    title: "Sesuai\nKondisi Anak",
    text: "Jalur yang disarankan menyesuaikan nilai rapor, alamat rumah, dan status keluarga.",
    glyph: "/assets/landing-glyph-sun.svg",
  },
  {
    className: "landing-value-card--sky",
    title: "Jujur soal\nPeluang",
    text: "Label Aman, Bersaing, atau Berisiko selalu disertai alasan. Estimasi, bukan jaminan.",
    glyph: "/assets/landing-glyph-sky.svg",
  },
  {
    className: "landing-value-card--lime",
    title: "Progres\nTidak Hilang",
    text: "Isian tersimpan otomatis. Lanjutkan kapan saja, dari HP maupun laptop.",
    glyph: "/assets/landing-glyph-lime.svg",
  },
];

const PATHS = [
  {
    chip: "Paling umum",
    title: "Jalur Domisili",
    description: "Berdasarkan jarak rumah ke sekolah. Paling cocok untuk anak dengan nilai rata-rata.",
    value: "50%",
    note: "dari daya tampung",
    color: "landing-path-card--sky",
    squiggle: "domisili",
  },
  {
    chip: "KETM & disabilitas",
    title: "Jalur Afirmasi",
    description: "Untuk keluarga KETM (tidak mampu) dan anak penyandang disabilitas.",
    value: "15%",
    note: "dari daya tampung",
    color: "landing-path-card--lime",
    squiggle: "afirmasi",
  },
  {
    chip: "Rapor + lomba",
    title: "Jalur Prestasi",
    description: "Gabungan nilai rapor semester 1–5 dan sertifikat lomba akademik maupun non-akademik.",
    value: "30%",
    note: "dari daya tampung",
    color: "landing-path-card--yellow",
    squiggle: "prestasi",
  },
  {
    chip: "Pindah tugas",
    title: "Jalur Mutasi",
    description: "Untuk anak yang orang tuanya pindah tugas, atau anak guru di sekolah tujuan.",
    value: "5%",
    note: "dari daya tampung",
    color: "landing-path-card--lavender",
    squiggle: "mutasi",
  },
];

const FAQS = [
  {
    question: "Apakah hasil prediksi ini menjamin anak pasti diterima?",
    answer:
      "Tidak. Hasil SIPESEK adalah estimasi ilmiah berbasis statistik dari kuota resmi, persebaran jarak, dan nilai seleksi tahun lalu. Hasil ini dirancang sebagai panduan strategi orang tua. Pendaftaran resmi tetap dilakukan melalui portal SPMB Dinas Pendidikan.",
  },
  { question: "Apakah data nilai rapor dan alamat keluarga kami aman?" },
  { question: "Bagaimana jika jarak domisili sama persis dengan siswa pendaftar lainnya?" },
  { question: "Apakah ada biaya untuk menggunakan aplikasi SIPESEK?" },
];

function LandingLogo({ small = false }: { small?: boolean }) {
  return (
    <Link className={`landing-logo${small ? " landing-logo--small" : ""}`} href="/">
      <span className="landing-logo__mark" aria-hidden="true">
        <Icon name="logo" />
      </span>
      <span>Sipesek</span>
    </Link>
  );
}

function LandingButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline" | "white" | "white-outline";
}) {
  return (
    <Link className={`landing-button landing-button--${variant}`} href={href}>
      {children}
    </Link>
  );
}

function CloudEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`landing-cloud-edge${flip ? " landing-cloud-edge--flip" : ""}`} aria-hidden="true">
      <span />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="landing-hero-visual" aria-hidden="true">
      <img className="landing-hero-blob" src="/assets/landing-flower.svg" alt="" />
      <img className="landing-hero-image landing-hero-image--boy" src="/assets/landing-boy.png" alt="" />
      <img className="landing-hero-image landing-hero-image--girl" src="/assets/landing-girl.png" alt="" />
      <img className="landing-hero-image landing-hero-image--school" src="/assets/landing-school.png" alt="" />
      <img className="landing-squiggle landing-squiggle--purple" src="/assets/landing-squiggle-purple.svg" alt="" />
      <img className="landing-squiggle landing-squiggle--yellow" src="/assets/landing-squiggle-yellow.svg" alt="" />
      <div className="landing-stat-card landing-stat-card--domisili">
        <span>Peluang Jalur Domisili</span>
        <strong>92%</strong>
        <i><b /></i>
      </div>
      <div className="landing-stat-card landing-stat-card--prestasi">
        <span>Peluang Jalur Prestasi</span>
        <strong>74%</strong>
        <i><b /></i>
      </div>
    </div>
  );
}

function ValueSection() {
  return (
    <section className="landing-section landing-values">
      <h2>Dibuat untuk orang tua.<br />Jujur soal peluang.</h2>
      <p className="landing-section-intro">Semua dirancang agar memilih sekolah terasa tenang dan masuk akal — dengan angka yang jelas dan penjelasan yang mudah dipahami.</p>
      <div className="landing-value-grid">
        {VALUES.map((item) => (
          <article className={`landing-value-card ${item.className}`} key={item.title}>
            <img className="landing-glyph" src={item.glyph} alt="" aria-hidden="true" />
            <div>
              <h3>{item.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PathsSection() {
  return (
    <section className="landing-section landing-paths">
      <div className="landing-section-heading landing-section-heading--split">
        <div>
          <h2>Jalur mana yang paling<br />cocok untuk anak?</h2>
          <p>Empat jalur SPMB, masing-masing dengan kuota dan syarat sendiri. Sipesek mencocokkan kondisi anak dengan jalur yang paling realistis.</p>
        </div>
        <Link className="landing-inline-link" href="/panduan#jalur">Panduan Lengkap ↗</Link>
      </div>
      <div className="landing-path-grid">
        {PATHS.map((path) => (
          <article className="landing-path-card" key={path.title}>
            <span className="landing-chip">{path.chip}</span>
            <h3>{path.title}</h3>
            <p>{path.description}</p>
            <div className={`landing-path-visual ${path.color}`}>
              <strong>{path.value}</strong>
              <img className={`landing-path-squiggle landing-path-squiggle--${path.squiggle}`} src={`/assets/landing-squiggle-${path.squiggle}.svg`} alt="" aria-hidden="true" />
              <small>{path.note}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const STRATEGY_STEPS = [
  { title: "Nilai rapor rata-rata", accent: "Peluang terbaik lewat Jalur Domisili", chips: ["Jarak rumah ke sekolah", "Titik rumah di peta", "Alamat sesuai KK"], icon: "/assets/landing-icon-home.svg", color: "sky" },
  { title: "Keluarga KETM", accent: "Lebih aman lewat Jalur Afirmasi", chips: ["Kartu KIP / PKH", "Terdaftar di DTKS", "Penyandang disabilitas"], icon: "/assets/landing-icon-heart.svg", color: "lime" },
  { title: "Anak berprestasi", accent: "Pertimbangkan Jalur Prestasi", chips: ["Rapor semester 1–5", "Sertifikat lomba", "Akademik & non-akademik"], icon: "/assets/landing-icon-trophy.svg", color: "yellow" },
];

function StrategySection() {
  return (
    <section className="landing-section landing-strategy">
      <div className="landing-strategy-copy">
        <h2>Strategi yang tepat untuk setiap anak.</h2>
        <p>Setiap anak punya kondisi berbeda. Sipesek membaca nilai rapor, alamat, dan status keluarga, lalu menunjukkan jalur dengan peluang paling besar.</p>
        <LandingButton href="/masuk">Temukan Jalur Terbaik Anak</LandingButton>
      </div>
      <div className="landing-timeline">
        <div className="landing-timeline-line" aria-hidden="true" />
        {STRATEGY_STEPS.map((step) => (
          <article className="landing-timeline-step" key={step.title}>
            <span className="landing-timeline-dot" aria-hidden="true" />
            <div className="landing-timeline-content">
              <h3>{step.title}</h3>
              <h4>{step.accent}</h4>
              <div className="landing-timeline-chips">
                {step.chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            </div>
            <span className={`landing-timeline-icon landing-timeline-icon--${step.color}`} aria-hidden="true"><img src={step.icon} alt="" /></span>
          </article>
        ))}
      </div>
    </section>
  );
}

function DataSection() {
  return (
    <section className="landing-section landing-data">
      <div className="landing-data-card">
        <img src="/assets/landing-school-photo.png" alt="Gedung sekolah dan halaman hijau" />
        <div className="landing-data-copy">
          <h2>Dihitung dari data, dijelaskan dengan bahasa sehari-hari.</h2>
          <p>Peluang dihitung dari hasil seleksi SPMB tahun lalu, daya tampung setiap sekolah, dan jarak rumah. Setiap angka disertai alasan yang bisa dibaca orang tua.</p>
          <h3>Data Dinas Pendidikan</h3>
          <span>Hasil seleksi resmi SPMB 2026 • diperbarui setiap siklus</span>
          <div className="landing-highlight">Hasil adalah estimasi berdasarkan data tahun lalu, bukan jaminan diterima.</div>
          <div className="landing-data-stats">
            <div><strong>142</strong><span><i />SMA/SMK Negeri</span></div>
            <div><strong>48.500+</strong><span><i />Kursi tersedia</span></div>
            <div><strong>8 menit</strong><span><i />Rata-rata pengisian</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="landing-section landing-testimonials">
      <div className="landing-centered-heading">
        <h2>Cerita nyata dari orang tua.</h2>
        <p>Bagaimana Sipesek membantu keluarga menentukan strategi pendaftaran dengan tenang dan terencana.</p>
      </div>
      <div className="landing-testimonial-grid">
        <article className="landing-testimonial landing-testimonial--orange">
          <div><span className="landing-testimonial-dots">••</span><blockquote>“Awalnya kami bingung antara zonasi atau prestasi. Setelah cek di Sipesek, jarak rumah ternyata sangat aman di SMAN 5. Anak kami jadi bisa fokus belajar dengan tenang tanpa cemas.”</blockquote></div>
          <footer><span><strong>Ibu Sari M.</strong><small>Orang tua Dika, SMPN 1 (Diterima SMAN 5)</small></span><b>↗</b></footer>
        </article>
        <article className="landing-testimonial landing-testimonial--white">
          <div><span className="landing-testimonial-dots">••</span><blockquote>“Fitur simulasi cadangannya luar biasa. Kami jadi punya rencana B ke sekolah swasta terdekat tanpa panik sedikit pun saat hari pengumuman kelulusan tiba.”</blockquote></div>
          <footer><span><strong>Pak Budi S.</strong><small>Orang tua Rian, SMPN 3 (Diterima SMAN 2)</small></span><b>↗</b></footer>
        </article>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="landing-section landing-faq">
      <div className="landing-centered-heading">
        <h2>Pertanyaan yang sering<br />diajukan.</h2>
        <p>Segala hal tentang cara kerja prediksi, keamanan data, dan metodologi seleksi.</p>
      </div>
      <div className="landing-faq-list">
        {FAQS.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>{faq.question}<span aria-hidden="true">{index === 0 ? "−" : "+"}</span></summary>
            {faq.answer && <p>{faq.answer}</p>}
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="landing-cta-wrap">
      <div className="landing-cta">
        <img className="landing-cta-image landing-cta-image--boy" src="/assets/landing-cta-boy.png" alt="" aria-hidden="true" />
        <img className="landing-cta-image landing-cta-image--girl" src="/assets/landing-cta-girl.png" alt="" aria-hidden="true" />
        <div className="landing-cta-content">
          <h2>Beri masa depan anak<br />ruang untuk bertumbuh.</h2>
          <p>Hanya butuh 8 menit. Dapatkan gambaran peluang yang jelas dan tenang menyambut masa SPMB 2027/2028.</p>
          <div>
            <LandingButton href="/masuk" variant="white">Mulai Cek Peluang Gratis</LandingButton>
            <LandingButton href="/panduan" variant="white-outline">Pelajari Panduan Jalur</LandingButton>
          </div>
        </div>
        <div className="landing-cta-cloud" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </div>
    </section>
  );
}

function LandingFooter() {
  const columns = [
    ["Jalur SPMB", "Jalur Domisili (50%)", "Jalur Afirmasi (15%)", "Jalur Prestasi (30%)", "Jalur Mutasi Tugas (5%)"],
    ["Panduan Orang Tua", "Cara Menghitung Zonasi Jarak", "Syarat Berkas KK & Rapor", "Simulasi Peluang Kelulusan", "Daftar Sekolah Cadangan Swasta"],
    ["Layanan & Privasi", "Tanya Jawab (FAQ)", "Kebijakan Privasi Data Siswa", "Metodologi & Sumber Data", "Hubungi Tim Bantuan"],
  ];
  return (
    <footer className="landing-footer">
      <div className="landing-footer-columns">
        <div className="landing-footer-brand">
          <LandingLogo small />
          <p>Platform cerdas pendamping strategi SPMB mandiri. Membantu orang tua memilih sekolah dan jalur paling realistis dengan tenang.</p>
        </div>
        {columns.map(([heading, ...links]) => (
          <nav key={heading} aria-label={heading}>
            <h2>{heading}</h2>
            {links.map((link) => <Link href="/panduan" key={link}>{link}</Link>)}
          </nav>
        ))}
      </div>
      <div className="landing-footer-bottom">
        <span>© 2027 SIPESEK — Sistem Informasi Peluang Seleksi Sekolah. Dibuat untuk masa depan anak Indonesia.</span>
        <span>Bukan situs resmi pemerintah. Data berbasis statistik publik.</span>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-sheet">
        <header className="landing-navbar-wrap">
          <div className="landing-navbar">
            <LandingLogo />
            <nav aria-label="Utama">
              <Link className="is-active" href="/">Beranda</Link>
              <Link href="/panduan">Panduan Jalur</Link>
              <Link href="/peta-sekolah">Peta Sekolah</Link>
              <Link href="/tanya-jawab">Tanya Jawab</Link>
            </nav>
            <div className="landing-navbar-actions">
              <Link className="landing-search" href="/peta-sekolah" aria-label="Cari sekolah"><Icon name="search" /></Link>
              <LandingButton href="/masuk" variant="outline">Mulai Cek Peluang</LandingButton>
            </div>
          </div>
        </header>

        <main>
          <section className="landing-hero">
            <div className="landing-hero-copy">
              <span className="landing-eyebrow"><i />SPMB SMA/SMK Negeri 2027/2028</span>
              <h1><em>Peluang lolos</em><span>dimulai dari pilihan yang tepat.</span></h1>
              <p>Hitung peluang anak diterima di SMA/SMK Negeri untuk setiap jalur SPMB — domisili, afirmasi, prestasi, dan mutasi — lalu dapatkan urutan pilihan sekolah yang realistis.</p>
              <div className="landing-hero-actions">
                <LandingButton href="/masuk">Mulai Cek Peluang</LandingButton>
                <LandingButton href="#cara-kerja" variant="outline">Lihat Cara Kerja</LandingButton>
              </div>
              <small className="landing-trust">Gratis&nbsp; • &nbsp;Berdasarkan data seleksi resmi tahun lalu&nbsp; • &nbsp;Isian tersimpan otomatis</small>
            </div>
            <HeroVisual />
          </section>
          <ValueSection />
          <CloudEdge />
          <PathsSection />
          <CloudEdge flip />
          <section id="cara-kerja"><StrategySection /></section>
          <DataSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaSection />
          <LandingFooter />
        </main>
      </div>
    </div>
  );
}
