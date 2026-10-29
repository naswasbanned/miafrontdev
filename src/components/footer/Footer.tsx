import Link from "next/link";
import { Brand } from "../brand/Brand";

const JALUR = {
  id: "f-jalur",
  title: "Jalur SPMB",
  links: [
    ["/panduan#domisili", "Jalur Domisili (50%)"],
    ["/panduan#afirmasi", "Jalur Afirmasi (15%)"],
    ["/panduan#prestasi", "Jalur Prestasi (30%)"],
    ["/panduan#mutasi", "Jalur Mutasi Tugas (5%)"],
  ],
};

const PANDUAN = {
  id: "f-panduan",
  title: "Panduan Orang Tua",
  links: [
    ["/panduan#cara-hitung", "Cara Menghitung Zonasi Jarak"],
    ["/panduan#dokumen", "Syarat Berkas KK & Rapor"],
    ["/masuk", "Mulai Cek Peluang"],
  ],
};

/** Untuk orang tua yang sudah login: tautan ke 4 tahap, menggantikan tautan "Mulai". */
const AKUN = {
  id: "f-akun",
  title: "Akun Saya",
  links: [
    ["/anak-saya", "Data Anak"],
    ["/peta-sekolah", "Hasil Sekolah"],
    ["/strategi", "Strategi"],
    ["/unduhan", "Dokumen"],
  ],
};

const LAYANAN = {
  id: "f-layanan",
  title: "Layanan & Privasi",
  links: [
    ["/tanya-jawab", "Tanya Jawab (FAQ)"],
    ["/panduan#privasi", "Kebijakan Privasi Data Siswa"],
    ["/panduan#cara-hitung", "Metodologi & Sumber Data"],
    ["https://wa.me/", "Hubungi Tim Bantuan"],
  ],
};

/** Tamu hanya melihat tautan publik; orang tua melihat kolom "Akun Saya". */
export function Footer({ parent }: { parent?: boolean }) {
  const columns = [JALUR, parent ? AKUN : PANDUAN, LAYANAN];
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <Brand href="/" small />
            <p className="footer__about">
              Platform cerdas pendamping strategi SPMB mandiri. Membantu orang tua memilih sekolah dan jalur
              paling realistis dengan tenang.
            </p>
          </div>
          {columns.map((c) => (
            <nav key={c.id} className="footer__col" aria-labelledby={c.id}>
              <h2 className="footer__heading" id={c.id}>
                {c.title}
              </h2>
              <ul className="footer__list">
                {c.links.map(([href, label]) => (
                  <li key={label}>
                    {href.startsWith("http") ? (
                      <a className="footer__link" href={href} target="_blank" rel="noopener">
                        {label}
                      </a>
                    ) : (
                      <Link className="footer__link" href={href}>
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© 2027 SIPESEK — Sistem Informasi Peluang Seleksi Sekolah. Dibuat untuk masa depan anak Indonesia.</span>
          <span>Bukan situs resmi pemerintah. Data berbasis statistik publik.</span>
        </div>
      </div>
    </footer>
  );
}
