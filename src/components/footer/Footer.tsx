import Link from "next/link";
import { Brand } from "../brand/Brand";

type Column = {
  id: string;
  title: string;
  tone: "lavender" | "sky" | "lime";
  links: readonly (readonly [href: string, label: string])[];
};

const JALUR: Column = {
  id: "f-jalur",
  title: "Jalur SPMB",
  tone: "lavender",
  links: [
    ["/panduan#domisili", "Jalur Domisili (50%)"],
    ["/panduan#afirmasi", "Jalur Afirmasi (15%)"],
    ["/panduan#prestasi", "Jalur Prestasi (30%)"],
    ["/panduan#mutasi", "Jalur Mutasi Tugas (5%)"],
  ],
};

const panduan = (parent: boolean): Column => ({
  id: "f-panduan",
  title: "Panduan Orang Tua",
  tone: "sky",
  links: [
    ["/panduan#cara-hitung", "Cara Menghitung Peluang"],
    ["/panduan#dokumen", "Syarat Berkas KK & Rapor"],
    parent ? ["/anak-saya", "Data Anak"] : ["/masuk", "Mulai Cek Peluang"],
  ],
});

const LAYANAN: Column = {
  id: "f-layanan",
  title: "Layanan & Privasi",
  tone: "lime",
  links: [
    ["/tanya-jawab", "Tanya Jawab (FAQ)"],
    ["/panduan#privasi", "Kebijakan Privasi Data"],
    ["https://wa.me/", "Hubungi Tim Bantuan"],
  ],
};

/** Footer: kartu merek + tiga kolom berwarna pembeda, lalu bar catatan. Tiap blok punya latar sendiri. */
export function Footer({ parent }: { parent?: boolean }) {
  const columns = [JALUR, panduan(!!parent), LAYANAN];
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__tile footer__tile--brand">
            <Brand href="/" small />
            <p className="footer__about">
              Sistem Informasi Peluang Seleksi Sekolah. Pendamping strategi SPMB untuk orang tua, bukan situs pendaftaran.
            </p>
          </div>
          {columns.map((c) => (
            <nav key={c.id} className={`footer__tile footer__tile--${c.tone}`} aria-labelledby={c.id}>
              <h2 className="footer__heading" id={c.id}>
                <span className="footer__dot" aria-hidden="true" />
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
