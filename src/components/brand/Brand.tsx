import Link from "next/link";

/** Logo "S" + nama Sipesek. `small` dipakai di footer. */
export function Brand({ href, small }: { href: string; small?: boolean }) {
  return (
    <Link className={`brand${small ? " brand--sm" : ""}`} href={href}>
      <span className="brand__logo" aria-hidden="true">
        S
      </span>
      <span>Sipesek</span>
    </Link>
  );
}
