import type { Metadata } from "next";
import {
  Button,
  Alert,
  SchoolCard,
  Breadcrumb,
  Select,
  Container,
  PageHeader,
  Toolbar,
} from "@/components";
import { PRIVATE_SCHOOLS } from "@/data/schools";

export const metadata: Metadata = {
  title: "Sekolah Swasta Cadangan",
  description: "Sekolah Swasta Cadangan",
};

export default function CadanganPage() {
  return (
    <Container>
      <Breadcrumb items={[["Strategi", "/strategi"], ["Sekolah cadangan"]]} />
      <PageHeader
        title="Sekolah swasta cadangan"
        desc="Pilihan bila belum diterima di sekolah negeri. Ditampilkan netral, tanpa iklan."
      />
      <div className="stack stack--lg">
        <Alert kind="warning" title="Pendaftaran swasta biasanya lebih awal">
          Banyak sekolah swasta membuka pendaftaran sebelum sekolah negeri. Cek
          jadwalnya di tiap sekolah.
        </Alert>
        <Toolbar>
          <Select
            id="f-biaya"
            label="Biaya maksimal per bulan"
            options={["Semua biaya", "Rp 300.000", "Rp 500.000", "Rp 800.000"]}
          />
          <Select
            id="f-jarak2"
            label="Jarak"
            options={["Semua jarak", "Sampai 3 km", "Sampai 6 km"]}
          />
        </Toolbar>
        <div className="card-grid card-grid--3">
          {PRIVATE_SCHOOLS.map((p) => (
            <SchoolCard
              key={p.id}
              name={p.name}
              type="SMA · Swasta"
              kec={p.kec}
              kind="neutral"
              badgeText={`Akreditasi ${p.akreditasi}`}
              facts={[
                ["SPP per bulan", p.spp],
                ["Uang pangkal", p.pangkal],
              ]}
              reason={`Akreditasi ${p.akreditasi}. ${p.beasiswa} · jarak ${p.jarak}`}
            >
              <Button
                variant="secondary"
                toast={{
                  message: `${p.name} disimpan sebagai cadangan.`,
                  variant: "success",
                }}
              >
                Simpan sebagai Cadangan
              </Button>
            </SchoolCard>
          ))}
        </div>
        <p className="text-caption text-secondary">
          Biaya adalah perkiraan. Terakhir diperbarui 2 Oktober 2026. Tanyakan
          biaya terbaru langsung ke sekolah.
        </p>
      </div>
    </Container>
  );
}
