import type { Metadata } from "next";
import {
  Badge,
  Button,
  ButtonGroup,
  MoreLink,
  Alert,
  Accordion,
  Table,
  Container,
  PageHeader,
  RankList,
  Disclaimer,
} from "@/components";
import { strategySchools } from "@/data/schools";

export const metadata: Metadata = {
  title: "Strategi Pilihan Sekolah",
  description: "Strategi Pilihan Sekolah",
};

export default function StrategiPage() {
  return (
    <Container>
      <PageHeader
        title="Strategi untuk Dimas"
        desc="Urutan pilihan yang kami sarankan. Bapak/Ibu boleh mengubah urutannya."
      />
      <div className="stack stack--lg">
        <div className="card card--featured">
          <p className="card__text">
            Kemungkinan anak diterima di salah satu sekolah negeri
          </p>
          <div className="card__meta">
            <Badge kind="aman" lg>
              Peluang tinggi
            </Badge>
          </div>
        </div>
        <section className="stack">
          <div>
            <h2 className="text-heading-md">Pilihan sekolah</h2>
            <p className="text-secondary">
              Aturan tahun lalu: boleh memilih 3 sekolah. Gunakan tombol panah
              untuk mengubah urutan.
            </p>
          </div>
          <RankList
            items={strategySchools().map(({ role, school }) => ({
              name: school.name,
              role,
              jalur: school.jalur,
              kind: school.kind,
            }))}
          />
        </section>
        <Accordion
          items={[
            [
              "Kenapa kombinasi ini?",
              "Satu pilihan ambisius memberi kesempatan ke sekolah yang diinginkan. Dua pilihan Aman menjaga agar Dimas tetap punya sekolah negeri bila pilihan pertama tidak berhasil.",
            ],
          ]}
          openFirst
        />
        <section className="stack">
          <div>
            <h2 className="text-heading-md">
              Jalur mana yang paling menguntungkan?
            </h2>
            <p className="text-secondary">Dimas memenuhi dua jalur.</p>
          </div>
          <Table
            caption="Perbandingan jalur"
            head={["Jalur", "Peluang terbaik dan catatan"]}
            rows={[
              [
                <>Domisili</>,
                <>
                  <Badge kind="aman" /> 80–92%
                  <br />
                  <span className="table__muted">
                    Paling menguntungkan.
                  </span>{" "}
                  <Badge kind="brand">Disarankan</Badge>
                </>,
              ],
              [
                <>Prestasi</>,
                <>
                  <Badge kind="bersaing" /> 45–60%
                  <br />
                  <span className="table__muted">
                    Bagus untuk satu pilihan ambisius.
                  </span>
                </>,
              ],
            ]}
          />
        </section>
        <Alert
          kind="info"
          title="Sekolah cadangan"
          action={
            <>
              <MoreLink href="/cadangan">
                Lihat sekolah swasta cadangan
              </MoreLink>
            </>
          }
        >
          Peluang negeri Dimas tinggi, jadi cadangan tidak wajib. Bapak/Ibu
          tetap bisa melihatnya.
        </Alert>
        <Disclaimer />
        <ButtonGroup>
          <Button variant="primary" block href="/unduhan" iconLeft="download">
            Unduh Ringkasan
          </Button>
          <Button variant="secondary" block href="/peta-sekolah">
            Kembali ke Peta
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}
