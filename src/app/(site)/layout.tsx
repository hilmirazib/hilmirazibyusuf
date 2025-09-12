import type { ReactNode } from "react";

export const metadata = { title: "Portfolio" };

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {/* TODO: Navbar */}
      {children}
      {/* TODO: Footer */}
    </section>
  );
}
