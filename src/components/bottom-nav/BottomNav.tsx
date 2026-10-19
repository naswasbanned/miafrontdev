"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { activeBottom, BOTTOM } from "@/lib/nav";
import { Icon } from "../icon/Icon";

/** Navigasi tetap di bawah layar, hanya tampil < 600px (diatur CSS). */
export function BottomNav() {
  const current = activeBottom(usePathname());
  return (
    <nav className="bottom-nav" aria-label="Navigasi bawah">
      <ul className="bottom-nav__list">
        {BOTTOM.map(([href, label, icon]) => (
          <li key={href}>
            <Link
              className="bottom-nav__link"
              href={href}
              aria-current={href === current ? "page" : undefined}
            >
              <span className="bottom-nav__icon-wrap">
                <Icon name={icon} />
              </span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
