import type { Metadata } from "next";
import {
  Badge,
  Button,
  ButtonGroup,
  Table,
  Checklist,
  Container,
  PageHeader,
  Icon,
} from "@/components";
import { shortName, strategySchools } from "@/data/schools";

export const metadata: Metadata = {
  title: "Unduhan & Dokumen · SiPesek",
  description: "Unduh ringkasan strategi pilihan sekolah dan checklist kelengkapan berkas fisik PPDB.",
};

export default function UnduhanPage() {
  return (
    <Container>
      <PageHeader
        title="Unduhan & Kelengkapan Berkas"
        desc="Ringkasan strategi sekolah siap cetak dan checklist berkas fisik untuk verifikasi ke panitia sekolah."
      />
      <div className="stack stack--lg">
        {/* Document Preview Section */}
        <section className="stack">
          <div>
            <h2 className="text-heading-md">
              Ringkasan Strategi Siap Cetak (Format PDF A4)
            </h2>
            <p className="text-secondary">
              Tata letak kontras tinggi dengan tipografi jelas agar nyaman dibaca oleh keluarga dan petugas verifikasi sekolah.
            </p>
          </div>

          <div className="paper">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid var(--color-border-subtle, #f0eeea)",
                paddingBottom: "16px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "var(--color-primary, #ed5a1c)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: 700,
                  }}
                >
                  <Icon name="check" className="icon icon--sm" />
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--color-ink, #040613)",
                      margin: 0,
                    }}
                  >
                    SiPesek · Ringkasan Strategi PPDB 2027/2028
                  </h3>
                  <span style={{ fontSize: "12px", color: "var(--color-ink-muted, #8f9192)" }}>
                    Dokumen Resmi Konsultasi Orang Tua · Diperbarui 29 Oktober 2026
                  </span>
                </div>
              </div>
              <Badge kind="brand">Terverifikasi Sistem</Badge>
            </div>

            <div
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                background: "var(--color-canvas, #f8f7f3)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
              }}
            >
              <div>
                <span style={{ fontSize: "12px", color: "var(--color-ink-muted, #8f9192)", display: "block" }}>
                  Nama Siswa
                </span>
                <strong style={{ fontSize: "15px", color: "var(--color-ink, #040613)" }}>
                  Dimas Pratama
                </strong>
              </div>
              <div>
                <span style={{ fontSize: "12px", color: "var(--color-ink-muted, #8f9192)", display: "block" }}>
                  Domisili Kartu Keluarga
                </span>
                <strong style={{ fontSize: "15px", color: "var(--color-ink, #040613)" }}>
                  Kel. Mekar Baru, Kec. Harapan Jaya
                </strong>
              </div>
              <div>
                <span style={{ fontSize: "12px", color: "var(--color-ink-muted, #8f9192)", display: "block" }}>
                  Jalur Rekomendasi
                </span>
                <strong style={{ fontSize: "15px", color: "var(--color-ink, #040613)" }}>
                  Domisili (Utama) & Prestasi
                </strong>
              </div>
            </div>

            <Table
              caption="Urutan Pilihan Sekolah Rekomendasi"
              head={["Prioritas", "Sekolah & Jalur", "Status Peluang"]}
              rows={strategySchools().map(({ school }, i) => [
                <strong key="i" style={{ fontFamily: 'var(--font-heading, "Outfit", sans-serif)', color: "var(--color-primary, #ed5a1c)" }}>
                  Pilihan {i + 1}
                </strong>,
                <div key="n">
                  <strong style={{ display: "block", color: "var(--color-ink, #040613)" }}>
                    {shortName(school)}
                  </strong>
                  <span style={{ fontSize: "13px", color: "var(--color-ink-soft, #3e4042)" }}>
                    {school.jalur}
                  </span>
                </div>,
                <Badge key={school.id} kind={school.kind} />,
              ])}
              rowHead={false}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                borderRadius: "14px",
                background: "#f2fbf6",
                border: "1px solid rgba(5, 150, 105, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Badge kind="aman" />
                <span style={{ fontSize: "14px", color: "var(--color-success-text, #059669)", fontWeight: 600 }}>
                  Peluang Diterima di Salah Satu Sekolah Negeri: Sangat Tinggi (80–92%)
                </span>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: "12px", color: "var(--color-ink-muted, #8f9192)", lineHeight: "1.5" }}>
              * Dokumen ini dibuat berdasarkan data simulasi mandiri orang tua dan riwayat seleksi PPDB tahun sebelumnya. Bukan merupakan surat tanda bukti penerimaan resmi dari panitia PPDB dinas pendidikan.
            </p>
          </div>

          <ButtonGroup>
            <Button
              variant="primary"
              block
              iconLeft="download"
              toast={{
                message: "Ringkasan strategi PDF sedang disiapkan untuk diunduh.",
                variant: "info",
              }}
            >
              Unduh Dokumen PDF
            </Button>
            <Button
              variant="secondary"
              block
              href="https://wa.me/?text=Ringkasan%20Strategi%20PPDB%20Dimas%20Pratama%20dari%20SiPesek"
              iconLeft="share"
              newTab
            >
              Bagikan ke WhatsApp
            </Button>
            <Button variant="ghost" block iconLeft="print" print>
              Cetak Dokumen
            </Button>
          </ButtonGroup>
        </section>

        {/* Document Checklist Section */}
        <section className="stack">
          <div>
            <h2 className="text-heading-md">Checklist Berkas Fisik</h2>
            <p className="text-secondary">
              Daftar dokumen fisik yang wajib dibawa saat verifikasi di sekolah tujuan. Centang berkas yang sudah siap di rumah.
            </p>
          </div>
          <Checklist
            legend="Kelengkapan Berkas Administrasi"
            name="dok"
            items={[
              {
                value: "kk",
                title: "Kartu Keluarga (Asli & Fotokopi)",
                desc: "Wajib terbit minimal 1 tahun sebelum tanggal pendaftaran dibuka.",
                checked: true,
              },
              {
                value: "akta",
                title: "Akta Kelahiran Siswa",
                desc: "Membuktikan usia calon peserta didik baru.",
                checked: true,
              },
              {
                value: "rapor",
                title: "Buku Rapor Semester 1 s/d 5 (Legalisir)",
                desc: "Diperlukan untuk verifikasi nilai rata-rata Jalur Prestasi.",
              },
              {
                value: "skl",
                title: "Surat Keterangan Lulus (SKL) / Ijazah",
                desc: "Diterbitkan resmi oleh pihak SMP/MTs asal.",
              },
              {
                value: "sertifikat",
                title: "Sertifikat Piagam Kejuaraan (Bila ada)",
                desc: "Khusus pendaftar Jalur Prestasi Hasil Lomba (minimal tingkat kabupaten/kota).",
              },
              {
                value: "foto",
                title: "Pas Foto Berwarna Terbaru (3x4)",
                desc: "Sebanyak 3 lembar dengan latar belakang merah/biru.",
              },
            ]}
          />
          <Button
            variant="secondary"
            block
            iconLeft="download"
            toast={{
              message: "Checklist berkas sedang disiapkan untuk diunduh.",
              variant: "info",
            }}
          >
            Unduh Checklist PDF
          </Button>
        </section>
      </div>
    </Container>
  );
}

