export type Faq = readonly [question: string, answer: string];
export type FaqGroup = { title: string; items: Faq[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Umum",
    items: [
      [
        "Apakah hasil di sini resmi?",
        "Tidak. Hasilnya perkiraan berdasarkan data tahun-tahun sebelumnya. Keputusan resmi hanya dari panitia PPDB. Pendaftaran tetap lewat situs PPDB resmi.",
      ],
      [
        "Apakah Bapak/Ibu perlu membayar?",
        "Tidak. Aplikasi ini gratis, tanpa iklan, dan data tidak dijual.",
      ],
      [
        "Berapa lama pengisiannya?",
        "Sekitar 8 menit. Isian tersimpan otomatis. Bapak/Ibu bisa berhenti lalu melanjutkan kapan saja, termasuk dari HP lain.",
      ],
    ],
  },
  {
    title: "Data dan privasi",
    items: [
      [
        "Data apa saja yang diminta?",
        "Nama dan tanggal lahir anak, nilai rapor, status keluarga bila ada, prestasi, dan titik rumah. Kami tidak meminta NIK atau NISN.",
      ],
      [
        "Apakah lokasi rumah kami terlihat orang lain?",
        "Tidak. Lokasi disimpan terenkripsi. Dinas hanya melihat data gabungan per kecamatan, tidak pernah titik rumah per keluarga.",
      ],
      [
        "Bagaimana cara menghapus data?",
        "Buka halaman Anak Saya, lalu pilih Hapus akun. Semua data anak ikut terhapus.",
      ],
    ],
  },
  {
    title: "Membaca hasil",
    items: [
      [
        "Apa arti Peluang Besar, Memungkinkan, dan Peluang Kecil?",
        "Peluang Besar: peluang besar berdasarkan data tahun lalu. Memungkinkan: peluang seimbang, tergantung jumlah pendaftar tahun ini. Peluang Kecil: peluang masih kecil, sebaiknya bukan satu-satunya pilihan.",
      ],
      [
        "Mengapa hasilnya berupa rentang, bukan angka pasti?",
        "Karena jumlah pendaftar tahun ini belum diketahui. Rentang lebih jujur daripada satu angka yang terlihat pasti.",
      ],
      [
        "Bagaimana bila alamat di KK berbeda dengan rumah?",
        "Kami tetap menampilkan hasil, menjelaskan dampaknya pada jalur dekat rumah (Domisili), lalu menyarankan jalur lain bila perlu.",
      ],
      [
        "Bagaimana bila data tahun lalu kurang?",
        'Kami menulis "Belum cukup data untuk memperkirakan" daripada menebak.',
      ],
    ],
  },
];
