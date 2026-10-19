import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Container,
  DashSection,
  Disclaimer,
  PageHeader,
  Stats,
  Table,
} from "@/components";
import { getSchool, SCHOOLS, shortName } from "@/data/schools";
import { AddSchoolButton } from "@/features/sekolah/SchoolActions";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return SCHOOLS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const school = getSchool((await params).id);
  return school ? { title: school.name, description: school.name } : {};
}

export default async function DetailSekolahPage({ params }: Props) {
  const school = getSchool((await params).id);
  if (!school) notFound();
  const { detail } = school;

  return (
    <Container>
      <Breadcrumb items={[["Peta Sekolah", "/peta-sekolah"], [school.name]]} />
      <PageHeader
        title={school.name}
        desc={`SMA · Negeri · ${school.kec} · ${detail.distance} dari rumah`}
      />
      <div className="stack stack--lg">
        <div className="card card--featured">
          <div className="card__meta">
            <Badge kind={school.kind} lg />
          </div>
          <h2 className="card__title">{`Peluang sekitar ${school.range} lewat ${school.jalur}`}</h2>
          <p className="card__text">{detail.summary}</p>
        </div>
        <DashSection
          title="Peluang per jalur"
          desc="Hanya jalur yang memenuhi syarat yang dihitung."
        >
          <Table
            caption={`Peluang tiap jalur di ${shortName(school)}`}
            head={["Jalur", "Syarat", "Peluang", "Label"]}
            rows={detail.routes.map((r) => [
              r.jalur,
              r.eligible ? "Terpenuhi" : "Tidak terpenuhi",
              r.eligible ? r.peluang : "—",
              r.eligible ? (
                <Badge key="k" kind={r.kind!} />
              ) : (
                <Badge key="k" kind="neutral">
                  Tidak berlaku
                </Badge>
              ),
            ])}
            num={[2]}
          />
        </DashSection>
        <DashSection
          title="Data pembanding tahun lalu"
          desc="Dipakai sebagai dasar perkiraan."
        >
          <Stats items={detail.stats} />
        </DashSection>
        <Alert
          kind="info"
          title={`Keandalan data: berdasarkan ${detail.reliability.years} tahun data`}
        >
          {`Semakin banyak data tahun lalu, semakin pasti perkiraannya. ${detail.reliability.note}`}
        </Alert>
        <Disclaimer />
        <ButtonGroup>
          <AddSchoolButton school={school} variant="primary" block />
          <Button
            variant="secondary"
            block
            href="/peta-sekolah"
            iconLeft="chevron-left"
          >
            Kembali ke Daftar
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}
