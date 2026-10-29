import type { Metadata } from "next";
import { Alert, Badge, Container, PageHeader } from "@/components";
import { MasukFlow } from "./MasukFlow";

export const metadata: Metadata = {
  title: "Masuk atau Daftar",
  description: "Masuk atau mulai simulasi peluang SPMB dengan nomor HP tanpa ribet mengingat kata sandi.",
};

export default async function MasukPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <Container reading>
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <Badge kind="brand">Akses Cepat & Aman</Badge>
      </div>
      
      <PageHeader
        art="login"
        title="Masuk / Mulai Simulasi"
        desc="Cukup gunakan nomor WhatsApp/HP aktif. Anda tidak perlu repot membuat atau mengingat kata sandi baru."
      />

      {/* Trust points */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "32px" }}>
        <div style={{ padding: "12px", borderRadius: "16px", background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", textAlign: "center" }}>
          <div style={{ color: "var(--color-primary)", fontWeight: "700", fontSize: "18px", marginBottom: "2px" }}>✓ Gratis</div>
          <div style={{ fontSize: "12px", color: "var(--color-ink-muted)" }}>Tanpa biaya apapun</div>
        </div>
        <div style={{ padding: "12px", borderRadius: "16px", background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", textAlign: "center" }}>
          <div style={{ color: "var(--color-primary)", fontWeight: "700", fontSize: "18px", marginBottom: "2px" }}>⚡ Otomatis</div>
          <div style={{ fontSize: "12px", color: "var(--color-ink-muted)" }}>Progres tersimpan</div>
        </div>
        <div style={{ padding: "12px", borderRadius: "16px", background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)", textAlign: "center" }}>
          <div style={{ color: "var(--color-primary)", fontWeight: "700", fontSize: "18px", marginBottom: "2px" }}>🔒 Rahasia</div>
          <div style={{ fontSize: "12px", color: "var(--color-ink-muted)" }}>Data terenkripsi</div>
        </div>
      </div>

      {next && (
        <Alert kind="info" title="Masuk dulu untuk melanjutkan">
          Halaman yang Bapak/Ibu buka berisi data pribadi anak. Setelah masuk, kami langsung membukanya.
        </Alert>
      )}
      <MasukFlow next={next} />
    </Container>
  );
}
