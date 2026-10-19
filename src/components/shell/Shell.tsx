import type { ReactNode } from "react";
import { BottomNav } from "../bottom-nav/BottomNav";
import { Footer } from "../footer/Footer";
import { DashBar, Navbar } from "../navbar/Navbar";
import { Sidebar, type DashMenu } from "../sidebar/Sidebar";

const SkipLink = () => (
  <a className="skip-link" href="#konten">
    Lewati ke konten
  </a>
);

/** Cangkang area publik dan orang tua. Dipakai oleh layout grup, bukan oleh tiap halaman. */
export function SiteChrome({
  area,
  children,
}: {
  area: "public" | "parent";
  children: ReactNode;
}) {
  const chrome = (
    <>
      <SkipLink />
      <Navbar area={area} />
      <main id="konten">{children}</main>
      <Footer />
      {area === "parent" && <BottomNav />}
    </>
  );
  // Area orang tua memakai bottom nav, jadi diberi ruang di bawah (has-bottom-nav).
  return area === "parent" ? (
    <div className="has-bottom-nav">{chrome}</div>
  ) : (
    chrome
  );
}

/** Cangkang dashboard: bar atas, sidebar, konten. Tanpa footer. */
export function DashChrome({
  menu,
  children,
}: {
  menu: DashMenu;
  children: ReactNode;
}) {
  return (
    <>
      <SkipLink />
      <DashBar home={menu.home} />
      <main id="konten">
        <div className="container dash">
          <Sidebar menu={menu} />
          <div className="dash__main">{children}</div>
        </div>
      </main>
    </>
  );
}
