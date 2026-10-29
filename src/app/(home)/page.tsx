import type { Metadata } from "next";
import { continueFor } from "@/components/shell/Shell";
import { LandingPage, type LandingCta } from "@/components/landing/LandingPage";
import { homeFor } from "@/lib/accounts";
import { getSession } from "@/lib/session";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Hitung peluang anak diterima di SMA/SMK Negeri untuk setiap jalur SPMB dan susun pilihan sekolah yang realistis.",
};

export default async function IndexPage() {
  const session = await getSession();
  let cta: LandingCta = { href: "/masuk", label: "Mulai Cek Peluang", ctaLabel: "Mulai Cek Peluang Gratis" };
  if (session?.role === "orang-tua") {
    const c = continueFor(session);
    cta = { href: c.href, label: c.label, ctaLabel: c.label };
  } else if (session) {
    cta = { href: homeFor(session), label: "Buka Dashboard", ctaLabel: "Buka Dashboard" };
  }
  return <LandingPage cta={cta} />;
}
