import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Container, ExternalLink, Stepper } from "@/components";
import { getStep, TOTAL } from "@/features/isi-data/steps";

// Bagian yang sama di semua langkah: pembungkus, indikator progres, dan bantuan.
export default async function WizardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ langkah: string }>;
}) {
  const found = getStep((await params).langkah);
  if (!found) notFound();
  return (
    <Container reading>
      <Stepper step={found.n} total={TOTAL} saved />
      {children}
      <p className="text-secondary" style={{ marginTop: "var(--space-6)" }}>
        Butuh bantuan?{" "}
        <ExternalLink href="https://wa.me/">Chat lewat WhatsApp</ExternalLink>
      </p>
    </Container>
  );
}
