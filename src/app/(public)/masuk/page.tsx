import type { Metadata } from "next";
import { Container, PageHeader } from "@/components";
import { MasukFlow } from "./MasukFlow";

export const metadata: Metadata = {
  title: "Masuk atau Daftar",
  description: "Masuk dengan nomor HP dan kode OTP, tanpa kata sandi.",
};

export default function MasukPage() {
  return (
    <Container reading>
      <PageHeader
        title="Masuk atau daftar"
        desc="Cukup nomor HP. Tidak perlu mengingat kata sandi."
      />
      <MasukFlow />
    </Container>
  );
}
