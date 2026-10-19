import Link from "next/link";
import { Icon } from "../icon/Icon";

const COLUMNS = [
  {
    id: "f-panduan",
    title: "Panduan",
    links: [
      ["/panduan#jalur", "Jalur pendaftaran"],
      ["/panduan#cara-hitung", "Cara peluang dihitung"],
      ["/panduan#privasi", "Privasi data"],
    ],
  },
  {
    id: "f-bantuan",
    title: "Bantuan",
    links: [
      ["/tanya-jawab", "Tanya jawab"],
      ["/masuk", "Masuk atau daftar"],
    ],
  },
  {
    id: "f-dinas",
    title: "Untuk dinas pendidikan",
    links: [
      ["/kebijakan-ringkasan", "Dashboard kebijakan"],
      ["/admin-aturan", "Panel admin"],
    ],
  },
];

/** Footer seimbang: merek di tengah, tiga kolom tautan merata, catatan resmi, lalu baris hak cipta. */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <span className="footer__brand">
            <span className="footer__logo" aria-hidden="true">
              <Icon name="logo" />
            </span>
            SIPESEK
          </span>
          <p className="footer__about">
            SIPESEK (Sistem Pendaftaran Sekolah) membantu orang tua memahami PPDB SMA/SMK Negeri dengan bahasa yang
            mudah dan data yang jujur.
          </p>
        </div>
        <div className="footer__grid">
          {COLUMNS.map((c) => (
            <nav key={c.id} aria-labelledby={c.id}>
              <h2 className="footer__heading" id={c.id}>
                {c.title}
              </h2>
              <ul className="footer__list">
                {c.links.map(([href, label]) => (
                  <li key={href}>
                    <Link className="footer__link" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="footer__notice">
          <Icon name="info" className="icon icon--sm" />
          <span>
            Bukan aplikasi resmi pendaftaran. Pendaftaran tetap lewat situs PPDB
            resmi dan hasil di sini hanya perkiraan.
          </span>
        </p>
        <div className="footer__bottom">
          <span>© 2026 SIPESEK</span>
          <span>Data contoh untuk prototipe desain</span>
        </div>
      </div>
    </footer>
  );
}
