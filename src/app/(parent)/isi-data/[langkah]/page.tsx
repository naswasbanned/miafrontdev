import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, ButtonGroup, Form, PageHeader } from "@/components";
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
  const title = `Isi Data: ${found.step.title}`;
  return { title, description: title };
}

export default async function IsiDataPage({ params }: Props) {
  const found = getStep((await params).langkah);
  if (!found) notFound();
  const { n, step } = found;
  const isLast = n === TOTAL;
  const next = isLast ? AFTER_LAST : stepHref(n + 1);
  const prev = n === 1 ? BEFORE_FIRST : stepHref(n - 1);

  return (
    <>
      <PageHeader title={step.title} desc={step.desc} />
      <Form next={next}>
        <step.Body />
        <ButtonGroup>
          <Button
            variant="primary"
            block
            type="submit"
            icon={isLast ? undefined : "arrow-right"}
          >
            {step.nextText ?? "Lanjut"}
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
      </Form>
      {step.Dialogs && <step.Dialogs />}
    </>
  );
}
