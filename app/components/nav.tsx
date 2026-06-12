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
    <Link href="/" className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none" aria-hidden>
        <defs>
          <linearGradient id="plg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.68" />
          </linearGradient>
        </defs>

        {/* Badge */}
        <rect x="0.5" y="0.5" width="39" height="39" rx="11" fill="url(#plg)" />
        {/* Inner frame ring */}
        <rect x="2" y="2" width="36" height="36" rx="9.5" stroke="white" strokeOpacity="0.14" strokeWidth="0.75" fill="none" />

        {/* ECG baseline guide */}
        <line x1="4" y1="20" x2="36" y2="20" stroke="white" strokeOpacity="0.09" strokeWidth="0.6" />

        {/* Soft glow at R-peak apex */}
        <ellipse cx="16.5" cy="6" rx="5" ry="3.5" fill="white" fillOpacity="0.08" />

        {/* P wave → QRS complex → T wave */}
        <path
          d="M 4,20 L 7,20
             C 7.4,20 7.9,17.2 8.9,17.2
             C 9.9,17.2 10.3,20 10.7,20
             L 12.8,20 L 13.5,21.7
             L 16.5,5.5
             L 19.2,23.5
             C 19.6,21.3 20.2,20.2 20.7,20.2
             L 22.3,20
             C 22.7,20 23.8,14.6 25.5,14.6
             C 27.2,14.6 28.1,20 28.7,20
             L 36,20"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Apex marker — the critical triage moment */}
        <circle cx="16.5" cy="5.5" r="1.8" fill="white" />
      </svg>

      <span className="font-display text-xl font-semibold tracking-tight">
        Pulsa<span className="text-primary">.</span>
      </span>
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
