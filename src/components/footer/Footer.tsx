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

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="footer__brand">
              <span className="footer__logo" aria-hidden="true">
                <Icon name="logo" />
              </span>
              Panduan SPMB
            </span>
            <p className="footer__about">
              Membantu orang tua memahami SPMB SMA/SMK Negeri dengan bahasa yang
              mudah dan data yang jujur.
            </p>
            <p className="footer__notice">
              <Icon name="info" className="icon icon--sm" />
              <span>
                Bukan aplikasi resmi pendaftaran. Pendaftaran tetap lewat situs
                SPMB resmi dan hasil di sini hanya perkiraan.
              </span>
            </p>
          </div>
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
        <div className="footer__bottom">
          <span>© 2026 Panduan SPMB</span>
          <span>Data contoh untuk prototipe desain</span>
        </div>
      </div>
    </footer>
  );
}
