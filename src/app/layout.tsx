import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles";
import { Sprite } from "@/components/icon/Sprite";
import { ToastProvider, ToastRegion } from "@/components/toast/Toast";

export const metadata: Metadata = {
  title: { template: "%s — SIPESEK", default: "SIPESEK — Sistem Pendaftaran Sekolah" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Sumber font sama dengan baseline agar render identik. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <Sprite />
        <ToastProvider>
          {children}
          <ToastRegion />
        </ToastProvider>
      </body>
    </html>
  );
}
