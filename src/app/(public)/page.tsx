import type { Metadata } from "next";
import {
  Icon,
  Badge,
  Button,
  MoreLink,
  Alert,
  Card,
  SectionHeading,
  Accordion,
  Container,
  Section,
  CtaBand,
} from "@/components";
import { FAQ_GROUPS } from "@/data/faq";
import { JALUR } from "@/data/jalur";
import { getSchool } from "@/data/schools";

// Tiga contoh sekolah untuk pratinjau hasil di hero.
const PREVIEW = ["sma-negeri-5", "sma-negeri-2", "sma-negeri-7"].map((id) =>
  getSchool(id)!,
);

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Cari tahu peluang anak masuk SMA/SMK Negeri, jalur yang cocok, dan strategi pilihan sekolah.",
};

export default function IndexPage() {
  return (
    <>
      <section className="hero" aria-labelledby="judul">
        <div className="container hero__grid">
          <div>
            <span className="badge badge--brand hero__eyebrow">
              SPMB SMA/SMK Negeri 2027/2028
            </span>
            <h1 className="hero__title" id="judul">
              Cari tahu peluang anak Bapak/Ibu masuk SMA/SMK Negeri
            </h1>
            <p className="hero__lead">
              Isi data anak, lihat sekolah mana yang aman, bersaing, atau
              berisiko, lalu dapatkan strategi pilihan sekolah. Semua dijelaskan
              dengan bahasa sehari-hari.
            </p>
            <div className="button-group hero__actions">
              <Button variant="primary" href="/masuk" icon="arrow-right">
                Mulai Cek Peluang
              </Button>
            </div>
            <ul className="hero__trust">
              <li className="hero__trust-item">
                <Icon name="check" className="icon icon--sm" />
                Gratis. Data hanya dipakai untuk menghitung peluang.
              </li>
              <li className="hero__trust-item">
                <Icon name="check" className="icon icon--sm" />
                Masuk cukup dengan nomor HP, tanpa kata sandi.
              </li>
              <li className="hero__trust-item">
                <Icon name="check" className="icon icon--sm" />
                Hasil berupa perkiraan dari data tahun lalu, bukan jaminan.
              </li>
            </ul>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__preview">
              <p className="hero__preview-title">
                Contoh hasil untuk Jalur Domisili
              </p>
              {PREVIEW.map((s) => (
                <div key={s.id} className="hero__preview-row">
                  <span className="hero__preview-name">
                    {s.name}
                    <span className="hero__preview-meta">{`${s.detail.distance} dari rumah`}</span>
                  </span>
                  <Badge kind={s.kind} />
                </div>
              ))}
              <p className="hero__preview-note">
                Perkiraan, bukan hasil seleksi resmi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Section>
          <SectionHeading
            eyebrow="Cara kerja"
            title="Tiga langkah, sekitar 8 menit"
            desc="Bisa berhenti kapan saja. Isian tersimpan otomatis."
          />
          <div className="card-grid card-grid--3">
            <Card
              title="Isi data"
              num={1}
              text="Alamat, nilai rapor, dan status keluarga. Satu topik per layar, boleh dikosongkan dulu."
            />
            <Card
              title="Lihat peluang"
              num={2}
              text="Setiap sekolah diberi label Aman, Bersaing, atau Berisiko beserta alasannya."
            />
            <Card
              title="Dapat strategi"
              num={3}
              text="Urutan pilihan sekolah yang disarankan, lengkap dengan cadangan dan daftar dokumen."
            />
          </div>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="Jalur pendaftaran"
            title="Empat jalur yang bisa dipilih"
            desc="Setiap jalur punya syarat sendiri. Kami bantu mencari yang paling cocok untuk anak Bapak/Ibu."
            action={
              <>
                <MoreLink href="/panduan#jalur">Baca panduan lengkap</MoreLink>
              </>
            }
          />
          <div className="card-grid card-grid--4">
            {JALUR.map((j) => (
              <Card
                key={j.id}
                title={j.title}
                icon={j.icon}
                text={j.desc}
                href={`/panduan#${j.id}`}
              />
            ))}
          </div>
        </Section>
        <Section>
          <Alert kind="info" title="Bukan aplikasi resmi pendaftaran">
            Pendaftaran tetap dilakukan lewat situs SPMB resmi dinas pendidikan.
            Aplikasi ini hanya membantu Bapak/Ibu memahami peluang dan menyusun
            strategi.
          </Alert>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="Pertanyaan umum"
            title="Yang sering ditanyakan"
            action={
              <>
                <MoreLink href="/tanya-jawab">Lihat semua</MoreLink>
              </>
            }
          />
          <div className="stack">
            <Accordion items={FAQ_GROUPS[0].items} openFirst />
          </div>
        </Section>
        <Section>
          <CtaBand
            title="Siap mencoba?"
            text="Mulai dari satu data saja. Bapak/Ibu bisa melanjutkan nanti."
          >
            <Button variant="primary" href="/masuk" icon="arrow-right">
              Mulai Cek Peluang
            </Button>
          </CtaBand>
        </Section>
      </Container>
    </>
  );
}
