import type { NextConfig } from "next";

const config: NextConfig = {
  // Alamat lama (halaman terpisah per langkah/sekolah) diarahkan ke route dinamis.
  async redirects() {
    return [
      ...[1, 2, 3, 4, 5].map((n) => ({ source: `/isi-data-${n}`, destination: `/isi-data/${n}`, permanent: true })),
      { source: "/detail-sekolah", destination: "/detail-sekolah/sma-negeri-5", permanent: true },
    ];
  },
};

export default config;
