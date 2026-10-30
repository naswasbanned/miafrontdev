import { NextResponse, type NextRequest } from "next/server";
import {
  buildSession,
  COOKIE,
  homeFor,
  nextWizardHref,
  rolesFor,
  stageOf,
  stageStatus,
} from "@/lib/accounts";

// Penjaga rute (docs/navigation-plan.md bagian 3): login, peran, dan tahap yang terkunci.
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const session = buildSession(
    request.cookies.get(COOKIE.account)?.value,
    request.cookies.get(COOKIE.child)?.value,
    request.cookies.get(COOKIE.progress)?.value,
  );
  const go = (path: string) => NextResponse.redirect(new URL(path, request.url));
  // Cek Cepat tidak boleh di-cache atau diindeks: isiannya pribadi dan tidak disimpan.
  const next = () => {
    const response = NextResponse.next();
    if (pathname.startsWith("/cek-cepat")) {
      response.headers.set("Cache-Control", "no-store");
      response.headers.set("X-Robots-Tag", "noindex");
    }
    return response;
  };

  if (pathname === "/masuk") return session ? go(homeFor(session)) : next();

  const roles = rolesFor(pathname);
  if (!roles) return next();
  if (!session) return go(`/masuk?next=${encodeURIComponent(pathname + search)}`);
  if (!roles.includes(session.role)) return go(`/akses-ditolak?dari=${encodeURIComponent(pathname)}`);

  // Orang tua: Hasil, Strategi, Dokumen hanya terbuka bila data anak aktif sudah lengkap.
  if (session.role === "orang-tua") {
    const stage = stageOf(pathname);
    if (stage && stage !== "data" && stageStatus(session.child)[stage] === "terkunci") {
      return go(`${nextWizardHref(session.child)}?terkunci=${stage}`);
    }
  }
  return next();
}

export const config = {
  matcher: ["/((?!_next/|assets/|favicon|icon).*)"],
};
