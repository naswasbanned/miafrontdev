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
} from "@/components";

export const metadata: Metadata = {
  title: "Anak Saya",
  description: "Anak Saya",
};

export default function AnakSayaPage() {
  return (
    <>
      <Container>
        <PageHeader
          title="Anak Saya"
          desc="Pilih anak untuk melihat atau melengkapi datanya. Hasil tiap anak tidak tercampur."
        />
        <div className="card-grid">
          <Card
            title="Dimas Pratama"
            text="SMP Negeri 3 Sukamaju · tujuan SMA"
            meta={
              <>
                <Badge kind="brand">Data lengkap</Badge>
                <Badge kind="neutral">Jalur dekat rumah (Domisili)</Badge>
                <Badge kind="neutral">Jalur nilai dan prestasi (Prestasi)</Badge>
              </>
            }
            footer={
              <>
                <ButtonGroup>
                  <Button variant="primary" block href="/peta-sekolah">
                    Lihat Peluang
                  </Button>
                  <Button variant="secondary" block href="/isi-data/1">
                    Ubah Data
                  </Button>
                </ButtonGroup>
              </>
            }
          >
            <p className="card__text">
              Jalur yang memenuhi syarat: Jalur dekat rumah (Domisili) dan Jalur nilai dan prestasi (Prestasi).
            </p>
          </Card>
          <Card
            title="Nadia Pratama"
            text="SMP Negeri 3 Sukamaju · tujuan belum diisi"
            meta={
              <>
                <Badge kind="neutral">Belum selesai</Badge>
              </>
            }
            footer={
              <>
                <ButtonGroup>
                  <Button variant="primary" block href="/isi-data/2">
                    Lanjutkan Mengisi
                  </Button>
                </ButtonGroup>
              </>
            }
          >
            <Stepper step={2} total={5} />
          </Card>
        </div>
        <div className="stack" style={{ marginTop: "var(--space-6)" }}>
          <Button variant="secondary" block href="/isi-data/1" iconLeft="plus">
            Tambah Anak
          </Button>
        </div>
        <Section>
          <SectionHeading
            title="Data dan akun Bapak/Ibu"
            desc="Bapak/Ibu berhak mengunduh atau menghapus semua data kapan saja."
          />
          <div className="card">
            <ButtonGroup>
              <Button
                variant="secondary"
                iconLeft="download"
                toast={{
                  message: "Data sedang disiapkan untuk diunduh.",
                  variant: "info",
                }}
              >
                Unduh Data Saya
              </Button>
              <Button variant="ghost" iconLeft="trash" opens="dlg-hapus">
                Hapus Akun dan Semua Data
              </Button>
            </ButtonGroup>
          </div>
        </Section>
        <Section>
          <CtaBand
            title="Butuh bantuan mengisi?"
            text="Tanyakan lewat WhatsApp. Kami bantu langkah demi langkah."
          >
            <Button
              variant="secondary"
              href="https://wa.me/"
              iconLeft="message"
              newTab
            >
              Chat lewat WhatsApp
              <span className="visually-hidden"> (membuka tab baru)</span>
            </Button>
          </CtaBand>
        </Section>
      </Container>
      <Dialog
        id="dlg-hapus"
        title="Hapus akun dan semua data?"
        footer={
          <>
            <Button variant="secondary" closes>
              Batal
            </Button>
            <Button
              variant="primary"
              closes
              toast={{
                message: "Akun dan semua data sudah dihapus.",
                variant: "info",
              }}
            >
              Ya, hapus semua data
            </Button>
          </>
        }
      >
        <p>
          Semua data Dimas dan Nadia, termasuk hasil peluang dan strategi, akan
          dihapus dari aplikasi ini. Bapak/Ibu perlu mengisi ulang dari awal
          bila ingin memakainya lagi.
        </p>
      </Dialog>
    </>
  );
}
