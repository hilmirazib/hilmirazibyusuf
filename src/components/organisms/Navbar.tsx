"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 bg-transparent/80 backdrop-blur supports-[backdrop-filter]:bg-transparent/60">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight hidden md:block">
          Hilmi Razib Yusuf
        </Link>
        <Link href="/" className="font-semibold tracking-tight md:hidden mr-5">
          HRY
        </Link>

        {/* Desktop nav */}
        <ul className="gap-1 md:gap-6 flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "rounded px-2 py-1 text-sm transition dark:text-zinc-400",
                  isActive(l.href)
                    ? "bg-zinc-900 text-white"
                    : "dark:text-zinc-400 hover:underline"
                )}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
