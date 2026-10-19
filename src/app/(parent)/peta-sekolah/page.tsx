import type { Metadata } from "next";
import {
  Alert,
  Badge,
  Button,
  Container,
  Dialog,
  Disclaimer,
  HelpLink,
  MapLegend,
  MapSchools,
  PageHeader,
  Select,
  Toolbar,
} from "@/components";
import { SCHOOLS } from "@/data/schools";
import { SchoolResultCard } from "@/features/sekolah/SchoolResultCard";

export const metadata: Metadata = {
  title: "Peta dan Daftar Sekolah",
  description: "Peta dan Daftar Sekolah",
};

export default function PetaSekolahPage() {
  const pins = SCHOOLS.map((s) => ({
    x: s.pin[0],
    y: s.pin[1],
    kind: s.kind,
    name: s.name,
  }));
  return (
    <>
      <Container>
        <PageHeader
          title="Peta dan daftar sekolah"
          desc="Hasil untuk Dimas Pratama · Jalur dekat rumah (Domisili) dan Jalur nilai dan prestasi (Prestasi)."
          actions={
            <Button variant="secondary" sm href="/isi-data/1">
              Ubah Data
            </Button>
          }
        />
        <div className="stack">
          <Alert kind="warning" title="Aturan resmi tahun ini belum terbit">
            Hasil memakai aturan tahun lalu dan akan diperbarui setelah aturan
            terbit.
          </Alert>
          <Disclaimer />
        </div>
        <div className="split" style={{ marginTop: "var(--space-6)" }}>
          <div className="split__map">
            <MapSchools
              pins={pins}
              home={[50, 62]}
              label="Peta sekolah sekitar rumah Dimas"
            />
            <MapLegend />
            <p>
              <HelpLink opens="dlg-label">Apa arti label ini?</HelpLink>
            </p>
          </div>
          <div className="stack">
            <h2 className="text-heading-md">{`${SCHOOLS.length} sekolah ditemukan`}</h2>
            <Toolbar>
              <Select
                id="f-jalur"
                label="Jalur"
                options={["Semua jalur", "Jalur dekat rumah (Domisili)", "Jalur nilai dan prestasi (Prestasi)"]}
              />
              <Select
                id="f-jarak"
                label="Jarak"
                options={["Semua jarak", "Sampai 2 km", "Sampai 5 km"]}
              />
              <Select
                id="f-jenjang"
                label="Jenjang"
                options={["SMA dan SMK", "SMA", "SMK"]}
              />
              <Select
                id="f-label"
                label="Label"
                options={["Semua label", "Peluang Besar", "Memungkinkan", "Peluang Kecil"]}
              />
            </Toolbar>
            {SCHOOLS.map((school) => (
              <SchoolResultCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </Container>
      <Dialog id="dlg-label" title="Apa arti Peluang Besar, Memungkinkan, dan Peluang Kecil?">
        <p>
          <Badge kind="aman" /> Peluang besar berdasarkan data tahun lalu. Tetap
          daftar tepat waktu.
        </p>
        <p>
          <Badge kind="bersaing" /> Peluang seimbang. Hasilnya tergantung jumlah
          pendaftar tahun ini.
        </p>
        <p>
          <Badge kind="berisiko" /> Peluang masih kecil. Jadikan pilihan
          tambahan, bukan satu-satunya.
        </p>
      </Dialog>
    </>
  );
}
