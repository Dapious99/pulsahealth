"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/solution", label: "Solution" },
  { href: "/technology", label: "Technology" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
];

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h3l2-6 4 12 2-6h7" />
        </svg>
      </span>
      Pulsa<span className="text-primary">.</span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href || pathname === href + "/"
                  ? "text-foreground"
                  : "hover:text-foreground"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}
