import type { ReactNode } from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import "highlight.js/styles/github-dark.css";
import AnalyticsProvider from "@/providers/analytics-provider";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const metadata = { title: "Portfolio" };

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="min-h-[60vh]">
        {children}
      </main>
      <Footer />
      <AnalyticsProvider />
      <VercelAnalytics />
    </>
  );
}
