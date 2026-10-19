import { Button, Container, PageHeader, SiteChrome } from "@/components";

export default function NotFound() {
  return (
    <SiteChrome area="public">
      <Container>
        <PageHeader
          title="Halaman tidak ditemukan"
          desc="Alamat yang Bapak/Ibu buka tidak ada atau sudah dipindahkan."
        />
        <Button variant="primary" href="/" icon="arrow-right">
          Kembali ke Beranda
        </Button>
      </Container>
    </SiteChrome>
  );
}
