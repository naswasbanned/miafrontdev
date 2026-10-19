import type { Metadata } from "next";
import {
  Badge,
  Button,
  Alert,
  Card,
  SectionHeading,
  Tabs,
  Breadcrumb,
  Container,
  PageHeader,
  Section,
  CtaBand,
} from "@/components";
import { JALUR } from "@/data/jalur";

export const metadata: Metadata = {
  title: "Panduan SPMB",
  description:
    "Penjelasan jalur SPMB, dokumen, cara peluang dihitung, dan privasi data.",
};

export default function PanduanPage() {
  return (
    <Container>
      <Breadcrumb items={[["Beranda", "/"], ["Panduan SPMB"]]} />
      <PageHeader
        title="Panduan SPMB (dulu PPDB)"
        desc="SPMB adalah pendaftaran sekolah negeri. Di sini jalur dan istilahnya dijelaskan dengan bahasa sehari-hari."
      />
      <Section id="jalur">
        <SectionHeading
          title="Empat jalur pendaftaran"
          desc="Setiap anak hanya memakai satu jalur pada satu pendaftaran. Persentase kuota dan syarat berbeda tiap daerah dan tiap tahun, jadi selalu cocokkan dengan petunjuk teknis resmi."
        />
        <div className="card-grid">
          {JALUR.map((j) => (
            <Card
              key={j.id}
              title={j.title}
              icon={j.icon}
              text={j.desc}
              id={j.id}
              footer={<p className="card__cocok">{j.cocok}</p>}
            />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
          title="Dokumen yang perlu disiapkan"
          desc="Daftar akhir menyesuaikan jalur yang dipilih. Di halaman Unduhan, daftar ini bisa dicentang."
        />
        <Tabs
          label="Dokumen per jalur"
          tabs={JALUR.map((j) => ({
            id: j.id,
            label: j.title,
            content: (
              <ul className="list">
                {j.docs.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            ),
          }))}
        />
      </Section>
      <Section id="cara-hitung">
        <SectionHeading
          title="Bagaimana peluang dihitung?"
          desc="Dalam lima langkah. Semuanya memakai data seleksi tahun-tahun sebelumnya."
        />
        <div className="stack stack--lg">
          <ol className="list">
            <li>
              <strong>Cek jalur.</strong> Kami cek syarat tiap jalur dengan
              aturan tahun berjalan.
            </li>
            <li>
              <strong>Hitung skor anak.</strong> Jarak rumah untuk jalur dekat
              rumah, nilai untuk jalur nilai dan prestasi, kriteria keluarga
              untuk jalur keluarga kurang mampu.
            </li>
            <li>
              <strong>Bandingkan dengan tahun lalu.</strong> Kami lihat posisi
              anak terhadap anak-anak yang diterima sebelumnya.
            </li>
            <li>
              <strong>Sesuaikan.</strong> Perubahan kuota, tren pendaftar, dan
              jumlah data ikut diperhitungkan.
            </li>
            <li>
              <strong>Beri label dan alasan.</strong> Hasilnya rentang peluang
              dengan penjelasan satu sampai dua kalimat.
            </li>
          </ol>
          <div className="card-grid card-grid--3">
            <div className="card">
              <Badge kind="aman" lg />
              <p className="card__text">
                Peluang besar berdasarkan data tahun lalu. Tetap daftar tepat
                waktu.
              </p>
            </div>
            <div className="card">
              <Badge kind="bersaing" lg />
              <p className="card__text">
                Peluang seimbang. Hasil tergantung jumlah pendaftar tahun ini.
              </p>
            </div>
            <div className="card">
              <Badge kind="berisiko" lg />
              <p className="card__text">
                Peluang masih kecil. Jadikan pilihan tambahan, bukan
                satu-satunya.
              </p>
            </div>
          </div>
          <Alert kind="warning" title="Perkiraan, bukan jaminan">
            Hasil ini adalah perkiraan berdasarkan data tahun-tahun sebelumnya
            dan bukan jaminan diterima. Keputusan akhir ada pada panitia SPMB.
          </Alert>
        </div>
      </Section>
      <Section id="privasi">
        <SectionHeading
          title="Data Bapak/Ibu dan privasi"
          desc="Data anak dan keluarga kami perlakukan sebagai data sensitif."
        />
        <div className="card">
          <ul className="list">
            <li>
              Kami hanya meminta data yang perlu untuk menghitung peluang. Tidak
              ada NIK atau NISN.
            </li>
            <li>
              Lokasi rumah disimpan terenkripsi. Dinas hanya melihat data
              gabungan per kecamatan, tidak pernah titik per keluarga.
            </li>
            <li>
              Bapak/Ibu bisa mengunduh atau menghapus semua data kapan saja dari
              halaman Anak Saya.
            </li>
            <li>Tidak ada iklan dan data tidak dijual.</li>
          </ul>
        </div>
      </Section>
      <Section>
        <CtaBand
          title="Sudah paham jalurnya?"
          text="Mulai cek peluang anak Bapak/Ibu sekarang."
        >
          <Button variant="primary" href="/masuk" icon="arrow-right">
            Mulai Cek Peluang
          </Button>
        </CtaBand>
      </Section>
    </Container>
  );
}
