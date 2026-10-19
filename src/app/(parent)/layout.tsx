import type { ReactNode } from "react";
import { SiteChrome } from "@/components";

export default function ParentLayout({ children }: { children: ReactNode }) {
  return <SiteChrome area="parent">{children}</SiteChrome>;
}
