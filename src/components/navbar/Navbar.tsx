"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { activeHref, NAV } from "@/lib/nav";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

export function Brand({ href }: { href: string }) {
  return (
    <Link className="navbar__brand" href={href}>
      <span className="navbar__logo" aria-hidden="true">
        <Icon name="logo" />
      </span>
      <span>Panduan SPMB</span>
    </Link>
  );
}

/** Bar atas halaman dashboard: hanya merek dan tombol Keluar. */
export function DashBar({ home }: { home: string }) {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Brand href={home} />
        <Button variant="secondary" sm href="/">
          Keluar
        </Button>
      </div>
    </header>
  );
}

/** Menu penuh >= 1024px. Di bawahnya tombol "Menu"; Esc menutup dan mengembalikan fokus. */
export function Navbar({ area }: { area: "public" | "parent" }) {
  const cfg = NAV[area];
  const current = activeHref(usePathname());
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const cur = (href: string) =>
    href === current ? ("page" as const) : undefined;
  return (
    <header
      className="navbar"
      data-navbar=""
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="navbar__inner container">
        <Brand href={cfg.home} />
        <nav className="navbar__nav" aria-label="Utama">
          <ul className="navbar__list">
            {cfg.items.map(([href, label]) => (
              <li key={href}>
                <Link
                  className="navbar__link"
                  href={href}
                  aria-current={cur(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          variant={cfg.cta.variant}
          sm
          href={cfg.cta.href}
          className="navbar__cta"
        >
          {cfg.cta.label}
        </Button>
        <button
          ref={toggle}
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="navbar-menu"
          data-navbar-toggle=""
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" className="icon navbar__toggle-open" />
          <Icon name="x" className="icon navbar__toggle-close" />
          <span data-navbar-label="">{open ? "Tutup" : "Menu"}</span>
        </button>
      </div>
      <div
        className="navbar__menu"
        id="navbar-menu"
        data-navbar-menu=""
        hidden={!open}
      >
        <div className="container">
          <ul className="navbar__menu-list">
            {cfg.items.map(([href, label]) => (
              <li key={href}>
                <Link
                  className="navbar__menu-link"
                  href={href}
                  aria-current={cur(href)}
                >
                  {label}
                  <Icon name="chevron-right" />
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant={cfg.cta.variant}
            block
            href={cfg.cta.href}
            className="navbar__menu-cta"
          >
            {cfg.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
