import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Hitung peluang anak diterima di SMA/SMK Negeri untuk setiap jalur SPMB dan susun pilihan sekolah yang realistis.",
};

export default function IndexPage() {
  return <LandingPage />;
}
