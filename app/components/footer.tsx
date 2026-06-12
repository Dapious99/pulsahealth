import Link from "next/link";
import { Logo } from "./nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI triage and care navigation for the next billion health seekers.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Product
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solution" className="hover:text-primary">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-primary">
                  Impact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@pulsahealth.co"
                  className="hover:text-primary"
                >
                  hello@pulsahealth.co
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Legal
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Pulsa Health Ltd. Registered in
            Enugu, Nigeria.
          </div>
          <div>
            Pulsa Health does not replace professional medical advice. In
            emergencies, call your local emergency number.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FooterSimple() {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <Logo />
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pulsa Health Ltd. Enugu, Nigeria.
          </div>
        </div>
      </div>
    </footer>
  );
}
