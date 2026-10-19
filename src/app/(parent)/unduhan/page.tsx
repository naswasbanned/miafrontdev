import type { Metadata } from "next";
import {
  Badge,
  Button,
  ButtonGroup,
  Table,
  Checklist,
  Container,
  PageHeader,
} from "@/components";
import { shortName, strategySchools } from "@/data/schools";

export const metadata: Metadata = {
  title: "Unduhan",
  description: "Unduhan",
};

export default function UnduhanPage() {
  return (
    <Container>
      <PageHeader
        title="Unduhan"
        desc="Ringkasan strategi dan daftar dokumen untuk dibawa ke sekolah."
      />
      <div className="stack stack--lg">
        <section className="stack">
          <div>
            <h2 className="text-heading-md">
              Ringkasan strategi (PDF, 2 halaman)
            </h2>
            <p className="text-secondary">
              Huruf besar dan jelas, nyaman dibaca langsung dari kertas.
            </p>
          </div>
          <div className="paper">
            <h3 className="card__title">Ringkasan Strategi PPDB 2027/2028</h3>
            <p className="card__text">
              Dimas Pratama · Kel. Mekar Baru, Kec. Harapan Jaya · Jalur:
              Jalur dekat rumah (Domisili), Jalur nilai dan prestasi (Prestasi)
            </p>
            <Table
              caption="Urutan pilihan sekolah"
              head={["Urutan", "Sekolah", "Label"]}
              rows={strategySchools().map(({ school }, i) => [
                String(i + 1),
                `${shortName(school)} (${school.jalur})`,
                <Badge key={school.id} kind={school.kind} />,
              ])}
              rowHead={false}
            />
            <p className="card__text">
              Peluang diterima di salah satu sekolah negeri: Tinggi.
            </p>
            <p className="text-caption text-secondary">
              Hasil ini adalah perkiraan dan bukan jaminan diterima.
            </p>
          </div>
          <ButtonGroup>
            <Button
              variant="primary"
              block
              iconLeft="download"
              toast={{
                message: "Ringkasan sedang disiapkan.",
                variant: "info",
              }}
            >
              Unduh PDF
            </Button>
            <Button
              variant="secondary"
              block
              href="https://wa.me/?text=Ringkasan%20strategi%20PPDB"
              iconLeft="share"
              newTab
            >
              Bagikan ke WhatsApp
            </Button>
            <Button variant="ghost" block iconLeft="print" print>
              Cetak
            </Button>
          </ButtonGroup>
        </section>
        <section className="stack">
          <div>
            <h2 className="text-heading-md">Checklist dokumen</h2>
            <p className="text-secondary">
              Disesuaikan dengan Jalur dekat rumah (Domisili) dan Jalur nilai dan prestasi (Prestasi). Centang yang sudah
              siap.
            </p>
          </div>
          <Checklist
            legend="Dokumen"
            name="dok"
            items={[
              {
                value: "kk",
                title: "Kartu Keluarga",
                desc: "Terbit minimal satu tahun sebelum pendaftaran.",
                checked: true,
              },
              { value: "akta", title: "Akta kelahiran", checked: true },
              { value: "rapor", title: "Rapor semester 1 sampai 5" },
              {
                value: "skl",
                title: "Surat keterangan lulus",
                desc: "Bila sudah diterbitkan sekolah.",
              },
              {
                value: "sertifikat",
                title: "Sertifikat prestasi",
                desc: "Untuk Jalur Prestasi. Sudah dilegalisir.",
              },
              { value: "foto", title: "Pas foto terbaru" },
            ]}
          />
          <Button
            variant="secondary"
            block
            iconLeft="download"
            toast={{
              message: "Checklist sedang disiapkan.",
              variant: "info",
            }}
          >
            Unduh Checklist
          </Button>
        </section>
      </div>
    </Container>
  );
}
