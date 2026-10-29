import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Container,
  Form,
  PageHeader,
  Stepper,
} from "@/components";
import {
  AFTER_LAST,
  BEFORE_FIRST,
  getStep,
  STEPS,
  stepHref,
  TOTAL,
} from "@/features/isi-data/steps";

type Props = { params: Promise<{ langkah: string }> };

export function generateStaticParams() {
  return STEPS.map((_, i) => ({ langkah: String(i + 1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = getStep((await params).langkah);
  if (!found) return {};
  const title = `Langkah ${found.n}: ${found.step.title} · SiPesek`;
  return { title, description: found.step.desc };
}

export default async function IsiDataPage({ params }: Props) {
  const found = getStep((await params).langkah);
  if (!found) notFound();
  const { n, step } = found;
  const isLast = n === TOTAL;
  const next = isLast ? AFTER_LAST : stepHref(n + 1);
  const prev = n === 1 ? BEFORE_FIRST : stepHref(n - 1);

  return (
    <Container reading>
      <Breadcrumb items={[["Anak Saya", "/anak-saya"], [`Langkah ${n}: ${step.title}`]]} />

      <div style={{ marginBlock: "20px 28px" }}>
        <Stepper step={n} total={TOTAL} saved />
      </div>

      <PageHeader title={step.title} desc={step.desc} />

      <div
        className="card"
        style={{
          padding: "32px 28px",
          marginTop: "20px",
          border: "1px solid var(--color-border-subtle, #f0eeea)",
          borderRadius: "var(--radius-card, 24px)",
          boxShadow: "0 8px 24px rgba(4, 6, 19, 0.04)",
        }}
      >
        <Form next={next}>
          <step.Body />
          <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--color-border-subtle, #f0eeea)" }}>
            <ButtonGroup>
              <Button
                variant="primary"
                block
                type="submit"
                icon={isLast ? undefined : "arrow-right"}
              >
                {step.nextText ?? "Simpan & Lanjut"}
              </Button>
              {step.skippable && (
                <Button variant="ghost" block href={next}>
                  Lewati Langkah Ini
                </Button>
              )}
              <Button variant="secondary" block href={prev} iconLeft="chevron-left">
                Kembali
              </Button>
            </ButtonGroup>
          </div>
        </Form>
      </div>

      {step.Dialogs && <step.Dialogs />}
    </Container>
  );
}

