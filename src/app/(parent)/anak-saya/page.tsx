import type { Metadata } from "next";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  SectionHeading,
  Stepper,
  Dialog,
  Container,
  PageHeader,
  Section,
  CtaBand,
  Icon,
} from "@/components";

export const metadata: Metadata = {
  title: "Profil Anak Saya",
  description: "Kelola data profil anak, pantau kelengkapan berkas, dan lihat kalkulasi strategi SPMB.",
};

export default function AnakSayaPage() {
  return (
    <>
      <Container>
        <PageHeader
          title="Profil Anak Saya"
          desc="Kelola profil anak untuk memantau kelayakan jalur dan kalkulasi peluang sekolah. Data setiap anak tersimpan terpisah dan aman."
        />
        
        <div className="card-grid">
          {/* Anak 1: Dimas Pratama */}
          <Card
            title="Dimas Pratama"
            text="SMP Negeri 3 Sukamaju · Target: SMA Negeri"
            meta={
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                <Badge kind="brand">✓ Data Lengkap</Badge>
                <Badge kind="aman">Peluang Besar</Badge>
                <Badge kind="neutral">Zonasi: 1.2 km</Badge>
              </div>
            }
            footer={
              <ButtonGroup>
                <Button variant="primary" block href="/strategi">
                  Lihat Rekomendasi Strategi
                </Button>
                <Button variant="secondary" block href="/peta-sekolah">
                  Peta Zonasi Sekolah
                </Button>
              </ButtonGroup>
            }
          >
            <div style={{ padding: "14px", borderRadius: "14px", background: "var(--color-surface-muted)", marginTop: "12px", border: "1px solid var(--color-border-subtle)" }}>
              <span style={{ fontSize: "13px", color: "var(--color-ink-muted)", display: "block", marginBottom: "4px" }}>Jalur Memenuhi Syarat:</span>
              <strong style={{ fontSize: "14px", color: "var(--color-ink)" }}>Jalur Domisili (Zonasi) & Jalur Prestasi Nilai</strong>
            </div>
          </Card>

          {/* Anak 2: Nadia Pratama */}
          <Card
            title="Nadia Pratama"
            text="SMP Negeri 3 Sukamaju · Langkah 2 dari 5"
            meta={
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                <Badge kind="bersaing">Progres 40%</Badge>
                <Badge kind="neutral">Belum Selesai</Badge>
              </div>
            }
            footer={
              <ButtonGroup>
                <Button variant="primary" block href="/isi-data/2">
                  Lanjutkan Pengisian (Langkah 2)
                </Button>
                <Button variant="secondary" block href="/isi-data/1">
                  Ubah Data Awal
                </Button>
              </ButtonGroup>
            }
          >
            <div style={{ marginTop: "12px" }}>
              <span style={{ fontSize: "13px", color: "var(--color-ink-muted)", display: "block", marginBottom: "8px" }}>Tahapan Wizard:</span>
              <Stepper step={2} total={5} />
            </div>
          </Card>
        </div>

        <div style={{ marginTop: "24px" }}>
          <Button variant="secondary" block href="/isi-data/1" iconLeft="plus">
            + Tambah Profil Anak Lainnya
          </Button>
        </div>

        <Section>
          <SectionHeading
            title="Hak & Privasi Akun Keluarga"
            desc="Anda memegang kendali penuh atas data yang telah dimasukkan."
          />
          <div className="card" style={{ background: "#ffffff" }}>
            <p style={{ marginBottom: "16px", color: "var(--color-ink-soft)", fontSize: "15px" }}>
              Semua kalkulasi peluang disimpan secara privat. Anda berhak mengunduh cadangan arsip atau menghapus seluruh riwayat pendaftaran kapan saja.
            </p>
            <ButtonGroup>
              <Button
                variant="secondary"
                iconLeft="download"
                toast={{
                  message: "Arsip data profil keluarga sedang diproses untuk diunduh.",
                  variant: "info",
                }}
              >
                Unduh Cadangan Data
              </Button>
              <Button variant="ghost" iconLeft="trash" opens="dlg-hapus">
                Hapus Seluruh Data Profil
              </Button>
            </ButtonGroup>
          </div>
        </Section>

        <Section>
          <CtaBand
            title="Butuh Panduan Saat Mengisi Data?"
            text="Tim konselor sekolah kami siap memandu cara membaca rapor dan menghitung titik koordinat KK melalui WhatsApp."
          >
            <Button
              variant="primary"
              href="https://wa.me/"
              iconLeft="message"
              newTab
            >
              Konsultasi Gratis via WhatsApp
            </Button>
          </CtaBand>
        </Section>
      </Container>

      <Dialog
        id="dlg-hapus"
        title="Konfirmasi Penghapusan Seluruh Data?"
        footer={
          <>
            <Button variant="secondary" closes>
              Batalkan
            </Button>
            <Button
              variant="primary"
              closes
              toast={{
                message: "Seluruh data profil anak telah berhasil dihapus dari sistem.",
                variant: "info",
              }}
            >
              Ya, Hapus Permanen
            </Button>
          </>
        }
      >
        <p>
          Tindakan ini akan menghapus permanen profil Dimas Pratama dan Nadia Pratama beserta hasil prediksi zonasi dan simulasi strategi yang sudah tersimpan.
        </p>
      </Dialog>
    </>
  );
}
