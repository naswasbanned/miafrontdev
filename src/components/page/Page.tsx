import type { ReactNode } from "react";
import { Button } from "../button/Button";

// Pembungkus layout tingkat halaman (kelas dari styles/pages.css).

export function Container({
  reading,
  children,
}: {
  reading?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`container${reading ? " container--reading" : ""} page`}>
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  desc,
  actions,
}: {
  title: string;
  desc?: string;
  actions?: ReactNode;
}) {
  return (
    <header className={`page-header${actions ? " page-header--split" : ""}`}>
      <div>
        <h1>{title}</h1>
        {desc && <p className="page-header__desc">{desc}</p>}
      </div>
      {actions && <div className="page-header__actions">{actions}</div>}
    </header>
  );
}

export function Section({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className="page-section" id={id}>
      {children}
    </section>
  );
}

/** Seksi untuk halaman dashboard: judul h2 + deskripsi + isi. */
export function DashSection({
  title,
  desc,
  id,
  children,
}: {
  title: string;
  desc?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className="stack" id={id}>
      <div>
        <h2 className="text-heading-md">{title}</h2>
        {desc && <p className="text-secondary">{desc}</p>}
      </div>
      {children}
    </section>
  );
}

export function CtaBand({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="cta-band">
      <div>
        <h2 className="text-heading-md">{title}</h2>
        <p className="text-secondary">{text}</p>
      </div>
      {children}
    </div>
  );
}

/** Blok penutup tiap tahap: satu tombol ke tahap berikutnya agar orang tua tidak perlu kembali ke navbar. */
export function NextStep({
  step,
  title,
  text,
  href,
  label,
}: {
  step: string;
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="page-section next-step" aria-label="Langkah berikutnya">
      <div className="cta-band">
        <div>
          <p className="next-step__eyebrow">{step}</p>
          <h2 className="text-heading-md">{title}</h2>
          <p>{text}</p>
        </div>
        <Button variant="inverse" lg href={href} icon="arrow-right">
          {label}
        </Button>
      </div>
    </section>
  );
}

export function Toolbar({
  wide,
  children,
}: {
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`toolbar${wide ? " toolbar--wide" : ""}`}>{children}</div>
  );
}
