// Data navigasi. Nilai `current` memakai path route, misal "/anak-saya".
export type NavItem = readonly [href: string, label: string];
export type DashItem = readonly [href: string, label: string, icon: string];

export const NAV = {
  public: {
    home: "/",
    items: [
      ["/", "Beranda"],
      ["/panduan", "Panduan PPDB"],
      ["/tanya-jawab", "Tanya Jawab"],
    ] as NavItem[],
    cta: { variant: "primary", label: "Mulai Cek Peluang", href: "/masuk" },
  },
  parent: {
    home: "/anak-saya",
    items: [
      ["/anak-saya", "Anak Saya"],
      ["/peta-sekolah", "Peta Sekolah"],
      ["/strategi", "Strategi"],
      ["/unduhan", "Unduhan"],
      ["/tanya-jawab", "Bantuan"],
    ] as NavItem[],
    cta: { variant: "secondary", label: "Keluar", href: "/" },
  },
} as const;

export const BOTTOM: DashItem[] = [
  ["/", "Beranda", "home"],
  ["/anak-saya", "Anak Saya", "users"],
  ["/peta-sekolah", "Peta", "map-pin"],
  ["/strategi", "Strategi", "clipboard"],
];

export const POLICY = {
  role: "Pembuat Kebijakan",
  home: "/kebijakan-ringkasan",
  items: [
    ["/kebijakan-ringkasan", "Ringkasan", "bar-chart"],
    ["/kebijakan-rasio", "Rasio Kursi", "map"],
    ["/kebijakan-blank-spot", "Peta Blank Spot", "map-pin"],
    ["/kebijakan-pendaftar", "Pendaftar Sekolah", "school"],
    ["/kebijakan-ekspor", "Ekspor Laporan", "download"],
  ] as DashItem[],
};

export const ADMIN = {
  role: "Admin",
  home: "/admin-aturan",
  items: [
    ["/admin-aturan", "Aturan PPDB", "clipboard"],
    ["/admin-sekolah", "Data Sekolah", "school"],
    ["/admin-impor", "Impor Data Seleksi", "upload"],
    ["/admin-model", "Model Peluang", "settings"],
    ["/admin-pengguna", "Pengguna", "users"],
  ] as DashItem[],
};

// Halaman turunan menandai menu induknya (misal /isi-data/3 menandai "Anak Saya").
const PARENT_OF: readonly (readonly [prefix: string, menu: string])[] = [
  ["/isi-data", "/anak-saya"],
  ["/detail-sekolah", "/peta-sekolah"],
  ["/cadangan", "/strategi"],
];

const under = (pathname: string, prefix: string) =>
  pathname === prefix || pathname.startsWith(`${prefix}/`);

/** Menu navbar yang aktif untuk sebuah path. */
export function activeHref(pathname: string): string {
  return PARENT_OF.find(([prefix]) => under(pathname, prefix))?.[1] ?? pathname;
}

/** Bottom nav tidak punya "Unduhan"; halaman itu menandai "Strategi". */
export function activeBottom(pathname: string): string {
  const href = activeHref(pathname);
  return href === "/unduhan" ? "/strategi" : href;
}
